import { ZodValidationPipe } from '@app/shared';
import { TransactionGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Resource, Scopes } from 'nest-keycloak-connect';
import { TransactionCreateOneCommandImpl } from '../../../application/create-one/commands';
import { TransactionCreateOneTransactionDtoSchema } from '../../../application/create-one/dtos';
import { TransactionCreateOneTransactionInput } from '../../../application/create-one/inputs';
import { ITransactionCreateOneTransactionDto } from '../../../domain/create-one/dtos';

// @UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS)
@Resolver(() => TransactionGraphQLType)
export class TransactionsCreateOneResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Scopes(EScopes.CREATE_ONE)
  @Mutation(() => TransactionGraphQLType, {
    name: 'transactionCreateOne',
  })
  async createOne(
    @Args(
      {
        name: 'transactionCreateOneTransactionInput',
        type: () => TransactionCreateOneTransactionInput,
      },
      new ZodValidationPipe(TransactionCreateOneTransactionDtoSchema),
    )
    transactionCreateOneTransactionDto: ITransactionCreateOneTransactionDto,
  ): Promise<TransactionGraphQLType> {
    return this.commandBus.execute<
      TransactionCreateOneCommandImpl,
      TransactionGraphQLType
    >(
      new TransactionCreateOneCommandImpl({
        ...transactionCreateOneTransactionDto,
      }),
    );
  }
}
