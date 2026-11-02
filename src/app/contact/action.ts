"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;
const RATE_LIMIT_MS = 30_000;

const recentSubmissions = new Map<string, number>();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= MAX_EMAIL;
}

function rateLimit(key: string): boolean {
  const now = Date.now();
  const last = recentSubmissions.get(key);
  if (last && now - last < RATE_LIMIT_MS) return false;
  recentSubmissions.set(key, now);
  if (recentSubmissions.size > 1000) {
    const oldest = [...recentSubmissions.entries()]
      .sort((a, b) => a[1] - b[1])
      .slice(0, 500);
    for (const [k] of oldest) recentSubmissions.delete(k);
  }
  return true;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypot = formData.get("website");
  if (honeypot) {
    return { status: "success", message: "Thank you. We'll be in touch shortly." };
  }

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || name.length > MAX_NAME) {
    return { status: "error", message: "Please enter your name (max 100 characters)." };
  }
  if (!email || !isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { status: "error", message: "Please include a message (at least 10 characters)." };
  }
  if (message.length > MAX_MESSAGE) {
    return { status: "error", message: `Message is too long (max ${MAX_MESSAGE} characters).` };
  }

  if (!rateLimit(email)) {
    return { status: "error", message: "Please wait a moment before submitting again." };
  }

  const providerUrl = process.env.CONTACT_PROVIDER_URL;
  const providerKey = process.env.CONTACT_PROVIDER_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!providerUrl || !providerKey || !contactEmail) {
    console.log(
      "[NOIR Contact] Submission received but no email provider configured.",
      { name, email, messageLength: message.length }
    );
    return {
      status: "success",
      message:
        "Thank you for your message. This demo doesn't have an email provider configured yet — in production, your message would be delivered.",
    };
  }

  try {
    const res = await fetch(providerUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${providerKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NOIR Contact <noreply@noir-studio.dev>",
        to: contactEmail,
        subject: `New contact from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      console.error("[NOIR Contact] Provider error:", res.status);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again or email us directly.",
      };
    }

    return {
      status: "success",
      message: "Thank you. We'll be in touch shortly.",
    };
  } catch (err) {
    console.error("[NOIR Contact] Network error:", err);
    return {
      status: "error",
      message: "Could not reach the email service. Please try again later.",
    };
  }
}
