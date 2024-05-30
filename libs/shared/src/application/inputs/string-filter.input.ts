import { Field, InputType, OmitType } from '@nestjs/graphql';
import { TStringFilterInput } from '../../domain/types';

@InputType()
export class StringFilterInput implements TStringFilterInput {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];

  @Field(() => [String], { nullable: true })
  notIn?: string[];

  @Field(() => String, { nullable: true })
  lt?: string;

  @Field(() => String, { nullable: true })
  lte?: string;

  @Field(() => String, { nullable: true })
  gt?: string;

  @Field(() => String, { nullable: true })
  gte?: string;

  @Field(() => String, { nullable: true })
  contains?: string;

  @Field(() => String, { nullable: true })
  startsWith?: string;

  @Field(() => String, { nullable: true })
  endsWith?: string;

  @Field(() => StringFilterNotModeInput, { nullable: true })
  not?: Omit<TStringFilterInput, 'not'>;
}

@InputType()
export class StringFilterNotModeInput extends OmitType(StringFilterInput, [
  'not',
] as const) {}
