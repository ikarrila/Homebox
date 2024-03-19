const nodemailer = require('nodemailer');
require('dotenv').config();

export default async function sendMail(transporter: any, mailOptions: any) {
  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
}
