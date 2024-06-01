import { ZodValidationPipe } from '@app/shared';
import {
  PAGINATION_INPUT_DEFAULT,
  PaginationDtoSchema,
} from '@app/shared/application/dtos';
import { PaginationInput } from '@app/shared/application/inputs';
import {
  TransactionGraphQLType,
  TransactionStatusGraphQLType,
} from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { TPaginationDto } from '@app/shared/domain/types';
import { UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import {
  AuthGuard,
  Resource,
  ResourceGuard,
  Scopes,
} from 'nest-keycloak-connect';
import {
  TransactionFindManyTransactionDtoSchema,
  TransactionSortManyTransactionDtoSchema,
} from '../../../application/find-many/dtos';
import {
  TransactionFindManyTransactionInput,
  TransactionSortManyTransactionInput,
} from '../../../application/find-many/inputs';
import { TransactionFindManyQueryImpl } from '../../../application/find-many/queries';
import {
  ITransactionFindManyTransactionDto,
  TTransactionSortManyTransactionDto,
} from '../../../domain/find-many/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS)
@Resolver(() => TransactionStatusGraphQLType)
export class TransactionsStatusTransactionsResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_MANY)
  @ResolveField(() => [TransactionGraphQLType])
  async transactions(
    @Parent() transactionStatus: TransactionStatusGraphQLType,

    @Args(
      {
        name: 'transactionFindManyTransactionInput',
        type: () => TransactionFindManyTransactionInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionFindManyTransactionDtoSchema),
    )
    transactionFindManyTransactionDto: ITransactionFindManyTransactionDto,

    @Args(
      {
        name: 'transactionSortManyTransactionInput',
        type: () => TransactionSortManyTransactionInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionSortManyTransactionDtoSchema),
    )
    transactionSortManyTransactionDto: TTransactionSortManyTransactionDto,

    @Args(
      {
        name: 'paginationInput',
        type: () => PaginationInput,
        nullable: true,
        defaultValue: PAGINATION_INPUT_DEFAULT,
      },
      new ZodValidationPipe(PaginationDtoSchema),
    )
    paginationDto: TPaginationDto,
  ): Promise<TransactionGraphQLType[]> {
    return this.queryBus.execute<
      TransactionFindManyQueryImpl,
      TransactionGraphQLType[]
    >(
      new TransactionFindManyQueryImpl(
        {
          ...transactionFindManyTransactionDto,
          transactionStatusId: { equals: transactionStatus.id },
        },
        transactionSortManyTransactionDto,
        paginationDto,
      ),
    );
  }
}
