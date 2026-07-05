import { google } from "googleapis";
import MailComposer from "nodemailer/lib/mail-composer";

type SendEmailProps = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const gmail = google.gmail({
  version: "v1",
  auth: oauth2Client,
});

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: SendEmailProps) {
  const mailOptions = {
    from: `WELSAN <${process.env.OAUTH_EMAIL}>`,
    to,
    subject,
    html,
    replyTo,
    textEncoding: "base64" as const,
  };

  const mail = new MailComposer(mailOptions);
  const message = await mail.compile().build();

  const rawMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const result = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: rawMessage,
    },
  });

  return result.data;
}
