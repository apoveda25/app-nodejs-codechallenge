import { ITransactionStatusModel } from '@app/shared/infrastructure/models';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsStatusRepository } from '../../../infrastructure/common/repositories';
import { TransactionStatusFindOneQueryImpl } from './transaction-status-find-one.query-impl';

@QueryHandler(TransactionStatusFindOneQueryImpl)
export class TransactionStatusFindOneQueryHandler
  implements IQueryHandler<TransactionStatusFindOneQueryImpl>
{
  constructor(
    private readonly transactionsStatusRepository: TransactionsStatusRepository,
  ) {}

  async execute(
    query: TransactionStatusFindOneQueryImpl,
  ): Promise<ITransactionStatusModel | null> {
    return this.transactionsStatusRepository.findOne({
      where: query.dto,
    });
  }
}
