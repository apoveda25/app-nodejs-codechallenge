import { EServices } from '@app/shared/domain/enums';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { TransactionValidateOneCommandHandler } from './application/validate-one/commands/transaction-validate-one.command-handler';
import { TransactionValidateOneEventHandler } from './application/validate-one/events/transaction-validate-one.event-handler';
import { AntifraudController } from './infrastructure/validate-one/controllers/antifraud.controller';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: EServices.ANTIFRAUD,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: EServices.ANTIFRAUD,
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: `${EServices.ANTIFRAUD}-client`,
              brokers: [configService.get<string>('QUEUE_URL')],
              createPartitioner: Partitioners.LegacyPartitioner,
            },
            consumer: {
              groupId: `${EServices.ANTIFRAUD}-consumer`,
            },
          },
        }),
      },
    ]),
    CqrsModule,
  ],
  controllers: [AntifraudController],
  providers: [
    TransactionValidateOneCommandHandler,
    TransactionValidateOneEventHandler,
  ],
})
export class AntifraudModule {}
