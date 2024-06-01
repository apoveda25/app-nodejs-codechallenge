import {
  TransactionGraphQLType,
  TransactionStatusGraphQLType,
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
import { TransactionStatusFindOneQueryImpl } from '../../../application/find-one/queries';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_STATUS)
@Resolver(() => TransactionGraphQLType)
export class TransactionsTransactionStatusResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_ONE)
  @ResolveField(() => TransactionStatusGraphQLType)
  async transactionType(
    @Parent() transaction: TransactionGraphQLType,
  ): Promise<TransactionStatusGraphQLType | null> {
    return this.queryBus.execute<
      TransactionStatusFindOneQueryImpl,
      TransactionStatusGraphQLType | null
    >(
      new TransactionStatusFindOneQueryImpl({
        id: transaction.transactionStatusId,
      }),
    );
  }
}
