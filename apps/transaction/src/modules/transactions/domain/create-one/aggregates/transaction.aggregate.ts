import { ITransactionEntity } from '@app/shared/domain/entities';
import { BusinessError } from '@app/shared/domain/errors';
import {
  PositiveFloatValueObject,
  PositiveIntValueObject,
  UUID4ValueObject,
} from '@app/shared/domain/value-objects';
import { ITransactionModel } from '@app/shared/infrastructure/models';
import { HttpStatus } from '@nestjs/common';
import { ITransactionCreateOneTransactionDto } from '../dtos';
import { TTransactionCreateOneOutputService } from '../services';

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
    dto: ITransactionCreateOneTransactionDto,
    {
      transactionFoundById,
      transactionTypeFoundById,
      transactionStatusFoundByName,
    }: TTransactionCreateOneOutputService,
  ): TransactionAggregate {
    if (transactionFoundById) {
      throw new BusinessError(
        'errors.transactions.create_one.transaction_already_exists_with_same_id',
        HttpStatus.CONFLICT,
      );
    }

    if (!transactionTypeFoundById) {
      throw new BusinessError(
        'errors.transactions.create_one.transaction_type_not_exists',
        HttpStatus.CONFLICT,
      );
    }

    if (!transactionStatusFoundByName) {
      throw new BusinessError(
        'errors.transactions.create_one.transaction_status_not_exists',
        HttpStatus.CONFLICT,
      );
    }

    return new TransactionAggregate({
      transactionExternalId: dto.transactionExternalId,
      value: dto.value,
      createdAt: new Date(),
      accountExternalIdCredit: dto.accountExternalIdCredit,
      accountExternalIdDebit: dto.accountExternalIdDebit,
      transactionStatusId: transactionStatusFoundByName.id,
      transactionTypeId: transactionTypeFoundById.id,
    });
  }
}
