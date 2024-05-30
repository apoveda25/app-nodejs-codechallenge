import { ZodValidationPipe } from '@app/shared';
import { TransactionGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Resource, Scopes } from 'nest-keycloak-connect';
import { TransactionFindOneTransactionDtoSchema } from '../../../application/find-one/dtos';
import { TransactionFindOneTransactionInput } from '../../../application/find-one/inputs';
import { TransactionFindOneQueryImpl } from '../../../application/find-one/queries';
import { TTransactionFindOneTransactionDto } from '../../../domain/find-one/dtos';

// @UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS)
@Resolver(() => TransactionGraphQLType)
export class TransactionsFindOneResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_ONE)
  @Query(() => TransactionGraphQLType, {
    name: 'transactionFindOne',
  })
  async findOne(
    @Args(
      {
        name: 'transactionFindOneTransactionInput',
        type: () => TransactionFindOneTransactionInput,
      },
      new ZodValidationPipe(TransactionFindOneTransactionDtoSchema),
    )
    transactionFindOneTransactionDto: TTransactionFindOneTransactionDto,
  ): Promise<TransactionGraphQLType | null> {
    return this.queryBus.execute<
      TransactionFindOneQueryImpl,
      TransactionGraphQLType | null
    >(new TransactionFindOneQueryImpl(transactionFindOneTransactionDto));
  }
}
