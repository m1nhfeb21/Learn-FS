import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { logger } from './logger/logger.middleware.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
