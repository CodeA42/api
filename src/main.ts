import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import GenericErrorFilter from './filters/generic.filter';
import { ConfigService } from '@nestjs/config';
import { server } from './config/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.use(new ValidationPipe());
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GenericErrorFilter(httpAdapter));
  await app.listen(configService.get<number>(server.port) || 3000);
}
bootstrap();
