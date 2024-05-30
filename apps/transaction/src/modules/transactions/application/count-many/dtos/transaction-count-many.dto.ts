import { TTransactionCountManyTransactionDto } from '../../../domain/count-many/dtos';
import { TTransactionCountManyTransactionInput } from '../../../domain/count-many/inputs';
import {
  TransactionFindManyTransactionDto,
  TransactionFindManyTransactionInputSchema,
} from '../../find-many/dtos';

export const TransactionCountManyTransactionInputSchema =
  TransactionFindManyTransactionInputSchema;

export const TransactionCountManyTransactionDtoSchema =
  TransactionCountManyTransactionInputSchema.transform(
    (input) =>
      new TransactionCountManyTransactionDto(
        input as unknown as TTransactionCountManyTransactionInput,
      ),
  ).pipe(TransactionCountManyTransactionInputSchema);

export class TransactionCountManyTransactionDto
  extends TransactionFindManyTransactionDto
  implements TTransactionCountManyTransactionDto {}
