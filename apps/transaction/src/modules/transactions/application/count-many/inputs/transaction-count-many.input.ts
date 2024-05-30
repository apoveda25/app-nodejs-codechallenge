import { InputType } from '@nestjs/graphql';

import { TTransactionCountManyTransactionInput } from '../../../domain/count-many/inputs';
import { TransactionFindManyTransactionInput } from '../../find-many/inputs';

@InputType({ description: 'Input to count many `Transaction`' })
export class TransactionCountManyTransactionInput
  extends TransactionFindManyTransactionInput
  implements TTransactionCountManyTransactionInput {}
