import { ETransactionStatusName } from '@app/shared/domain/enums';

export interface ITransactionUpdateOneTransactionInput {
  transactionExternalId: string;
  transactionStatusName: ETransactionStatusName;
}
