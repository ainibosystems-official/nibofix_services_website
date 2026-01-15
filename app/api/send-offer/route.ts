import { NextResponse } from "next/server";

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
    console.log("=== NEW OFFER REQUEST ===");
    console.log(emailText);

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
