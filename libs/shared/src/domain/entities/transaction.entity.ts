import {
  PositiveFloatValueObject,
  PositiveIntValueObject,
  UUID4ValueObject,
} from '../value-objects';

export interface ITransactionEntity {
  transactionExternalId: UUID4ValueObject;
  value: PositiveFloatValueObject;
  createdAt: Date;
  transactionTypeId: PositiveIntValueObject;
  transactionStatusId: UUID4ValueObject;
  accountExternalIdDebit: UUID4ValueObject;
  accountExternalIdCredit: UUID4ValueObject;
}
