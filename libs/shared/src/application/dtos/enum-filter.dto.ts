import { z } from 'zod';
import { TEnumFilterInput } from '../../domain/types';

const EnumSchema = z.union([z.string(), z.number()]);
const EnumArraySchema = z.array(z.union([z.string(), z.number()]));
const EnumFilterSchema = z.object({
  equals: EnumSchema.optional(),
  in: EnumArraySchema.optional(),
  notIn: EnumArraySchema.optional(),
});

export const EnumFilterInputSchema = z
  .object({
    not: EnumFilterSchema.optional(),
  })
  .merge(EnumFilterSchema);

export const EnumFilterDtoSchema = z
  .object({
    not: EnumFilterSchema.optional(),
  })
  .merge(EnumFilterSchema);

export class EnumFilterDto<T> implements TEnumFilterInput<T> {
  equals?: T;
  in?: T[];
  notIn?: T[];
  not?: Omit<TEnumFilterInput<T>, 'not'>;

  constructor(data: TEnumFilterInput<T>) {
    this.equals = data.equals;
    this.in = data.in;
    this.notIn = data.notIn;
    this.not = data.not ? new EnumFilterDto(data.not) : undefined;
  }
}
