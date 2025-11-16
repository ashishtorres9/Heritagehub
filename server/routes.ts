import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { getUncachableResendClient } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    console.log("🟢 [ROUTE HIT] POST /api/contact | Body:", req.body);
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

        const emailResult = await resend.emails.send({
          from: fromEmail,
          to: "contact@heritagehubnepal.com",
          subject: `New Contact Form Submission - ${validatedData.name}`,
          text: emailContent,
          //replyTo: validatedData.email,
        });

        await resend.emails.send({
          from: fromEmail,
          to: validatedData.email,
          subject: "Your Free Farm Assessment Request – Heritage Hub Nepal",
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; background: #F8F4E9; border-radius: 12px;">
              <h2 style="font-family: 'Playfair Display', serif; color: #1A3A2A; font-size: 28px; margin-bottom: 16px;">Thank You!</h2>
              <p style="color: #6B5D56; font-size: 16px; line-height: 1.6;">
                Your request for a free mushroom farming assessment has been received.
              </p>
              <p style="color: #6B5D56; font-size: 16px; line-height: 1.6;">
                <strong>Next Steps:</strong>
              </p>
              <ul style="color: #6B5D56; font-size: 16px; line-height: 1.6; padding-left: 20px; margin: 12px 0;">
                <li>We’ll contact you within <strong>24 hours</strong></li>
                <li>Prepare details about your land (4/5/6 Anna)</li>
                <li>Explore models: <a href="https://heritagehubnepal.com/farm-models" style="color: #2E5E3E; text-decoration: underline;">heritagehubnepal.com/farm-models</a></li>
              </ul>
              <p style="color: #6B5D56; font-size: 14px; margin-top: 24px;">
                Questions? Reply to this email or call <strong>+977 9808390808</strong>.
              </p>
              <p style="color: #6B5D56; font-size: 14px; margin-top: 12px;">
                — The Heritage Hub Nepal Team
              </p>
            </div>
          `,
        });
    

        //console.log("Email sent successfully:", emailResult);
        console.log("📧 Email send result:", JSON.stringify(emailResult, null, 2));
        res.json({ success: true, submission });
      } catch (emailError: any) {
        console.error("Failed to send email:", emailError);
        console.error("Error details:", {
          message: emailError?.message,
          name: emailError?.name,
          stack: emailError?.stack
        });

        
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
