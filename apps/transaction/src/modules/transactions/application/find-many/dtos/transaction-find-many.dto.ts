import { z } from 'zod';

import {
  DateTimeFilterDto,
  DateTimeFilterInputSchema,
  FloatFilterDto,
  FloatFilterInputSchema,
  IntFilterDto,
  IntFilterInputSchema,
  StringFilterDto,
  StringFilterInputSchema,
} from '@app/shared/application/dtos';
import {
  TDateTimeFilterInput,
  TFloatFilterInput,
  TIntFilterInput,
  TSortOrder,
  TStringFilterInput,
} from '@app/shared/domain/types';
import { SortOrder } from '../../../../../generated/graphql/prisma/sort-order.enum';
import {
  ITransactionFindManyTransactionDto,
  TTransactionSortManyTransactionDto,
} from '../../../domain/find-many/dtos';
import {
  ITransactionFindManyTransactionInput,
  TTransactionSortManyTransactionInput,
} from '../../../domain/find-many/inputs';

export const TransactionFindManyTransactionSchema = z.object({
  transactionExternalId: StringFilterInputSchema.optional(),
  value: FloatFilterInputSchema.optional(),
  createdAt: DateTimeFilterInputSchema.optional(),
  accountExternalIdDebit: StringFilterInputSchema.optional(),
  accountExternalIdCredit: StringFilterInputSchema.optional(),
  transactionTypeId: IntFilterInputSchema.optional(),
  transactionStatusId: StringFilterInputSchema.optional(),
});

export const TransactionFindManyTransactionInputSchema = z
  .object({
    AND: z.array(TransactionFindManyTransactionSchema).optional(),
    OR: z.array(TransactionFindManyTransactionSchema).optional(),
    NOT: z.array(TransactionFindManyTransactionSchema).optional(),
  })
  .merge(TransactionFindManyTransactionSchema);

export const TransactionFindManyTransactionDtoSchema =
  TransactionFindManyTransactionInputSchema.transform(
    (input) =>
      new TransactionFindManyTransactionDto(
        input as unknown as ITransactionFindManyTransactionInput,
      ),
  ).pipe(TransactionFindManyTransactionInputSchema);

const NativeEnumSchema = z.nativeEnum(SortOrder);
const TransactionSortManyTransactionInputSchema = z.object({
  transactionExternalId: NativeEnumSchema.optional(),
  value: NativeEnumSchema.optional(),
  createdAt: NativeEnumSchema.optional(),
  accountExternalIdDebit: NativeEnumSchema.optional(),
  accountExternalIdCredit: NativeEnumSchema.optional(),
  transactionTypeId: NativeEnumSchema.optional(),
  transactionStatusId: NativeEnumSchema.optional(),
});

export const TransactionSortManyTransactionDtoSchema =
  TransactionSortManyTransactionInputSchema.transform(
    (input) => new TransactionSortManyTransactionDto(input),
  ).pipe(TransactionSortManyTransactionInputSchema);

export class TransactionFindManyTransactionDto
  implements ITransactionFindManyTransactionDto
{
  readonly transactionExternalId?: TStringFilterInput;
  readonly value?: TFloatFilterInput;
  readonly createdAt?: TDateTimeFilterInput;
  readonly accountExternalIdDebit?: TStringFilterInput;
  readonly accountExternalIdCredit?: TStringFilterInput;
  readonly transactionTypeId?: TIntFilterInput;
  readonly transactionStatusId?: TStringFilterInput;
  readonly AND?: ITransactionFindManyTransactionDto[];
  readonly OR?: ITransactionFindManyTransactionDto[];
  readonly NOT?: ITransactionFindManyTransactionDto[];

  constructor({
    transactionExternalId,
    value,
    createdAt,
    accountExternalIdDebit,
    accountExternalIdCredit,
    transactionTypeId,
    transactionStatusId,
    AND,
    OR,
    NOT,
  }: ITransactionFindManyTransactionInput) {
    this.transactionExternalId = transactionExternalId
      ? new StringFilterDto(transactionExternalId)
      : undefined;
    this.value = value ? new FloatFilterDto(value) : undefined;
    this.createdAt = createdAt ? new DateTimeFilterDto(createdAt) : undefined;
    this.accountExternalIdDebit = accountExternalIdDebit
      ? new StringFilterDto(accountExternalIdDebit)
      : undefined;
    this.accountExternalIdCredit = accountExternalIdCredit
      ? new StringFilterDto(accountExternalIdCredit)
      : undefined;
    this.transactionTypeId = transactionTypeId
      ? new IntFilterDto(transactionTypeId)
      : undefined;
    this.transactionStatusId = transactionStatusId
      ? new StringFilterDto(transactionStatusId)
      : undefined;
    this.AND = AND
      ? AND.map((input) => new TransactionFindManyTransactionDto(input))
      : undefined;
    this.OR = OR
      ? OR.map((input) => new TransactionFindManyTransactionDto(input))
      : undefined;
    this.NOT = NOT
      ? NOT.map((input) => new TransactionFindManyTransactionDto(input))
      : undefined;
  }
}

export class TransactionSortManyTransactionDto
  implements TTransactionSortManyTransactionDto
{
  readonly transactionExternalId?: TSortOrder;
  readonly value?: TSortOrder;
  readonly createdAt?: TSortOrder;
  readonly accountExternalIdDebit?: TSortOrder;
  readonly accountExternalIdCredit?: TSortOrder;
  readonly transactionTypeId?: TSortOrder;
  readonly transactionStatusId?: TSortOrder;

  constructor({
    transactionExternalId,
    value,
    createdAt,
    accountExternalIdDebit,
    accountExternalIdCredit,
    transactionTypeId,
    transactionStatusId,
  }: TTransactionSortManyTransactionInput) {
    this.transactionExternalId = transactionExternalId;
    this.value = value;
    this.createdAt = createdAt;
    this.accountExternalIdDebit = accountExternalIdDebit;
    this.accountExternalIdCredit = accountExternalIdCredit;
    this.transactionTypeId = transactionTypeId;
    this.transactionStatusId = transactionStatusId;
  }
}
