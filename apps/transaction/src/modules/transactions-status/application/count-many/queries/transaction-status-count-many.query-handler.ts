import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsStatusRepository } from '../../../infrastructure/common/repositories';
import { TransactionStatusCountManyQueryImpl } from './transaction-status-count-many.query-impl';

@QueryHandler(TransactionStatusCountManyQueryImpl)
export class TransactionStatusCountManyQueryHandler
  implements IQueryHandler<TransactionStatusCountManyQueryImpl>
{
  constructor(
    private readonly transactionsStatusRepository: TransactionsStatusRepository,
  ) {}

  async execute({
    queryDto,
  }: TransactionStatusCountManyQueryImpl): Promise<number> {
    return this.transactionsStatusRepository.countMany({
      where: queryDto,
    });
  }
}
