// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// type FormTemplateProps = {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// };

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 10000,
// });

// function template({ name, email, phone, message }: FormTemplateProps) {
//   return `
//         <div style="font-family: Arial, sans-serif; background:#f4f7ff; padding:32px;">
//           <div style="max-width:640px; margin:auto; background:white; border-radius:24px; overflow:hidden; border:1px solid #e5e9f5;">

//             <div style="background:#10265d; padding:28px 32px;">
//               <h1 style="color:#ffffff; margin:0; font-size:26px;">
//                 Nová správa z webu WELSAN
//               </h1>
//               <p style="color:#c9a227; margin:8px 0 0; font-weight:bold;">
//                 Rezervácia online hodiny angličtiny
//               </p>
//             </div>

//             <div style="padding:32px;">
//               <p style="font-size:16px; color:#1a2744;">
//                 Prišla nová správa cez kontaktný formulár:
//               </p>

//               <div style="margin-top:24px;">
//                 <p><strong>Meno:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Telefón:</strong> ${phone || "Neuvedené"}</p>
//               </div>

//               <div style="margin-top:28px; padding:22px; background:#f7f9ff; border-radius:18px;">
//                 <p style="margin:0 0 8px; color:#10265d; font-weight:bold;">
//                   Správa:
//                 </p>
//                 <p style="margin:0; color:#1a2744; line-height:1.6;">
//                   ${message}
//                 </p>
//               </div>

//               <p style="margin-top:32px; color:#7b8498; font-size:13px;">
//                 Odoslané z webovej stránky Angličtina WELSAN.
//               </p>
//             </div>
//           </div>
//         </div>
//       `;
// }

// export async function POST(req: Request) {
//   console.time("contact");
//   try {
//     const { name, email, phone, message } = await req.json();

//     console.timeLog("contact", "JSON parsed");

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { message: "Prosím vyplňte meno, email a správu." },
//         { status: 400 },
//       );
//     }

//     console.timeLog("contact", "Transport created");

//     await transporter.sendMail({
//       from: `"WELSAN web" <${process.env.GMAIL_USER}>`,
//       to: process.env.CONTACT_RECEIVER,
//       replyTo: email,
//       subject: `Nová rezervácia hodiny od ${name}`,
//       html: template({ name, email, phone, message }),
//     });

//     console.timeEnd("contact");

//     return NextResponse.json(
//       { message: "Správa bola úspešne odoslaná." },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("CONTACT_FORM_ERROR:", error);

//     return NextResponse.json(
//       { message: "Správu sa nepodarilo odoslať." },
//       { status: 500 },
//     );
//   }
// }
