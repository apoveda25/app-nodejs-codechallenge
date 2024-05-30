import { Field, Float, InputType, OmitType } from '@nestjs/graphql';

import { TFloatFilterInput } from '../../domain/types';

@InputType()
export class FloatFilterInput implements TFloatFilterInput {
  @Field(() => [Float], { nullable: true })
  in?: number[];

  @Field(() => [Float], { nullable: true })
  notIn?: number[];

  @Field(() => Float, { nullable: true })
  lt?: number;

  @Field(() => Float, { nullable: true })
  lte?: number;

  @Field(() => Float, { nullable: true })
  gt?: number;

  @Field(() => Float, { nullable: true })
  gte?: number;

  @Field(() => FloatFilterModeNotInput, { nullable: true })
  not?: Omit<TFloatFilterInput, 'not'>;
}

@InputType()
export class FloatFilterModeNotInput extends OmitType(FloatFilterInput, [
  'not',
] as const) {}
