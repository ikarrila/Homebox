import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from './schema/email.schema';
import sendMail from './lib/email'; // Fix the import path
import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

@Injectable()
export class EmailsService {
  constructor(@InjectModel(Email.name) private emailModel: Model<Email>) {}

  async findAll(): Promise<Email[]> {
    return this.emailModel.find().exec();
  }
  delete(id) {
    return this.emailModel.findByIdAndDelete(id);
  }
  //This sends an email according to environment variables, and also saves to database
  async create(email: Email): Promise<Email> {
    const newEmail = new this.emailModel(email);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    //EDIT THE FORMATTING OF THE EMAIL

    const roomChoicesStr = Object.entries(newEmail.roomChoices)
      .filter(([key, value]) => value) // filter out properties that are not truthy
      .map(([key, value]) => `${key} : ${value} <br>`)
      .join('');

    const monthField =
      newEmail.rentalLength === '13'
        ? 'over a year'
        : `${newEmail.rentalLength} months`;
    const htmlContent = `
    <p>Dear Sales Team,</p>

    <p>A new customer inquiry has been submitted through our website. Here are the details:</p>

    <ul>
        <li>Name: ${newEmail.name}</li>
        <li>Contact Information: ${newEmail.email}</li>
        <li>Phone Number: ${newEmail.phone}</li>
        <li>Nature of Inquiry: <br>
        <div style="margin-left: 20px;">
        <div><b>Type of rental:</b><br>${newEmail.source}</div><br>
        ${newEmail.message ? `<div><b>Message regarding rental length:</b><br>${newEmail.message}</div><br>` : ' '}
        ${newEmail.furnishingLevel ? `<div><b>Furnishing Level:</b><br>${newEmail.furnishingLevel}</div><br>` : ' '} 
        ${newEmail.roomChoices.noDataSent ? ' ' : `<div><b>Room Choices:</b><br> ${roomChoicesStr}</div><br>`} 
        ${newEmail.location ? `<div><b>Location:</b><br> ${newEmail.location}</div><br>` : ' '}
        ${newEmail.rentalStart ? `<div><b>Rental Start:</b><br>${newEmail.rentalStart}</div><br>` : ' '}
        ${newEmail.rentalLength ? `<div><b>Rental Length:</b><br>${monthField} </div><br>` : ' '}
        ${newEmail.textField ? `<div><b>Free textfield message:</b><br>${newEmail.textField}</div><br>` : ' '}
        ${newEmail.homeLink ? `<div><b>Link to home:</b><br>${newEmail.homeLink}</div><br>` : ' '}
        ${newEmail.livingDetails ? `<div><b>Living Details:</b><br>${newEmail.livingDetails}</div><br>` : ' '}
        ${newEmail.budget ? `<div><b>Customer Budget:</b><br>${newEmail.budget}</div><br>` : ' '}
        </div>
        </li>
    </ul>

    <p>Please review this inquiry and reach out to ${newEmail.name} at your earliest convenience to assist them further.<br>
     They have shown interest in our services, and your prompt response can help turn this inquiry into a successful partnership.</p>

    <p>Thank you for your attention to this matter.</p>

    <p>Best regards,</p>
    <p>KEJA<br>Sales Team</p>
    `;

    const mailOptions = {
      from: {
        name: 'KEJA website',
        address: process.env.SMTP_USER,
      },
      //company email from env variables
      to: [process.env.SMTP_USER],
      subject: `New ${newEmail.source} from ${newEmail.name}`,
      text: 'content if HTML is not supported',
      html: `${htmlContent}`,
    };
    sendMail(transporter, mailOptions);

    return newEmail.save();
  }
  async sendEmailtoCustomer(email: Email): Promise<Email> {
    const newEmail = new this.emailModel(email);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const htmlContent = `
    <p>Dear ${newEmail.name},</p>

    <p>Thank you for contacting KEJA! We're thrilled that you've chosen us to help bring your furnishing project to life. Your inquiry is important to us, and we want to assure you that we've received your message. Our team is currently reviewing the details you've provided, and we'll be in touch shortly to discuss next steps.</p>

    <p>In the meantime, feel free to browse our website for inspiration or explore our gallery to see examples of our past projects. We understand the stress that comes with moving and furnishing, and we do everything in our power to ensure your project goes as smoothly as possible.</p>

    <p>Thank you again for choosing KEJA. We're excited to collaborate with you and create a space that reflects your unique style and vision.</p>

    <p>Best regards,</p>
    <p>KEJA-team</p>
    `;

    const mailOptions = {
      from: {
        //name of sender
        name: 'minä',
        address: process.env.SMTP_USER,
      },
      //selecting customer email instead of the company email
      to: [newEmail.email],
      subject: `Thank you for reaching out to KEJA, ${newEmail.name}`,
      text: 'content if HTML is not supported',
      html: `${htmlContent}`,
    };
    sendMail(transporter, mailOptions);

    return newEmail.save();
  }
}
