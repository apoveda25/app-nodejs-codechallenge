import { EServices } from '@app/shared/domain/enums';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { keycloakConfig } from '../../config';
import { TransactionCountManyQueryHandler } from './application/count-many/queries';
import { TransactionCreateOneCommandHandler } from './application/create-one/commands';
import { TransactionCreatedOneEventHandler } from './application/create-one/events';
import { TransactionCreateOneService } from './application/create-one/services';
import { TransactionFindManyQueryHandler } from './application/find-many/queries';
import { TransactionFindOneQueryHandler } from './application/find-one/queries';
import { TransactionUpdateOneCommandHandler } from './application/update-one/commands';
import { TransactionUpdatedOneEventHandler } from './application/update-one/events';
import { TransactionUpdateOneService } from './application/update-one/services';
import {
  TransactionsRepository,
  TransactionsStatusRepository,
  TransactionsTypeRepository,
} from './infrastructure/common/repositories';
import { TransactionsCountManyResolver } from './infrastructure/count-many/resolvers';
import { TransactionsCreateOneResolver } from './infrastructure/create-one/resolvers';
import {
  TransactionsFindManyResolver,
  TransactionsStatusTransactionsResolver,
  TransactionsTypeTransactionsResolver,
} from './infrastructure/find-many/resolvers';
import { TransactionsFindOneResolver } from './infrastructure/find-one/resolvers';
import { TransactionsUpdateOneController } from './infrastructure/update-one/controllers';
import { TransactionsUpdateOneResolver } from './infrastructure/update-one/resolvers';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: keycloakConfig,
    }),
    ClientsModule.registerAsync([
      {
        name: EServices.TRANSACTIONS,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: EServices.TRANSACTIONS,
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: `${EServices.TRANSACTIONS}-client`,
              brokers: [configService.get<string>('QUEUE_URL')],
              createPartitioner: Partitioners.LegacyPartitioner,
            },
            consumer: {
              groupId: `${EServices.TRANSACTIONS}-consumer`,
            },
          },
        }),
      },
    ]),
    CqrsModule,
  ],
  providers: [
    TransactionsRepository,
    TransactionsCreateOneResolver,
    TransactionCreateOneCommandHandler,
    TransactionCreateOneService,
    TransactionsTypeRepository,
    TransactionsStatusRepository,
    TransactionCreatedOneEventHandler,
    TransactionFindOneQueryHandler,
    TransactionsFindOneResolver,
    TransactionFindManyQueryHandler,
    TransactionsFindManyResolver,
    TransactionCountManyQueryHandler,
    TransactionsCountManyResolver,
    TransactionUpdatedOneEventHandler,
    TransactionUpdateOneService,
    TransactionUpdateOneCommandHandler,
    TransactionsUpdateOneResolver,
    TransactionsTypeTransactionsResolver,
    TransactionsStatusTransactionsResolver,
  ],
  controllers: [TransactionsUpdateOneController],
})
export class TransactionsModule {}
