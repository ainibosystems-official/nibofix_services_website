import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      services,
      total,
      name,
      email,
      phone,
      message,
      lang,
    } = data;

    /* =========================
       BASIC VALIDATION
    ========================= */
    if (!email && !phone) {
      return NextResponse.json(
        { success: false, error: "Missing contact information" },
        { status: 400 }
      );
    }

    /* =========================
   BUILD EMAIL CONTENT
========================= */
    const lines =
      services.length > 0
        ? services
          .slice(0, 50) // safety limit
          .map(
            (s: any) =>
              `• ${s.label}: ${s.quantity} ${s.unit} = €${s.subtotal}`
          )
          .join("\n")
        : "No services selected (general inquiry)";

    const emailText = `
NEW OFFER REQUEST (${String(lang).toUpperCase()})

SERVICES:
${lines}

TOTAL: €${total || "-"}

CONTACT:
Name: ${name || "-"}
Email: ${email || "-"}
Phone: ${phone || "-"}

MESSAGE:
${message || "-"}
`.trim();

    /* =========================
       SEND EMAIL (placeholder)
    ========================= */
    // Later you will replace this with:
    // Resend / Nodemailer / SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Offer Request – NiBoFix",
      text: emailText,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("SEND OFFER ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
