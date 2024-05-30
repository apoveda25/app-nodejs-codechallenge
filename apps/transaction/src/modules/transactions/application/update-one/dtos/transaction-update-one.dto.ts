import { ETransactionStatusName } from '@app/shared/domain/enums';
import { z } from 'zod';
import { ITransactionUpdateOneTransactionDto } from '../../../domain/update-one/dtos';
import { ITransactionUpdateOneTransactionInput } from '../../../domain/update-one/inputs';

const TransactionUpdateOneTransactionInputSchema = z
  .object({
    transactionExternalId: z.string().uuid(),
    transactionStatusName: z.nativeEnum(ETransactionStatusName),
  })
  .required();

export const TransactionUpdateOneTransactionDtoSchema =
  TransactionUpdateOneTransactionInputSchema.transform(
    (data) =>
      new TransactionUpdateOneTransactionDto(
        data as ITransactionUpdateOneTransactionInput,
      ),
  );

export class TransactionUpdateOneTransactionDto
  implements ITransactionUpdateOneTransactionDto
{
  readonly transactionExternalId: string;
  readonly transactionStatusName: ETransactionStatusName;

  constructor({
    transactionExternalId,
    transactionStatusName,
  }: ITransactionUpdateOneTransactionInput) {
    this.transactionExternalId = transactionExternalId;
    this.transactionStatusName = transactionStatusName;
  }
}
