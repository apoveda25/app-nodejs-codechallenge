import { Field, InputType, OmitType } from '@nestjs/graphql';

import { TBooleanFilterInput } from '../../domain/types';

@InputType()
export class BooleanFilterInput implements TBooleanFilterInput {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;

  @Field(() => BooleanFilterNotInput, { nullable: true })
  not?: Omit<TBooleanFilterInput, 'not'>;
}

@InputType()
export class BooleanFilterNotInput extends OmitType(BooleanFilterInput, [
  'not',
] as const) {}
