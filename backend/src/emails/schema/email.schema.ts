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

  @Prop({ required: true })
  textField: string;

  @Prop({ required: true })
  furnishingLevel: string;

  @Prop({ required: true, type: Object })
  roomChoices: any;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
