import { z } from 'zod';
import { TIntFilterInput } from '../../domain/types';

const IntSchema = z.number();
const IntArraySchema = z.array(z.number());
const IntFilterSchema = z.object({
  equals: IntSchema.optional(),
  in: IntArraySchema.optional(),
  notIn: IntArraySchema.optional(),
  lt: IntSchema.optional(),
  lte: IntSchema.optional(),
  gt: IntSchema.optional(),
  gte: IntSchema.optional(),
});

export const IntFilterInputSchema = z
  .object({
    not: IntFilterSchema.optional(),
  })
  .merge(IntFilterSchema);

export const IntFilterDtoSchema = z
  .object({
    not: IntFilterSchema.optional(),
  })
  .merge(IntFilterSchema);

export class IntFilterDto implements TIntFilterInput {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TIntFilterInput, 'not'>;

  constructor(data: TIntFilterInput) {
    this.equals = data.equals;
    this.in = data.in;
    this.notIn = data.notIn;
    this.lt = data.lt;
    this.lte = data.lte;
    this.gt = data.gt;
    this.gte = data.gte;
    this.not = data.not ? new IntFilterDto(data.not) : undefined;
  }
}
