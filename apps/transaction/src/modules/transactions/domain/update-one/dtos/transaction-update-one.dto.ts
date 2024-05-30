import { ETransactionStatusName } from '@app/shared/domain/enums';

export interface ITransactionUpdateOneTransactionDto {
  transactionExternalId: string;
  transactionStatusName: ETransactionStatusName;
}
