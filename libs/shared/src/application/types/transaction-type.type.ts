import {
  DateTimeISOMock,
  DateTimeISOResolver,
  NonEmptyStringMock,
  NonEmptyStringResolver,
  PositiveIntMock,
  PositiveIntResolver,
} from 'graphql-scalars';

import { Field, ObjectType } from '@nestjs/graphql';

import { ITransactionTypeModel } from '@app/shared/infrastructure/models';

@ObjectType({
  description: `An ${TransactionTypeGraphQLType.name} is an object that represents a transaction type.`,
})
export class TransactionTypeGraphQLType implements ITransactionTypeModel {
  @Field(() => PositiveIntResolver, {
    description: `Example field (${PositiveIntMock()})`,
  })
  id!: number;

  @Field(() => NonEmptyStringResolver, {
    description: `Example field (${NonEmptyStringMock()})`,
  })
  name!: string;

  @Field(() => DateTimeISOResolver, {
    description: `Example field (${DateTimeISOMock()})`,
  })
  createdAt!: Date;
}
