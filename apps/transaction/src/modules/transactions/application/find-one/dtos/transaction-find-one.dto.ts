/* eslint-disable @typescript-eslint/naming-convention */
import { z } from 'zod';
import { TTransactionFindOneTransactionDto } from '../../../domain/find-one/dtos/transaction-find-one.dto';
import { ITransactionFindOneTransactionInput } from '../../../domain/find-one/inputs';

const TransactionFindOneTransactionInputSchema = z.object({
  transactionExternalId: z.string().uuid(),
});

export const TransactionFindOneTransactionDtoSchema =
  TransactionFindOneTransactionInputSchema.transform(
    (data) =>
      new TransactionFindOneTransactionDto(
        data as ITransactionFindOneTransactionInput,
      ),
  ).pipe(TransactionFindOneTransactionInputSchema);

export class TransactionFindOneTransactionDto
  implements TTransactionFindOneTransactionDto
{
  readonly transactionExternalId: string;

  constructor({ transactionExternalId }: ITransactionFindOneTransactionInput) {
    this.transactionExternalId = transactionExternalId;
  }
}
