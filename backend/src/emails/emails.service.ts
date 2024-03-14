import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from './schema/email.schema';

@Injectable()
export class EmailsService {
    constructor(
        @InjectModel(Email.name) private emailModel: Model<Email>,
    ) {}

    async create(email: Email): Promise<Email> {
        const newEmail = new this.emailModel(email);
        return newEmail.save();
    }
    async findAll(): Promise<Email[]> {
        return this.emailModel.find().exec();
    }
    delete(id) {
        return this.emailModel.findByIdAndDelete(id);
    }

}
