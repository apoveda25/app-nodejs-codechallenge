import { NameValueObject, PositiveIntValueObject } from '../value-objects';

export interface ITransactionTypeEntity {
  id: PositiveIntValueObject;
  name: NameValueObject;
  createdAt: Date;
}
