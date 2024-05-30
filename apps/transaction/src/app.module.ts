import { CorrelationIdMiddleware } from '@app/shared';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import {
  AcceptLanguageResolver,
  I18nMiddleware,
  I18nModule,
} from 'nestjs-i18n';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'node:path/posix';
import { graphqlMercuriusConfig, loggerConfig } from './config';
import { validate } from './env.validation';
import { TransactionsStatusModule } from './modules/transactions-status/transactions-status.module';
import { TransactionsTypeModule } from './modules/transactions-type/transactions-type.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate,
      envFilePath: join(process.cwd(), '.env'),
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: loggerConfig,
    }),
    GraphQLModule.forRootAsync<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: graphqlMercuriusConfig,
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.getOrThrow('I18N_FALLBACK_LANGUAGE'),
        loaderOptions: {
          path: join(__dirname, 'assets/i18n'),
          watch: true,
        },
      }),
      resolvers: [AcceptLanguageResolver],
      inject: [ConfigService],
    }),
    TransactionsModule,
    TransactionsTypeModule,
    TransactionsStatusModule,
  ],
})
export class AppModule implements NestModule {
  /**
   * Applies global middleware for log correlation per request
   * @param consumer - A MiddlewareConsumer instance injected by nestjs
   * @see {@link https://docs.nestjs.com/middleware|Nestjs - Middleware}
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware, I18nMiddleware);
  }
}
