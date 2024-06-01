import { ZodValidationPipe } from '@app/shared';
import { TransactionGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  AuthGuard,
  Resource,
  ResourceGuard,
  Scopes,
} from 'nest-keycloak-connect';
import { TransactionUpdateOneCommandImpl } from '../../../application/update-one/commands';
import { TransactionUpdateOneTransactionDtoSchema } from '../../../application/update-one/dtos';
import { TransactionUpdateOneTransactionInput } from '../../../application/update-one/inputs';
import { ITransactionUpdateOneTransactionDto } from '../../../domain/update-one/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS)
@Resolver(() => TransactionGraphQLType)
export class TransactionsUpdateOneResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Scopes(EScopes.UPDATE_ONE)
  @Mutation(() => TransactionGraphQLType, {
    name: 'transactionUpdateOne',
  })
  async updateOne(
    @Args(
      {
        name: 'transactionUpdateOneTransactionInput',
        type: () => TransactionUpdateOneTransactionInput,
      },
      new ZodValidationPipe(TransactionUpdateOneTransactionDtoSchema),
    )
    transactionUpdateOneTransactionDto: ITransactionUpdateOneTransactionDto,
  ): Promise<TransactionGraphQLType> {
    return this.commandBus.execute<
      TransactionUpdateOneCommandImpl,
      TransactionGraphQLType
    >(
      new TransactionUpdateOneCommandImpl({
        ...transactionUpdateOneTransactionDto,
      }),
    );
  }
}
