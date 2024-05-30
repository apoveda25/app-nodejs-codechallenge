import { ITransactionStatusModel } from '@app/shared/infrastructure/models';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsStatusRepository } from '../../../infrastructure/common/repositories';
import { TransactionStatusFindManyQueryImpl } from './transaction-status-find-many.query-impl';

@QueryHandler(TransactionStatusFindManyQueryImpl)
export class TransactionStatusFindManyQueryHandler
  implements IQueryHandler<TransactionStatusFindManyQueryImpl>
{
  constructor(
    private readonly transactionsStatusRepository: TransactionsStatusRepository,
  ) {}

  async execute({
    queryDto,
    sortDto,
    paginationDto: { skip, take },
  }: TransactionStatusFindManyQueryImpl): Promise<ITransactionStatusModel[]> {
    return this.transactionsStatusRepository.findMany({
      where: queryDto,
      orderBy: sortDto,
      skip,
      take,
    });
  }
}
