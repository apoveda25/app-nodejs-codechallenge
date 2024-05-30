import { ITransactionEntity } from '@app/shared/domain/entities';
import { ETransactionStatusName } from '@app/shared/domain/enums';
import { EventDomain } from '@app/shared/domain/events';
import {
  PositiveFloatValueObject,
  PositiveIntValueObject,
  TransactionStatusNameValueObject,
  UUID4ValueObject,
} from '@app/shared/domain/value-objects';
import { ITransactionModel } from '@app/shared/infrastructure/models';

export class TransactionAggregate implements ITransactionEntity {
  readonly transactionExternalId: UUID4ValueObject;
  readonly value: PositiveFloatValueObject;
  readonly createdAt: Date;
  readonly accountExternalIdCredit: UUID4ValueObject;
  readonly accountExternalIdDebit: UUID4ValueObject;
  readonly transactionStatusId: UUID4ValueObject;
  readonly transactionTypeId: PositiveIntValueObject;
  readonly transactionStatusName: TransactionStatusNameValueObject;

  private constructor({
    transactionExternalId,
    value,
    createdAt,
    accountExternalIdCredit,
    accountExternalIdDebit,
    transactionStatusId,
    transactionTypeId,
    transactionStatusName,
  }: ITransactionModel & {
    transactionStatusName: ETransactionStatusName;
  }) {
    this.transactionExternalId = new UUID4ValueObject(transactionExternalId);
    this.value = new PositiveFloatValueObject(value);
    this.createdAt = createdAt;
    this.accountExternalIdCredit = new UUID4ValueObject(
      accountExternalIdCredit,
    );
    this.accountExternalIdDebit = new UUID4ValueObject(accountExternalIdDebit);
    this.transactionStatusId = new UUID4ValueObject(transactionStatusId);
    this.transactionTypeId = new PositiveIntValueObject(transactionTypeId);
    this.transactionStatusName = new TransactionStatusNameValueObject(
      transactionStatusName,
    );
  }

  public static build(
    dto: EventDomain<ITransactionModel>,
  ): TransactionAggregate {
    const transactionStatusName =
      Math.random() < 0.3
        ? ETransactionStatusName.REJECTED
        : ETransactionStatusName.APPROVED;

    return new TransactionAggregate({
      ...dto.payload,
      transactionStatusName,
    });
  }
}
