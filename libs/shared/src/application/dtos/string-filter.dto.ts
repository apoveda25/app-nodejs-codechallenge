import { z } from 'zod';

import { TStringFilterInput } from '../../domain/types';

const StringSchema = z.string();
const StringArraySchema = z.array(z.string());
const StringFilterSchema = z.object({
  equals: StringSchema.optional(),
  in: StringArraySchema.optional(),
  notIn: StringArraySchema.optional(),
  lt: StringSchema.optional(),
  lte: StringSchema.optional(),
  gt: StringSchema.optional(),
  gte: StringSchema.optional(),
  contains: StringSchema.optional(),
  startsWith: StringSchema.optional(),
  endsWith: StringSchema.optional(),
});

export const StringFilterInputSchema = z
  .object({
    not: StringFilterSchema.optional(),
  })
  .merge(StringFilterSchema);

export const StringFilterDtoSchema = z
  .object({
    not: StringFilterSchema.optional(),
  })
  .merge(StringFilterSchema);

export class StringFilterDto implements TStringFilterInput {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: Omit<TStringFilterInput, 'not'>;

  constructor(data: TStringFilterInput) {
    this.equals = data.equals;
    this.in = data.in;
    this.notIn = data.notIn;
    this.lt = data.lt;
    this.lte = data.lte;
    this.gt = data.gt;
    this.gte = data.gte;
    this.contains = data.contains;
    this.startsWith = data.startsWith;
    this.endsWith = data.endsWith;
    this.not = data.not ? new StringFilterDto(data.not) : undefined;
  }
}
