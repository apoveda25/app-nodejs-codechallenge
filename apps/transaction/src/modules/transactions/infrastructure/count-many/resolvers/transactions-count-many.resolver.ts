import { ZodValidationPipe } from '@app/shared';
import { TransactionGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Resource, Scopes } from 'nest-keycloak-connect';
import { TransactionCountManyTransactionDtoSchema } from '../../../application/count-many/dtos';
import { TransactionCountManyTransactionInput } from '../../../application/count-many/inputs';
import { TransactionCountManyQueryImpl } from '../../../application/count-many/queries';
import { TTransactionCountManyTransactionDto } from '../../../domain/count-many/dtos';

// @UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS)
@Resolver(() => TransactionGraphQLType)
export class TransactionsCountManyResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.COUNT_MANY)
  @Query(() => Number, {
    name: 'transactionCountMany',
  })
  async countMany(
    @Args(
      {
        name: 'transactionCountManyTransactionInput',
        type: () => TransactionCountManyTransactionInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionCountManyTransactionDtoSchema),
    )
    transactionCountManyTransactionDto: TTransactionCountManyTransactionDto,
  ): Promise<number> {
    return this.queryBus.execute<TransactionCountManyQueryImpl, number>(
      new TransactionCountManyQueryImpl(transactionCountManyTransactionDto),
    );
  }
}
