import { ZodValidationPipe } from '@app/shared';
import { TransactionStatusGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Resource, Scopes } from 'nest-keycloak-connect';
import { TransactionStatusFindOneTransactionStatusDtoSchema } from '../../../application/find-one/dtos';
import { TransactionStatusFindOneTransactionStatusInput } from '../../../application/find-one/inputs';
import { TransactionStatusFindOneQueryImpl } from '../../../application/find-one/queries';
import { TTransactionStatusFindOneTransactionStatusDto } from '../../../domain/find-one/dtos';

// @UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_STATUS)
@Resolver(() => TransactionStatusGraphQLType)
export class TransactionsStatusFindOneResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_ONE)
  @Query(() => TransactionStatusGraphQLType, {
    name: 'transactionStatusFindOne',
  })
  async findOne(
    @Args(
      {
        name: 'transactionStatusFindOneTransactionStatusInput',
        type: () => TransactionStatusFindOneTransactionStatusInput,
      },
      new ZodValidationPipe(TransactionStatusFindOneTransactionStatusDtoSchema),
    )
    transactionStatusFindOneTransactionStatusDto: TTransactionStatusFindOneTransactionStatusDto,
  ): Promise<TransactionStatusGraphQLType | null> {
    return this.queryBus.execute<
      TransactionStatusFindOneQueryImpl,
      TransactionStatusGraphQLType | null
    >(
      new TransactionStatusFindOneQueryImpl(
        transactionStatusFindOneTransactionStatusDto,
      ),
    );
  }
}
