import { UUIDMock, UUIDResolver } from 'graphql-scalars';

import { Field, InputType } from '@nestjs/graphql';
import { ITransactionStatusFindOneTransactionStatusInput } from '../../../domain/find-one/inputs';

@InputType({ description: 'Input to find one `TransactionStatus`' })
export class TransactionStatusFindOneTransactionStatusInput
  implements ITransactionStatusFindOneTransactionStatusInput
{
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
    nullable: false,
  })
  id: string;
}
