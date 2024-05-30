import { z } from 'zod';

import {
  DateTimeFilterDto,
  DateTimeFilterInputSchema,
  IntFilterDto,
  IntFilterInputSchema,
  StringFilterDto,
  StringFilterInputSchema,
} from '@app/shared/application/dtos';
import {
  TDateTimeFilterInput,
  TIntFilterInput,
  TSortOrder,
  TStringFilterInput,
} from '@app/shared/domain/types';
import { SortOrder } from '../../../../../generated/graphql/prisma/sort-order.enum';
import {
  ITransactionTypeFindManyTransactionTypeDto,
  TTransactionTypeSortManyTransactionTypeDto,
} from '../../../domain/find-many/dtos';
import {
  ITransactionTypeFindManyTransactionTypeInput,
  TTransactionTypeSortManyTransactionTypeInput,
} from '../../../domain/find-many/inputs';

export const TransactionTypeFindManyTransactionTypeSchema = z.object({
  id: IntFilterInputSchema.optional(),
  name: StringFilterInputSchema.optional(),
  createdAt: DateTimeFilterInputSchema.optional(),
});

export const TransactionTypeFindManyTransactionTypeInputSchema = z
  .object({
    AND: z.array(TransactionTypeFindManyTransactionTypeSchema).optional(),
    OR: z.array(TransactionTypeFindManyTransactionTypeSchema).optional(),
    NOT: z.array(TransactionTypeFindManyTransactionTypeSchema).optional(),
  })
  .merge(TransactionTypeFindManyTransactionTypeSchema);

export const TransactionTypeFindManyTransactionTypeDtoSchema =
  TransactionTypeFindManyTransactionTypeInputSchema.transform(
    (input) =>
      new TransactionTypeFindManyTransactionTypeDto(
        input as unknown as ITransactionTypeFindManyTransactionTypeInput,
      ),
  ).pipe(TransactionTypeFindManyTransactionTypeInputSchema);

const NativeEnumSchema = z.nativeEnum(SortOrder);
const TransactionTypeSortManyTransactionTypeInputSchema = z.object({
  id: NativeEnumSchema.optional(),
  name: NativeEnumSchema.optional(),
  createdAt: NativeEnumSchema.optional(),
});

export const TransactionTypeSortManyTransactionTypeDtoSchema =
  TransactionTypeSortManyTransactionTypeInputSchema.transform(
    (input) => new TransactionTypeSortManyTransactionTypeDto(input),
  ).pipe(TransactionTypeSortManyTransactionTypeInputSchema);

export class TransactionTypeFindManyTransactionTypeDto
  implements ITransactionTypeFindManyTransactionTypeDto
{
  readonly id?: TIntFilterInput;
  readonly name?: TStringFilterInput;
  readonly createdAt?: TDateTimeFilterInput;
  readonly AND?: ITransactionTypeFindManyTransactionTypeDto[];
  readonly OR?: ITransactionTypeFindManyTransactionTypeDto[];
  readonly NOT?: ITransactionTypeFindManyTransactionTypeDto[];

  constructor({
    id,
    name,
    createdAt,
    AND,
    OR,
    NOT,
  }: ITransactionTypeFindManyTransactionTypeInput) {
    this.id = id ? new IntFilterDto(id) : undefined;
    this.name = name ? new StringFilterDto(name) : undefined;
    this.createdAt = createdAt ? new DateTimeFilterDto(createdAt) : undefined;
    this.AND = AND
      ? AND.map((input) => new TransactionTypeFindManyTransactionTypeDto(input))
      : undefined;
    this.OR = OR
      ? OR.map((input) => new TransactionTypeFindManyTransactionTypeDto(input))
      : undefined;
    this.NOT = NOT
      ? NOT.map((input) => new TransactionTypeFindManyTransactionTypeDto(input))
      : undefined;
  }
}

export class TransactionTypeSortManyTransactionTypeDto
  implements TTransactionTypeSortManyTransactionTypeDto
{
  readonly id?: TSortOrder;
  readonly name?: TSortOrder;
  readonly createdAt?: TSortOrder;

  constructor({
    id,
    name,
    createdAt,
  }: TTransactionTypeSortManyTransactionTypeInput) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}
