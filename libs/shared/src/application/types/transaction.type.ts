import {
  DateTimeISOMock,
  DateTimeISOResolver,
  PositiveFloatMock,
  PositiveFloatResolver,
  PositiveIntMock,
  PositiveIntResolver,
  UUIDMock,
  UUIDResolver,
} from 'graphql-scalars';

import { Field, ObjectType } from '@nestjs/graphql';

import { ITransactionModel } from '@app/shared/infrastructure/models';

@ObjectType({
  description: `An ${TransactionGraphQLType.name} is a object that represents a transaction.`,
})
export class TransactionGraphQLType
  implements
    Omit<
      ITransactionModel,
      'accountExternalIdDebit' | 'accountExternalIdCredit'
    >
{
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
  })
  transactionExternalId!: string;

  @Field(() => PositiveFloatResolver, {
    description: `Example field (${PositiveFloatMock()})`,
  })
  value!: number;

  @Field(() => DateTimeISOResolver, {
    description: `Example field (${DateTimeISOMock()})`,
  })
  createdAt!: Date;

  @Field(() => PositiveIntResolver, {
    description: `Example field (${PositiveIntMock()})`,
  })
  transactionTypeId!: number;

  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
  })
  transactionStatusId!: string;
}
