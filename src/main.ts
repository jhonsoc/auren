/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { loggerConfig } from './common/logging/logger.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });

  app.enableCors();

  const port = process.env.PORT || 4000;
  await app.listen(port);

  const logger = new Logger('Auren');
  logger.log(`✅ Backend corriendo en http://localhost:${port}`);
}
void bootstrap();
