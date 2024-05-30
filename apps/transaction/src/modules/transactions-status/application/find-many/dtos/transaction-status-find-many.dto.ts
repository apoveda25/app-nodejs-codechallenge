import { z } from 'zod';

import {
  DateTimeFilterDto,
  DateTimeFilterInputSchema,
  StringFilterDto,
  StringFilterInputSchema,
} from '@app/shared/application/dtos';
import {
  TDateTimeFilterInput,
  TSortOrder,
  TStringFilterInput,
} from '@app/shared/domain/types';
import { SortOrder } from '../../../../../generated/graphql/prisma/sort-order.enum';
import {
  ITransactionStatusFindManyTransactionStatusDto,
  TTransactionStatusSortManyTransactionStatusDto,
} from '../../../domain/find-many/dtos';
import {
  ITransactionStatusFindManyTransactionStatusInput,
  TTransactionStatusSortManyTransactionStatusInput,
} from '../../../domain/find-many/inputs';

export const TransactionStatusFindManyTransactionStatusSchema = z.object({
  id: StringFilterInputSchema.optional(),
  name: StringFilterInputSchema.optional(),
  createdAt: DateTimeFilterInputSchema.optional(),
});

export const TransactionStatusFindManyTransactionStatusInputSchema = z
  .object({
    AND: z.array(TransactionStatusFindManyTransactionStatusSchema).optional(),
    OR: z.array(TransactionStatusFindManyTransactionStatusSchema).optional(),
    NOT: z.array(TransactionStatusFindManyTransactionStatusSchema).optional(),
  })
  .merge(TransactionStatusFindManyTransactionStatusSchema);

export const TransactionStatusFindManyTransactionStatusDtoSchema =
  TransactionStatusFindManyTransactionStatusInputSchema.transform(
    (input) =>
      new TransactionStatusFindManyTransactionStatusDto(
        input as unknown as ITransactionStatusFindManyTransactionStatusInput,
      ),
  ).pipe(TransactionStatusFindManyTransactionStatusInputSchema);

const NativeEnumSchema = z.nativeEnum(SortOrder);
const TransactionStatusSortManyTransactionStatusInputSchema = z.object({
  id: NativeEnumSchema.optional(),
  name: NativeEnumSchema.optional(),
  createdAt: NativeEnumSchema.optional(),
});

export const TransactionStatusSortManyTransactionStatusDtoSchema =
  TransactionStatusSortManyTransactionStatusInputSchema.transform(
    (input) => new TransactionStatusSortManyTransactionStatusDto(input),
  ).pipe(TransactionStatusSortManyTransactionStatusInputSchema);

export class TransactionStatusFindManyTransactionStatusDto
  implements ITransactionStatusFindManyTransactionStatusDto
{
  readonly id?: TStringFilterInput;
  readonly name?: TStringFilterInput;
  readonly createdAt?: TDateTimeFilterInput;
  readonly AND?: ITransactionStatusFindManyTransactionStatusDto[];
  readonly OR?: ITransactionStatusFindManyTransactionStatusDto[];
  readonly NOT?: ITransactionStatusFindManyTransactionStatusDto[];

  constructor({
    id,
    name,
    createdAt,
    AND,
    OR,
    NOT,
  }: ITransactionStatusFindManyTransactionStatusInput) {
    this.id = id ? new StringFilterDto(id) : undefined;
    this.name = name ? new StringFilterDto(name) : undefined;
    this.createdAt = createdAt ? new DateTimeFilterDto(createdAt) : undefined;
    this.AND = AND
      ? AND.map(
          (input) => new TransactionStatusFindManyTransactionStatusDto(input),
        )
      : undefined;
    this.OR = OR
      ? OR.map(
          (input) => new TransactionStatusFindManyTransactionStatusDto(input),
        )
      : undefined;
    this.NOT = NOT
      ? NOT.map(
          (input) => new TransactionStatusFindManyTransactionStatusDto(input),
        )
      : undefined;
  }
}

export class TransactionStatusSortManyTransactionStatusDto
  implements TTransactionStatusSortManyTransactionStatusDto
{
  readonly id?: TSortOrder;
  readonly name?: TSortOrder;
  readonly createdAt?: TSortOrder;

  constructor({
    id,
    name,
    createdAt,
  }: TTransactionStatusSortManyTransactionStatusInput) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}
