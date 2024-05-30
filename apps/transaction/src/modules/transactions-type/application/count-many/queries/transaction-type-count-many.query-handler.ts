import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsTypeRepository } from '../../../infrastructure/common/repositories';
import { TransactionTypeCountManyQueryImpl } from './transaction-type-count-many.query-impl';

@QueryHandler(TransactionTypeCountManyQueryImpl)
export class TransactionTypeCountManyQueryHandler
  implements IQueryHandler<TransactionTypeCountManyQueryImpl>
{
  constructor(
    private readonly transactionsTypeRepository: TransactionsTypeRepository,
  ) {}

  async execute({
    queryDto,
  }: TransactionTypeCountManyQueryImpl): Promise<number> {
    return this.transactionsTypeRepository.countMany({
      where: queryDto,
    });
  }
}
