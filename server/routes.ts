import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { getUncachableResendClient } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store submission
      const submission = await storage.createContactSubmission(validatedData);

      // Send email notification
      try {
        const { client: resend, fromEmail } = await getUncachableResendClient();

        const emailContent = `
New Contact Form Submission - Heritage Hub Nepal

Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Land Size: ${validatedData.landSize}
Model Preference: ${validatedData.modelPreference}

Submitted at: ${new Date().toLocaleString()}
        `;

        await resend.emails.send({
          from: fromEmail,
          to: "heritagehubnepal@gmail.com",
          subject: `New Contact Form Submission - ${validatedData.name}`,
          text: emailContent,
          replyTo: validatedData.email,
        });

        res.json({ success: true, submission });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        res.status(500).json({ 
          error: "Failed to send email notification. Please contact us directly at heritagehubnepal@gmail.com" 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Invalid submission data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
