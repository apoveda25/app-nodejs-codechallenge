import { z } from 'zod';
import { TTransactionStatusFindOneTransactionStatusDto } from '../../../domain/find-one/dtos';
import { ITransactionStatusFindOneTransactionStatusInput } from '../../../domain/find-one/inputs';

const TransactionStatusFindOneTransactionStatusInputSchema = z.object({
  id: z.string().uuid(),
});

export const TransactionStatusFindOneTransactionStatusDtoSchema =
  TransactionStatusFindOneTransactionStatusInputSchema.transform(
    (data) =>
      new TransactionStatusFindOneTransactionStatusDto(
        data as ITransactionStatusFindOneTransactionStatusInput,
      ),
  ).pipe(TransactionStatusFindOneTransactionStatusInputSchema);

export class TransactionStatusFindOneTransactionStatusDto
  implements TTransactionStatusFindOneTransactionStatusDto
{
  readonly id: string;

  constructor({ id }: ITransactionStatusFindOneTransactionStatusInput) {
    this.id = id;
  }
}
