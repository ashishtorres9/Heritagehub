import type { Handler } from "@netlify/functions";
import { insertContactSubmissionSchema } from "../../shared/schema";
import { storage } from "../../server/storage";
import { getUncachableResendClient } from "../../server/email";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
      headers: { "Content-Type": "application/json" },
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};

    console.log("🟢 [FUNCTION HIT] POST /api/contact | Body:", body);

    const validatedData = insertContactSubmissionSchema.parse(body);

    // Store submission (in-memory storage for now)
    const submission = await storage.createContactSubmission(validatedData);

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

      console.log("📧 Email send result:", JSON.stringify(emailResult, null, 2));

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, submission }),
        headers: { "Content-Type": "application/json" },
      };
    } catch (emailError: any) {
      console.error("Failed to send email:", emailError);
      console.error("Error details:", {
        message: emailError?.message,
        name: emailError?.name,
        stack: emailError?.stack,
      });

      return {
        statusCode: 500,
        body: JSON.stringify({
          error:
            "Failed to send email notification. Please contact us directly at heritagehubnepal@gmail.com",
        }),
        headers: { "Content-Type": "application/json" },
      };
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid submission data" }),
      headers: { "Content-Type": "application/json" },
    };
  }
};


