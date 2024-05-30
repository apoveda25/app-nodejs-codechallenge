import { Field, InputType, Int, OmitType } from '@nestjs/graphql';
import { TIntFilterInput } from '../../domain/types';

@InputType()
export class IntFilterInput implements TIntFilterInput {
  @Field(() => [Int], { nullable: true })
  in?: number[];

  @Field(() => [Int], { nullable: true })
  notIn?: number[];

  @Field(() => Int, { nullable: true })
  lt?: number;

  @Field(() => Int, { nullable: true })
  lte?: number;

  @Field(() => Int, { nullable: true })
  gt?: number;

  @Field(() => Int, { nullable: true })
  gte?: number;

  @Field(() => IntFilterModeNotInput, { nullable: true })
  not?: Omit<TIntFilterInput, 'not'>;
}

@InputType()
export class IntFilterModeNotInput extends OmitType(IntFilterInput, [
  'not',
] as const) {}
