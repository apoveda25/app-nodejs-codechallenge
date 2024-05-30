import { TDateTimeFilterInput } from '@app/shared/domain/types';
import { z } from 'zod';

const DateSchema = z.instanceof(Date);
const DateArraySchema = z.array(z.instanceof(Date));

const DateTimeInputSchema = z.object({
  equals: DateSchema.optional(),
  in: DateArraySchema.optional(),
  notIn: DateArraySchema.optional(),
  lt: DateSchema.optional(),
  lte: DateSchema.optional(),
  gt: DateSchema.optional(),
  gte: DateSchema.optional(),
});

export const DateTimeFilterInputSchema = z
  .object({
    not: DateTimeInputSchema.optional(),
  })
  .merge(DateTimeInputSchema);

const DateTimeDtoSchema = z.object({
  equals: DateSchema.optional(),
  in: DateArraySchema.optional(),
  notIn: DateArraySchema.optional(),
  lt: DateSchema.optional(),
  lte: DateSchema.optional(),
  gt: DateSchema.optional(),
  gte: DateSchema.optional(),
});

export const DateTimeFilterDtoSchema = z
  .object({
    not: DateTimeDtoSchema.optional(),
  })
  .merge(DateTimeDtoSchema);

export class DateTimeFilterDto implements TDateTimeFilterInput {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: Omit<DateTimeFilterDto, 'not'>;

  constructor(data: TDateTimeFilterInput) {
    this.equals = this.parseDate(data.equals);

    this.in = data.in
      ? data.in.flatMap<Date, number>((date) => {
          const dateParsed = this.parseDate(date);

          return dateParsed instanceof Date ? dateParsed : [];
        }, Infinity)
      : undefined;

    this.notIn = data.notIn
      ? data.notIn.flatMap<Date, number>((date) => {
          const dateParsed = this.parseDate(date);

          return dateParsed instanceof Date ? dateParsed : [];
        }, Infinity)
      : undefined;

    this.lt = this.parseDate(data.lt);

    this.lte = this.parseDate(data.lte);

    this.gt = this.parseDate(data.gt);

    this.gte = this.parseDate(data.gte);

    this.not = data.not ? new DateTimeFilterDto(data.not) : undefined;
  }

  private parseDate(date: Date | undefined): Date | undefined {
    return date;
  }
}
