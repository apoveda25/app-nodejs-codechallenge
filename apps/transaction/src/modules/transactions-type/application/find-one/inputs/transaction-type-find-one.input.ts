import { PositiveIntMock, PositiveIntResolver } from 'graphql-scalars';

import { Field, InputType } from '@nestjs/graphql';
import { ITransactionTypeFindOneTransactionTypeInput } from '../../../domain/find-one/inputs';

@InputType({ description: 'Input to find one `TransactionType`' })
export class TransactionTypeFindOneTransactionTypeInput
  implements ITransactionTypeFindOneTransactionTypeInput
{
  @Field(() => PositiveIntResolver, {
    description: `Example field (${PositiveIntMock()})`,
    nullable: false,
  })
  id: number;
}
