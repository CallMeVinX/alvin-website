import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const subjectLabels: Record<string, string> = {
  hiring: "Hiring Inquiry (Full-time)",
  collaboration: "Project Collaboration",
  technical: "Technical Question",
  other: "Other",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isPlaceholderValue = (value?: string) => {
  if (!value) {
    return true;
  }

  const normalized = value.trim().toLowerCase();
  return normalized.includes("your-resend-") || normalized === "your-resend-api-key" || normalized === "your-verified-sender@domain.com";
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subjectKey = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !subjectKey || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Please enter a valid professional email." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM_EMAIL;
    const targetEmail = process.env.CONTACT_TO_EMAIL ?? "alvin.dinata.work@gmail.com";

    if (!resendApiKey || !resendFrom) {
      return NextResponse.json(
        { message: "Email service is not configured yet. Please set RESEND_API_KEY and RESEND_FROM_EMAIL." },
        { status: 500 }
      );
    }

    if (isPlaceholderValue(resendApiKey) || isPlaceholderValue(resendFrom)) {
      return NextResponse.json(
        {
          message: "Resend credentials are still placeholders. Update RESEND_API_KEY and RESEND_FROM_EMAIL in .env.local.",
        },
        { status: 500 }
      );
    }

    const subjectLabel = subjectLabels[subjectKey] ?? subjectKey;
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: resendFrom,
      to: [targetEmail],
      replyTo: email,
      subject: `Portfolio Contact: ${subjectLabel}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subjectLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subjectLabel}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,  
    });

    if (error) {
      console.error("[contact-api] resend failed", error);
      return NextResponse.json(
        { message: "Unable to send message right now. Please try again shortly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Message received! I'll get back to you shortly." }, { status: 200 });
  } catch (error) {
    console.error("[contact-api] send mail failed", error);
    return NextResponse.json(
      { message: "Unable to send message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
