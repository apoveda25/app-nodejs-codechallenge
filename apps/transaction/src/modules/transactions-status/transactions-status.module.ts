import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { keycloakConfig } from '../../config';
import { TransactionStatusCountManyQueryHandler } from './application/count-many/queries';
import { TransactionStatusFindManyQueryHandler } from './application/find-many/queries';
import { TransactionStatusFindOneQueryHandler } from './application/find-one/queries';
import { TransactionsStatusRepository } from './infrastructure/common/repositories';
import { TransactionsStatusCountManyResolver } from './infrastructure/count-many/resolvers';
import { TransactionsStatusFindManyResolver } from './infrastructure/find-many/resolvers';
import {
  TransactionsStatusFindOneResolver,
  TransactionsTransactionStatusResolver,
} from './infrastructure/find-one/resolvers';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: keycloakConfig,
    }),
    CqrsModule,
  ],
  providers: [
    TransactionsStatusRepository,
    TransactionStatusFindOneQueryHandler,
    TransactionStatusFindManyQueryHandler,
    TransactionStatusCountManyQueryHandler,
    TransactionsStatusFindOneResolver,
    TransactionsStatusFindManyResolver,
    TransactionsStatusCountManyResolver,
    TransactionsTransactionStatusResolver,
  ],
})
export class TransactionsStatusModule {}
