import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmailDocument = HydratedDocument<Email>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Email {
  @Prop({ required: true })
  source: string;

  @Prop()
  furnishingLevel: string;

  @Prop()
  location: string;

  @Prop({ type: Object })
  roomChoices: any;

  @Prop()
  rentalStart: string;

  @Prop()
  rentalLength: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  textField: string;

  @Prop()
  message: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  budget: string;

  @Prop()
  homeLink: string;

  @Prop()
  livingDetails: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
