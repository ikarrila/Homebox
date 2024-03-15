import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { EmailsService } from './emails.service';
import { Email } from './schema/email.schema';

@Controller('emails')
export class EmailsController {
 constructor(private readonly emailsService: EmailsService) {}

    @Get()
    async findAll(): Promise<Email[]> {
        return this.emailsService.findAll();
    }

    @Post()
    create(@Body() emailData: Email) {

        //Määrittää roomChoice -kentälle noDataSent-kentän jos roomChoices on tyhjä, muuten se
        //voi aiheuttaa ongelmia frontendissä koska kenttien määrä vaihtelee
        if (Object.keys(emailData.roomChoices).length === 0) {
            emailData.roomChoices.noDataSent = true;
        }

        return this.emailsService.create(emailData);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.emailsService.delete(id);
    }

}
