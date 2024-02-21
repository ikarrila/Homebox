import { Injectable } from '@nestjs/common';
// main service for the app
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
