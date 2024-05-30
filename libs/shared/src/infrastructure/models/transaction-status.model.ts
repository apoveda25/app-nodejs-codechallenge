import { ETransactionStatusName } from '@app/shared/domain/enums';

export interface ITransactionStatusModel {
  id: string;
  name: ETransactionStatusName;
  createdAt: Date;
}
