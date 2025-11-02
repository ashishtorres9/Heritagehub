import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store submission
      const submission = await storage.createContactSubmission(validatedData);

      // Send email notification
      try {
        // Create transporter - in production, use proper SMTP credentials
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER || "noreply@heritagehubnepal.com",
            pass: process.env.EMAIL_PASSWORD || "",
          },
        });

        const emailContent = `
New Contact Form Submission - Heritage Hub Nepal

Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Land Size: ${validatedData.landSize}
Model Preference: ${validatedData.modelPreference}

Submitted at: ${new Date().toLocaleString()}
        `;

        await transporter.sendMail({
          from: '"Heritage Hub Nepal Website" <noreply@heritagehubnepal.com>',
          to: "heritagehubnepal@gmail.com",
          subject: `New Contact Form Submission - ${validatedData.name}`,
          text: emailContent,
          replyTo: validatedData.email,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails - submission is still stored
      }

      res.json({ success: true, submission });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Invalid submission data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
