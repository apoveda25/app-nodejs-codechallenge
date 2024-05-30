import {
  TransactionStatusNameValueObject,
  UUID4ValueObject,
} from '../value-objects';

export interface ITransactionStatusEntity {
  id: UUID4ValueObject;
  name: TransactionStatusNameValueObject;
  createdAt: Date;
}
