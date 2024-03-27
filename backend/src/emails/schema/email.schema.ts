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

  @Prop({ required: true, type: Object })
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

  @Prop({ required: true })
  phone: number;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
