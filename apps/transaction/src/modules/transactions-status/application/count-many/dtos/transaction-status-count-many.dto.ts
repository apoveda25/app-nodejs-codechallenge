import { TTransactionStatusCountManyTransactionStatusDto } from '../../../domain/count-many/dtos';
import { TTransactionStatusCountManyTransactionStatusInput } from '../../../domain/count-many/inputs';
import {
  TransactionStatusFindManyTransactionStatusDto,
  TransactionStatusFindManyTransactionStatusInputSchema,
} from '../../find-many/dtos';

export const TransactionStatusCountManyTransactionStatusInputSchema =
  TransactionStatusFindManyTransactionStatusInputSchema;

export const TransactionStatusCountManyTransactionStatusDtoSchema =
  TransactionStatusCountManyTransactionStatusInputSchema.transform(
    (input) =>
      new TransactionStatusCountManyTransactionStatusDto(
        input as unknown as TTransactionStatusCountManyTransactionStatusInput,
      ),
  ).pipe(TransactionStatusCountManyTransactionStatusInputSchema);

export class TransactionStatusCountManyTransactionStatusDto
  extends TransactionStatusFindManyTransactionStatusDto
  implements TTransactionStatusCountManyTransactionStatusDto {}
