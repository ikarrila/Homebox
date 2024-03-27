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
      .map(([key, value]) => `${key} : ${value} <br>`);

    const htmlContent = `
    <div><b>Customer Name:</b><br> ${newEmail.name}</div><br>
    <div><b>Email:</b><br> ${newEmail.email}</div><br>
    <div><b>Phone:</b><br> ${newEmail.phone}</div><br>
    <div><b>Type of rental:</b><br>${newEmail.source}</div><br>
    ${newEmail.furnishingLevel ? `<div><b>Furnishing Level:</b><br>${newEmail.furnishingLevel}</div><br>` : ' '} 
    <div><b>Room Choices:</b><br> ${roomChoicesStr}</div><br>
    ${newEmail.location ? `<div><b>Location:</b><br> ${newEmail.location}</div><br>` : ' '}
    ${newEmail.textField ? `<div><b>Free textfield message:</b><br>${newEmail.textField}</div><br>` : ' '}
    ${newEmail.rentalStart ? `<div><b>Rental Start:</b><br>${newEmail.rentalStart}</div><br>` : ' '}
    ${newEmail.rentalLength ? `<div><b>Rental Length:</b><br>${newEmail.rentalLength}</div><br>` : ' '}
    `;

    const mailOptions = {
      from: {
        name: 'minä',
        address: process.env.SMTP_USER,
      },
      to: [process.env.SMTP_USER],
      subject: `New ${newEmail.source} from ${newEmail.name}`,
      text: 'content if HTML is not supported',
      html: `${htmlContent}`,
    };
    sendMail(transporter, mailOptions);

    return newEmail.save();
  }
}
