import { Field, InputType } from '@nestjs/graphql';
import {
  PositiveFloatMock,
  PositiveFloatResolver,
  PositiveIntMock,
  PositiveIntResolver,
  UUIDMock,
  UUIDResolver,
} from 'graphql-scalars';
import { ITransactionCreateOneTransactionInput } from '../../../domain/create-one/inputs';

@InputType({ description: 'Input to create a `Transaction`' })
export class TransactionCreateOneTransactionInput
  implements ITransactionCreateOneTransactionInput
{
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
    nullable: true,
  })
  accountExternalIdDebit: string;

  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
    nullable: true,
  })
  accountExternalIdCredit: string;

  @Field(() => PositiveIntResolver, {
    description: `Example field (${PositiveIntMock()})`,
  })
  tranferTypeId: number;

  @Field(() => PositiveFloatResolver, {
    description: `Example field (${PositiveFloatMock()})`,
  })
  value: number;
}
