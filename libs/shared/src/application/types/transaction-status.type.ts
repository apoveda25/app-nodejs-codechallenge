import {
  DateTimeISOMock,
  DateTimeISOResolver,
  NonEmptyStringResolver,
  UUIDMock,
  UUIDResolver,
} from 'graphql-scalars';

import { Field, ObjectType } from '@nestjs/graphql';

import { ETransactionStatusName } from '@app/shared/domain/enums';
import { ITransactionStatusModel } from '@app/shared/infrastructure/models';

@ObjectType({
  description: `An ${TransactionStatusGraphQLType.name} is an object that represents a transaction status.`,
})
export class TransactionStatusGraphQLType implements ITransactionStatusModel {
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
  })
  id!: string;

  @Field(() => NonEmptyStringResolver, {
    description: `Example field (${ETransactionStatusName.APPROVED})`,
  })
  name!: ETransactionStatusName;

  @Field(() => DateTimeISOResolver, {
    description: `Example field (${DateTimeISOMock()})`,
  })
  createdAt!: Date;
}
