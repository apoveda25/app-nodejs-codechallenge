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
  const logger = app.get(LoggerPino);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `${configService.get<string>('ANTIFRAUD_SERVICE_NAME')}-client`,
        brokers: [configService.get<string>('QUEUE_URL')],
      },
      consumer: {
        groupId: `${configService.get<string>('ANTIFRAUD_SERVICE_NAME')}-consumer`,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(
    configService.getOrThrow<number>('ANTIFRAUD_API_PORT'),
    configService.getOrThrow<string>('ANTIFRAUD_API_ADDRESS'),
  );

  LoggerNest.verbose(`Application is running on: 🚀 ${await app.getUrl()}`);

  app.useLogger(logger);
}
bootstrap();
