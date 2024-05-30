import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { keycloakConfig } from '../../config';
import { TransactionTypeCountManyQueryHandler } from './application/count-many/queries';
import { TransactionTypeFindManyQueryHandler } from './application/find-many/queries';
import { TransactionTypeFindOneQueryHandler } from './application/find-one/queries';
import { TransactionsTypeRepository } from './infrastructure/common/repositories';
import { TransactionsTypeCountManyResolver } from './infrastructure/count-many/resolvers';
import { TransactionsTypeFindManyResolver } from './infrastructure/find-many/resolvers';
import {
  TransactionsTransactionTypeResolver,
  TransactionsTypeFindOneResolver,
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
    TransactionsTypeRepository,
    TransactionTypeFindOneQueryHandler,
    TransactionTypeFindManyQueryHandler,
    TransactionTypeCountManyQueryHandler,
    TransactionsTypeCountManyResolver,
    TransactionsTypeFindManyResolver,
    TransactionsTypeFindOneResolver,
    TransactionsTransactionTypeResolver,
  ],
})
export class TransactionsTypeModule {}
