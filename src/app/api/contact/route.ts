import emailjs from "@emailjs/nodejs";
import { z } from "zod";

/** EmailJS SDK uses `node:https`; keep this route on Node (not Edge). */
export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(1).max(120),
  message: z.string().min(10).max(500),
  website: z.string().optional(), // honeypot
});

function trimEnv(v: string | undefined): string | undefined {
  return v?.trim().replace(/^['"]|['"]$/g, "") || undefined;
}

/** EmailJS rejects with EmailJSResponseStatus { status, text }, not Error. */
function errorMessageFromUnknown(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "object" && e !== null && "text" in e) {
    const raw = String((e as { text: string }).text);
    try {
      const parsed = JSON.parse(raw) as { message?: string };
      if (parsed?.message) return String(parsed.message);
    } catch {
      /* plain text body */
    }
    if (raw) return raw.length > 200 ? `${raw.slice(0, 200)}…` : raw;
  }
  return "Failed to send message. Please try again.";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    // honeypot trip: silently succeed (bot)
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return Response.json({ success: true });
    }

    const serviceId = trimEnv(process.env.EMAILJS_SERVICE_ID);
    const templateId = trimEnv(process.env.EMAILJS_TEMPLATE_ID);
    const publicKey = trimEnv(process.env.EMAILJS_PUBLIC_KEY);
    const privateKey = trimEnv(process.env.EMAILJS_PRIVATE_KEY);

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return Response.json(
        { success: false, error: "Server email is not configured" },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Aliases so common EmailJS template variable names all resolve.
    const templateParams: Record<string, string> = {
      name,
      email,
      subject,
      message,
      from_name: name,
      from_email: email,
      user_name: name,
      user_email: email,
      reply_to: email,
    };

    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
      privateKey,
    });

    return Response.json({ success: true });
  } catch (e: unknown) {
    const status =
      typeof e === "object" &&
      e !== null &&
      "status" in e &&
      typeof (e as { status: unknown }).status === "number"
        ? (e as { status: number }).status
        : 500;
    const msg = errorMessageFromUnknown(e);
    return Response.json({ success: false, error: msg }, { status: status >= 400 && status < 600 ? status : 500 });
  }
}
