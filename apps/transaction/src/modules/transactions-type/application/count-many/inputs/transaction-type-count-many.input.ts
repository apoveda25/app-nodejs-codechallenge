import { InputType } from '@nestjs/graphql';

import { TTransactionTypeCountManyTransactionTypeInput } from '../../../domain/count-many/inputs';
import { TransactionTypeFindManyTransactionTypeInput } from '../../find-many/inputs';

@InputType({ description: 'Input to count many `TransactionType`' })
export class TransactionTypeCountManyTransactionTypeInput
  extends TransactionTypeFindManyTransactionTypeInput
  implements TTransactionTypeCountManyTransactionTypeInput {}
