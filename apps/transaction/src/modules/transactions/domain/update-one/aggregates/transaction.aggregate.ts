import { ITransactionEntity } from '@app/shared/domain/entities';
import { BusinessError } from '@app/shared/domain/errors';
import {
  PositiveFloatValueObject,
  PositiveIntValueObject,
  UUID4ValueObject,
} from '@app/shared/domain/value-objects';
import { ITransactionModel } from '@app/shared/infrastructure/models';
import { HttpStatus } from '@nestjs/common';
import { ITransactionUpdateOneTransactionDto } from '../dtos';
import { TTransactionUpdateOneOutputService } from '../services';

export class TransactionAggregate implements ITransactionEntity {
  readonly transactionExternalId: UUID4ValueObject;
  readonly value: PositiveFloatValueObject;
  readonly createdAt: Date;
  readonly accountExternalIdCredit: UUID4ValueObject;
  readonly accountExternalIdDebit: UUID4ValueObject;
  readonly transactionStatusId: UUID4ValueObject;
  readonly transactionTypeId: PositiveIntValueObject;

  private constructor({
    transactionExternalId,
    value,
    createdAt,
    accountExternalIdCredit,
    accountExternalIdDebit,
    transactionStatusId,
    transactionTypeId,
  }: ITransactionModel) {
    this.transactionExternalId = new UUID4ValueObject(transactionExternalId);
    this.value = new PositiveFloatValueObject(value);
    this.createdAt = createdAt;
    this.accountExternalIdCredit = new UUID4ValueObject(
      accountExternalIdCredit,
    );
    this.accountExternalIdDebit = new UUID4ValueObject(accountExternalIdDebit);
    this.transactionStatusId = new UUID4ValueObject(transactionStatusId);
    this.transactionTypeId = new PositiveIntValueObject(transactionTypeId);
  }

  public static build(
    dto: ITransactionUpdateOneTransactionDto,
    {
      transactionFoundById,
      transactionStatusFoundByName,
    }: TTransactionUpdateOneOutputService,
  ): TransactionAggregate {
    if (!transactionFoundById) {
      throw new BusinessError(
        'errors.transactions.update_one.transaction_not_exists_with_same_id',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!transactionStatusFoundByName) {
      throw new BusinessError(
        'errors.transactions.update_one.transaction_status_not_exists_with_same_name',
        HttpStatus.NOT_FOUND,
      );
    }

    return new TransactionAggregate({
      ...transactionFoundById,
      transactionStatusId: transactionStatusFoundByName.id,
    });
  }
}
