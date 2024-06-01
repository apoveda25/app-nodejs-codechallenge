import { ZodValidationPipe } from '@app/shared';
import {
  PAGINATION_INPUT_DEFAULT,
  PaginationDtoSchema,
} from '@app/shared/application/dtos';
import { PaginationInput } from '@app/shared/application/inputs';
import { TransactionStatusGraphQLType } from '@app/shared/application/types';
import { EResources, EScopes } from '@app/shared/domain/enums';
import { TPaginationDto } from '@app/shared/domain/types';
import { UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  AuthGuard,
  Resource,
  ResourceGuard,
  Scopes,
} from 'nest-keycloak-connect';
import {
  TransactionStatusFindManyTransactionStatusDtoSchema,
  TransactionStatusSortManyTransactionStatusDtoSchema,
} from '../../../application/find-many/dtos';
import {
  TransactionStatusFindManyTransactionStatusInput,
  TransactionStatusSortManyTransactionStatusInput,
} from '../../../application/find-many/inputs';
import { TransactionStatusFindManyQueryImpl } from '../../../application/find-many/queries';
import {
  ITransactionStatusFindManyTransactionStatusDto,
  TTransactionStatusSortManyTransactionStatusDto,
} from '../../../domain/find-many/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_STATUS)
@Resolver(() => TransactionStatusGraphQLType)
export class TransactionsStatusFindManyResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_MANY)
  @Query(() => [TransactionStatusGraphQLType], {
    name: 'transactionStatusFindMany',
  })
  async findMany(
    @Args(
      {
        name: 'transactionStatusFindManyTransactionStatusInput',
        type: () => TransactionStatusFindManyTransactionStatusInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(
        TransactionStatusFindManyTransactionStatusDtoSchema,
      ),
    )
    transactionStatusFindManyTransactionStatusDto: ITransactionStatusFindManyTransactionStatusDto,

    @Args(
      {
        name: 'transactionStatusSortManyTransactionStatusInput',
        type: () => TransactionStatusSortManyTransactionStatusInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(
        TransactionStatusSortManyTransactionStatusDtoSchema,
      ),
    )
    transactionStatusSortManyTransactionStatusDto: TTransactionStatusSortManyTransactionStatusDto,

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
  ): Promise<TransactionStatusGraphQLType[]> {
    return this.queryBus.execute<
      TransactionStatusFindManyQueryImpl,
      TransactionStatusGraphQLType[]
    >(
      new TransactionStatusFindManyQueryImpl(
        transactionStatusFindManyTransactionStatusDto,
        transactionStatusSortManyTransactionStatusDto,
        paginationDto,
      ),
    );
  }
}
