import { z } from 'zod';
import { TFloatFilterInput } from '../../domain/types';

const FloatSchema = z.number();
const FloatArraySchema = z.array(z.number());
const FloatFilterSchema = z.object({
  equals: FloatSchema.optional(),
  in: FloatArraySchema.optional(),
  notIn: FloatArraySchema.optional(),
  lt: FloatSchema.optional(),
  lte: FloatSchema.optional(),
  gt: FloatSchema.optional(),
  gte: FloatSchema.optional(),
});

export const FloatFilterInputSchema = z
  .object({
    not: FloatFilterSchema.optional(),
  })
  .merge(FloatFilterSchema);

export const FloatFilterDtoSchema = z
  .object({
    not: FloatFilterSchema.optional(),
  })
  .merge(FloatFilterSchema);

export class FloatFilterDto implements TFloatFilterInput {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TFloatFilterInput, 'not'>;

  constructor(data: TFloatFilterInput) {
    this.equals = data.equals;
    this.in = data.in;
    this.notIn = data.notIn;
    this.lt = data.lt;
    this.lte = data.lte;
    this.gt = data.gt;
    this.gte = data.gte;
    this.not = data.not ? new FloatFilterDto(data.not) : undefined;
  }
}
