import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailSchema, Email } from './schema/email.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),
  ],
  providers: [EmailsService],
  controllers: [EmailsController],
  exports: [EmailsService],
})
export class EmailsModule {}
