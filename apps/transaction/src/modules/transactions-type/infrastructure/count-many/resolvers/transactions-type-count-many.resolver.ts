import { ZodValidationPipe } from '@app/shared';
import { TransactionTypeGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  AuthGuard,
  Resource,
  ResourceGuard,
  Scopes,
} from 'nest-keycloak-connect';
import { TransactionTypeCountManyTransactionTypeDtoSchema } from '../../../application/count-many/dtos';
import { TransactionTypeCountManyTransactionTypeInput } from '../../../application/count-many/inputs';
import { TransactionTypeCountManyQueryImpl } from '../../../application/count-many/queries';
import { TTransactionTypeCountManyTransactionTypeDto } from '../../../domain/count-many/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_TYPE)
@Resolver(() => TransactionTypeGraphQLType)
export class TransactionsTypeCountManyResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.COUNT_MANY)
  @Query(() => Number, {
    name: 'transactionTypeCountMany',
  })
  async countMany(
    @Args(
      {
        name: 'transactionTypeCountManyTransactionTypeInput',
        type: () => TransactionTypeCountManyTransactionTypeInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionTypeCountManyTransactionTypeDtoSchema),
    )
    transactionTypeCountManyTransactionTypeDto: TTransactionTypeCountManyTransactionTypeDto,
  ): Promise<number> {
    return this.queryBus.execute<TransactionTypeCountManyQueryImpl, number>(
      new TransactionTypeCountManyQueryImpl(
        transactionTypeCountManyTransactionTypeDto,
      ),
    );
  }
}
