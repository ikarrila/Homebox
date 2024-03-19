import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeTemplate from '../../../../emails/WelcomeTemplate';
import { sendEmail } from "../../../../../backend/src/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: process.env.SMTP_USER,
    subject: "Welcome to NextAPI",
    html: render(WelcomeTemplate()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}

