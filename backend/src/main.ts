import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//the main entry point for the app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //HUOMIO: app.enableCors() mahdollistaa backend-frontend keskustelun,  !!!!!!!!!!!!!!!!
  //mutta tuotannossa hyväksyttyjä domaineja tulee rajoittaa (ehkä?)     !!!!!!!!!!!!!!!!
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
