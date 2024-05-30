import { InputType } from '@nestjs/graphql';

import { TTransactionStatusCountManyTransactionStatusInput } from '../../../domain/count-many/inputs';
import { TransactionStatusFindManyTransactionStatusInput } from '../../find-many/inputs';

@InputType({ description: 'Input to count many `TransactionStatus`' })
export class TransactionStatusCountManyTransactionStatusInput
  extends TransactionStatusFindManyTransactionStatusInput
  implements TTransactionStatusCountManyTransactionStatusInput {}
