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
import { TransactionTypeFindOneTransactionTypeDtoSchema } from '../../../application/find-one/dtos';
import { TransactionTypeFindOneTransactionTypeInput } from '../../../application/find-one/inputs';
import { TransactionTypeFindOneQueryImpl } from '../../../application/find-one/queries';
import { TTransactionTypeFindOneTransactionTypeDto } from '../../../domain/find-one/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_TYPE)
@Resolver(() => TransactionTypeGraphQLType)
export class TransactionsTypeFindOneResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_ONE)
  @Query(() => TransactionTypeGraphQLType, {
    name: 'transactionTypeFindOne',
  })
  async findOne(
    @Args(
      {
        name: 'transactionTypeFindOneTransactionTypeInput',
        type: () => TransactionTypeFindOneTransactionTypeInput,
      },
      new ZodValidationPipe(TransactionTypeFindOneTransactionTypeDtoSchema),
    )
    transactionTypeFindOneTransactionTypeDto: TTransactionTypeFindOneTransactionTypeDto,
  ): Promise<TransactionTypeGraphQLType | null> {
    return this.queryBus.execute<
      TransactionTypeFindOneQueryImpl,
      TransactionTypeGraphQLType | null
    >(
      new TransactionTypeFindOneQueryImpl(
        transactionTypeFindOneTransactionTypeDto,
      ),
    );
  }
}
