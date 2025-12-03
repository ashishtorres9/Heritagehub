import { Resend } from "resend";

async function getCredentials() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    throw new Error(
      "Resend credentials missing. Please set RESEND_API_KEY and RESEND_FROM_EMAIL in your environment (including Netlify site env vars)."
    );
  }

  console.log("Using environment variables for Resend");

  return { apiKey, fromEmail };
}

export async function getUncachableResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail,
  };
}
