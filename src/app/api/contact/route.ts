import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/gmailService";
import { template } from "@/lib/email/template";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Prosím vyplňte meno, email a správu." },
        { status: 400 },
      );
    }

    await sendEmail({
      to: process.env.CONTACT_RECEIVER!,
      subject: `Nová rezervácia hodiny od ${name}`,
      replyTo: email,
      html: template({ name, email, phone, message }),
    });

    return NextResponse.json({
      message: "Správa bola úspešne odoslaná.",
    });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    return NextResponse.json(
      { message: "Správu sa nepodarilo odoslať." },
      { status: 500 },
    );
  }
}
