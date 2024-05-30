import { randomUUID } from 'crypto';
import { z } from 'zod';
import { ITransactionCreateOneTransactionDto } from '../../../domain/create-one/dtos';
import { ITransactionCreateOneTransactionInput } from '../../../domain/create-one/inputs';

const TransactionCreateOneTransactionInputSchema = z
  .object({
    accountExternalIdDebit: z.string().uuid(),
    accountExternalIdCredit: z.string().uuid(),
    tranferTypeId: z.number().int().positive(),
    value: z.number().positive(),
  })
  .required();

export const TransactionCreateOneTransactionDtoSchema =
  TransactionCreateOneTransactionInputSchema.transform(
    (data) =>
      new TransactionCreateOneTransactionDto(
        data as ITransactionCreateOneTransactionInput,
      ),
  );

export class TransactionCreateOneTransactionDto
  implements ITransactionCreateOneTransactionDto
{
  readonly transactionExternalId: string;
  readonly accountExternalIdDebit: string;
  readonly accountExternalIdCredit: string;
  readonly tranferTypeId: number;
  readonly value: number;

  constructor({
    accountExternalIdDebit,
    accountExternalIdCredit,
    tranferTypeId,
    value,
  }: ITransactionCreateOneTransactionInput) {
    this.transactionExternalId = randomUUID();
    this.accountExternalIdDebit = accountExternalIdDebit;
    this.accountExternalIdCredit = accountExternalIdCredit;
    this.tranferTypeId = tranferTypeId;
    this.value = value;
  }
}
