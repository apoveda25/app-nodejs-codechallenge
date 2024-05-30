import { ZodValidationPipe } from '@app/shared';
import { TransactionStatusGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Resource, Scopes } from 'nest-keycloak-connect';
import { TransactionStatusCountManyTransactionStatusDtoSchema } from '../../../application/count-many/dtos';
import { TransactionStatusCountManyTransactionStatusInput } from '../../../application/count-many/inputs';
import { TransactionStatusCountManyQueryImpl } from '../../../application/count-many/queries';
import { TTransactionStatusCountManyTransactionStatusDto } from '../../../domain/count-many/dtos';

// @UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_STATUS)
@Resolver(() => TransactionStatusGraphQLType)
export class TransactionsStatusCountManyResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.COUNT_MANY)
  @Query(() => Number, {
    name: 'transactionStatusCountMany',
  })
  async countMany(
    @Args(
      {
        name: 'transactionStatusCountManyTransactionStatusInput',
        type: () => TransactionStatusCountManyTransactionStatusInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(
        TransactionStatusCountManyTransactionStatusDtoSchema,
      ),
    )
    transactionStatusCountManyTransactionStatusDto: TTransactionStatusCountManyTransactionStatusDto,
  ): Promise<number> {
    return this.queryBus.execute<TransactionStatusCountManyQueryImpl, number>(
      new TransactionStatusCountManyQueryImpl(
        transactionStatusCountManyTransactionStatusDto,
      ),
    );
  }
}
