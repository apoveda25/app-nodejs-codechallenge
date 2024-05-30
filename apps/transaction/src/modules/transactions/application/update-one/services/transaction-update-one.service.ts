import { Injectable } from '@nestjs/common';
import {
  ITransactionUpdateOneService,
  TTransactionUpdateOneInputService,
  TTransactionUpdateOneOutputService,
} from '../../../domain/update-one/services';
import {
  TransactionsRepository,
  TransactionsStatusRepository,
} from '../../../infrastructure/common/repositories';

@Injectable()
export class TransactionUpdateOneService
  implements ITransactionUpdateOneService
{
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly transactionsStatusRepository: TransactionsStatusRepository,
  ) {}

  async updateOne(
    input: TTransactionUpdateOneInputService,
  ): Promise<TTransactionUpdateOneOutputService> {
    const { dto } = input;

    const [transactionFoundById, transactionStatusFoundByName] =
      await Promise.all([
        this.transactionsRepository.findOne({
          where: { transactionExternalId: dto.transactionExternalId },
        }),

        this.transactionsStatusRepository.findOne({
          where: {
            name: dto.transactionStatusName,
          },
        }),
      ]);

    return {
      transactionFoundById,
      transactionStatusFoundByName,
    };
  }
}
