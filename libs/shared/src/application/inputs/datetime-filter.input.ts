import { Field, InputType, OmitType } from '@nestjs/graphql';
import { DateTimeResolver } from 'graphql-scalars';

import { TDateTimeFilterInput } from '../../domain/types';

@InputType()
export class DateTimeFilterInput implements TDateTimeFilterInput {
  @Field(() => DateTimeResolver, { nullable: true })
  equals?: Date;

  @Field(() => [DateTimeResolver], { nullable: true })
  in?: Date[];

  @Field(() => [DateTimeResolver], { nullable: true })
  notIn?: Date[];

  @Field(() => DateTimeResolver, { nullable: true })
  lt?: Date;

  @Field(() => DateTimeResolver, { nullable: true })
  lte?: Date;

  @Field(() => DateTimeResolver, { nullable: true })
  gt?: Date;

  @Field(() => DateTimeResolver, { nullable: true })
  gte?: Date;

  @Field(() => DateTimeFilterNotInput, { nullable: true })
  not?: Omit<TDateTimeFilterInput, 'not'>;
}

@InputType()
export class DateTimeFilterNotInput extends OmitType(DateTimeFilterInput, [
  'not',
] as const) {}
