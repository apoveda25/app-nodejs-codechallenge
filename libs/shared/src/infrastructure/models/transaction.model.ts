export interface ITransactionModel {
  transactionExternalId: string;
  value: number;
  createdAt: Date;
  transactionTypeId: number;
  transactionStatusId: string;
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
}
