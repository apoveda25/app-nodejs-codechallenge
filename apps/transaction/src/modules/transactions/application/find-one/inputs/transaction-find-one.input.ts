import { UUIDMock, UUIDResolver } from 'graphql-scalars';

import { Field, InputType } from '@nestjs/graphql';
import { ITransactionFindOneTransactionInput } from '../../../domain/find-one/inputs';

@InputType({ description: 'Input to find one `Transaction`' })
export class TransactionFindOneTransactionInput
  implements ITransactionFindOneTransactionInput
{
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
    nullable: false,
  })
  transactionExternalId: string;
}
