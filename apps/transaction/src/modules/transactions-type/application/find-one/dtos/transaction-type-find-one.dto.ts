import { z } from 'zod';
import { TTransactionTypeFindOneTransactionTypeDto } from '../../../domain/find-one/dtos';
import { ITransactionTypeFindOneTransactionTypeInput } from '../../../domain/find-one/inputs';

const TransactionTypeFindOneTransactionTypeInputSchema = z.object({
  transactionExternalId: z.string().uuid(),
});

export const TransactionTypeFindOneTransactionTypeDtoSchema =
  TransactionTypeFindOneTransactionTypeInputSchema.transform(
    (data) =>
      new TransactionTypeFindOneTransactionTypeDto(
        data as ITransactionTypeFindOneTransactionTypeInput,
      ),
  ).pipe(TransactionTypeFindOneTransactionTypeInputSchema);

export class TransactionTypeFindOneTransactionTypeDto
  implements TTransactionTypeFindOneTransactionTypeDto
{
  readonly id: number;

  constructor({ id }: ITransactionTypeFindOneTransactionTypeInput) {
    this.id = id;
  }
}
