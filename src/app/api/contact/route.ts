import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, topic, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !isValidEmail(email.trim()) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in all fields with a valid email." }, { status: 400 });
  }

  const topicLine = typeof topic === "string" && topic.trim() ? `Topic: ${topic.trim()}\n` : "";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "info@qognilum.eu";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Qognilum Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email.trim(),
    subject: `New contact form message from ${name.trim()}`,
    text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n${topicLine}\n${message.trim()}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
