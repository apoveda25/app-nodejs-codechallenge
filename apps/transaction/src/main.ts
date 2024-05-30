import { Logger as LoggerNest } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger as LoggerPino } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true, bufferLogs: true },
  );

  const configService = app.get(ConfigService);
  const prefix = configService.getOrThrow<string>('TRANSACTION_APP_API_PATH');
  const logger = app.get(LoggerPino);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `${configService.get<string>('TRANSACTION_SERVICE_NAME')}-client`,
        brokers: [configService.get<string>('QUEUE_URL')],
      },
      consumer: {
        groupId: `${configService.get<string>('TRANSACTION_SERVICE_NAME')}-consumer`,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(
    configService.getOrThrow<number>('TRANSACTION_APP_API_PORT'),
    configService.getOrThrow<string>('TRANSACTION_APP_API_ADDRESS'),
  );

  LoggerNest.verbose(`Application is running on: 🚀 ${await app.getUrl()}`);
  LoggerNest.verbose(
    `API is running on: 📄 POST ${await app.getUrl()}/${prefix}`,
  );
  LoggerNest.verbose(
    `Docs API is running on: 📖 GET ${await app.getUrl()}/${prefix}`,
  );

  app.useLogger(logger);
}
bootstrap();
