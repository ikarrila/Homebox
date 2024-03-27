import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './common/middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailsModule } from './emails/emails.module';
import { EmailsController } from './emails/emails.controller';

@Module({
  imports: [
    //----- configmodule etsii .env tiedostoa ja luo ympäristömuuttujat
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    //----- Emailsmodule on oma moduulinsa
    EmailsModule,
    EmailsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(EmailsController);
  }
}
