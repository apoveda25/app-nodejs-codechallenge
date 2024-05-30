import { CorrelationIdMiddleware } from '@app/shared';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'node:path/posix';
import { loggerConfig } from './config';
import { validateEnvForAntifraudService } from './env.validation';
import { AntifraudModule } from './modules/antifraud/antifraud.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnvForAntifraudService,
      envFilePath: join(process.cwd(), '.env'),
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: loggerConfig,
    }),
    AntifraudModule,
  ],
})
export class AppModule {
  /**
   * Applies global middleware for log correlation per request
   * @param consumer - A MiddlewareConsumer instance injected by nestjs
   * @see {@link https://docs.nestjs.com/middleware|Nestjs - Middleware}
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware);
  }
}
