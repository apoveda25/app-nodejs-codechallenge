import { ZodValidationPipe } from '@app/shared';
import {
  PAGINATION_INPUT_DEFAULT,
  PaginationDtoSchema,
} from '@app/shared/application/dtos';
import { PaginationInput } from '@app/shared/application/inputs';
import { TransactionTypeGraphQLType } from '@app/shared/application/types';
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
  TransactionTypeFindManyTransactionTypeDtoSchema,
  TransactionTypeSortManyTransactionTypeDtoSchema,
} from '../../../application/find-many/dtos';
import {
  TransactionTypeFindManyTransactionTypeInput,
  TransactionTypeSortManyTransactionTypeInput,
} from '../../../application/find-many/inputs';
import { TransactionTypeFindManyQueryImpl } from '../../../application/find-many/queries';
import {
  ITransactionTypeFindManyTransactionTypeDto,
  TTransactionTypeSortManyTransactionTypeDto,
} from '../../../domain/find-many/dtos';

@UseGuards(AuthGuard, ResourceGuard)
@Resource(EResources.TRANSACTIONS_TYPE)
@Resolver(() => TransactionTypeGraphQLType)
export class TransactionsTypeFindManyResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Scopes(EScopes.READ_MANY)
  @Query(() => [TransactionTypeGraphQLType], {
    name: 'transactionTypeFindMany',
  })
  async findMany(
    @Args(
      {
        name: 'transactionTypeFindManyTransactionTypeInput',
        type: () => TransactionTypeFindManyTransactionTypeInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionTypeFindManyTransactionTypeDtoSchema),
    )
    transactionTypeFindManyTransactionTypeDto: ITransactionTypeFindManyTransactionTypeDto,

    @Args(
      {
        name: 'transactionTypeSortManyTransactionTypeInput',
        type: () => TransactionTypeSortManyTransactionTypeInput,
        nullable: true,
        defaultValue: {},
      },
      new ZodValidationPipe(TransactionTypeSortManyTransactionTypeDtoSchema),
    )
    transactionTypeSortManyTransactionTypeDto: TTransactionTypeSortManyTransactionTypeDto,

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
  ): Promise<TransactionTypeGraphQLType[]> {
    return this.queryBus.execute<
      TransactionTypeFindManyQueryImpl,
      TransactionTypeGraphQLType[]
    >(
      new TransactionTypeFindManyQueryImpl(
        transactionTypeFindManyTransactionTypeDto,
        transactionTypeSortManyTransactionTypeDto,
        paginationDto,
      ),
    );
  }
}
