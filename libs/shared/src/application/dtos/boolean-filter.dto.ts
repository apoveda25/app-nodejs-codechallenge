import { z } from 'zod';
import { TBooleanFilterInput } from '../../domain/types';

const BooleanSchema = z.boolean();
const BooleanFilterSchema = z.object({
  equals: BooleanSchema.optional(),
});

export const BooleanFilterInputSchema = z
  .object({
    not: BooleanFilterSchema.optional(),
  })
  .merge(BooleanFilterSchema);

export const BooleanFilterDtoSchema = z
  .object({
    not: BooleanFilterSchema.optional(),
  })
  .merge(BooleanFilterSchema);

export class BooleanFilterDto implements TBooleanFilterInput {
  equals?: boolean;
  not?: Omit<TBooleanFilterInput, 'not'>;

  constructor(data: TBooleanFilterInput) {
    this.equals = data.equals;
    this.not = data.not ? new BooleanFilterDto(data.not) : undefined;
  }
}
