// import { NextResponse } from "next/server";
// import { sendEmail } from "@/lib/email/gmailService";
// import { template } from "@/lib/email/template";

// export async function POST(req: Request) {
//   try {
//     const { name, email, phone, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { message: "Prosím vyplňte meno, email a správu." },
//         { status: 400 },
//       );
//     }

//     await sendEmail({
//       to: process.env.CONTACT_RECEIVER!,
//       subject: `Nová rezervácia hodiny od ${name}`,
//       replyTo: email,
//       html: template({ name, email, phone, message }),
//     });

//     return NextResponse.json({
//       message: "Správa bola úspešne odoslaná.",
//     });
//   } catch (error) {
//     console.error("CONTACT_FORM_ERROR:", error);

//     return NextResponse.json(
//       { message: "Správu sa nepodarilo odoslať." },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/gmailService";
import { template } from "@/lib/email/template";
import { corporateTemplate } from "@/lib/email/corporateTemplate";

type ContactRequestBody = {
  formType?: "contact" | "corporate";

  name?: string;
  email?: string;
  phone?: string;
  message?: string;

  companyName?: string;
  employeeCount?: string | number;
  englishLevel?: string;
  frequency?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactRequestBody;

    if (body.formType === "corporate") {
      return handleCorporateForm(body);
    }

    return handleContactForm(body);
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    return NextResponse.json(
      { message: "Správu sa nepodarilo odoslať." },
      { status: 500 },
    );
  }
}

async function handleContactForm(body: ContactRequestBody) {
  const { name, email, phone, message } = body;

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
    html: template({
      name,
      email,
      phone: phone ?? "",
      message,
    }),
  });

  return NextResponse.json({
    message: "Správa bola úspešne odoslaná.",
  });
}

async function handleCorporateForm(body: ContactRequestBody) {
  const {
    name,
    email,
    phone,
    message,
    companyName,
    employeeCount,
    englishLevel,
    frequency,
  } = body;

  if (
    !name ||
    !email ||
    !companyName ||
    !employeeCount ||
    !englishLevel ||
    !frequency
  ) {
    return NextResponse.json(
      {
        message:
          "Prosím vyplňte názov firmy, kontaktnú osobu, email, počet zamestnancov, úroveň angličtiny a frekvenciu výučby.",
      },
      { status: 400 },
    );
  }

  await sendEmail({
    to: process.env.CONTACT_RECEIVER!,
    subject: `Nová firemná cenová ponuka – ${companyName}`,
    replyTo: email,
    html: corporateTemplate({
      name,
      email,
      phone: phone ?? "",
      message: message ?? "",
      companyName,
      employeeCount: String(employeeCount),
      englishLevel,
      frequency,
    }),
  });

  return NextResponse.json({
    message: "Žiadosť o cenovú ponuku bola úspešne odoslaná.",
  });
}
