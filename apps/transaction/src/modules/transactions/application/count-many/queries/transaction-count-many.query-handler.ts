import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsRepository } from '../../../infrastructure/common/repositories';
import { TransactionCountManyQueryImpl } from './transaction-count-many.query-impl';

@QueryHandler(TransactionCountManyQueryImpl)
export class TransactionCountManyQueryHandler
  implements IQueryHandler<TransactionCountManyQueryImpl>
{
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute({ queryDto }: TransactionCountManyQueryImpl): Promise<number> {
    return this.transactionsRepository.countMany({
      where: queryDto,
    });
  }
}
