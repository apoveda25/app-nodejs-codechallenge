import {
  TransactionGraphQLType,
  TransactionTypeGraphQLType,
} from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import {
  AuthGuard,
  Resource,
  ResourceGuard,
  Scopes,
} from 'nest-keycloak-connect';
import { TransactionTypeFindOneQueryImpl } from '../../../application/find-one/queries';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_TYPE)
@Resolver(() => TransactionGraphQLType)
export class TransactionsTransactionTypeResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_ONE)
  @ResolveField(() => TransactionTypeGraphQLType)
  async transactionType(
    @Parent() transaction: TransactionGraphQLType,
  ): Promise<TransactionTypeGraphQLType | null> {
    return this.queryBus.execute<
      TransactionTypeFindOneQueryImpl,
      TransactionTypeGraphQLType | null
    >(
      new TransactionTypeFindOneQueryImpl({
        id: transaction.transactionTypeId,
      }),
    );
  }
}
