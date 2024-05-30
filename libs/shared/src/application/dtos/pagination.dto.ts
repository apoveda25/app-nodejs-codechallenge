import { z } from 'zod';

import { TPaginationDto, TPaginationInput } from '../../domain/types';

export const PAGINATION_INPUT_DEFAULT = {
  page: 1,
  docsByPage: 10,
} satisfies Required<TPaginationInput>;

export class PaginationDto implements TPaginationDto {
  skip: number;
  take: number;

  constructor({ page, docsByPage }: Required<TPaginationInput>) {
    this.skip = docsByPage * (page - 1);
    this.take = docsByPage;
  }
}

export const PaginationDtoSchema = z
  .object({
    page: z.number().int().positive().default(PAGINATION_INPUT_DEFAULT.page),
    docsByPage: z
      .number()
      .int()
      .positive()
      .max(100)
      .default(PAGINATION_INPUT_DEFAULT.docsByPage),
  })
  .transform(({ page, docsByPage }) => new PaginationDto({ page, docsByPage }))
  .pipe(
    z.object({
      skip: z.number().int().nonnegative(),
      take: z.number().int().positive().max(100),
    }),
  );
