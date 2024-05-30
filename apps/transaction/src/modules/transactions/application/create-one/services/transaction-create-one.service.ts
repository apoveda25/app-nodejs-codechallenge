import { ETransactionStatusName } from '@app/shared/domain/enums';
import { Injectable } from '@nestjs/common';
import {
  ITransactionCreateOneService,
  TTransactionCreateOneInputService,
  TTransactionCreateOneOutputService,
} from '../../../domain/create-one/services';
import {
  TransactionsRepository,
  TransactionsStatusRepository,
  TransactionsTypeRepository,
} from '../../../infrastructure/common/repositories';

@Injectable()
export class TransactionCreateOneService
  implements ITransactionCreateOneService
{
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly transactionsTypeRepository: TransactionsTypeRepository,
    private readonly transactionsStatusRepository: TransactionsStatusRepository,
  ) {}

  async createOne(
    input: TTransactionCreateOneInputService,
  ): Promise<TTransactionCreateOneOutputService> {
    const { dto } = input;

    const [
      transactionFoundById,
      transactionTypeFoundById,
      transactionStatusFoundByName,
    ] = await Promise.all([
      this.transactionsRepository.findOne({
        where: { transactionExternalId: dto.transactionExternalId },
      }),

      this.transactionsTypeRepository.findOne({
        where: {
          id: dto.tranferTypeId,
        },
      }),

      this.transactionsStatusRepository.findOne({
        where: {
          name: ETransactionStatusName.PENDING,
        },
      }),
    ]);

    return {
      transactionFoundById,
      transactionTypeFoundById,
      transactionStatusFoundByName,
    };
  }
}
