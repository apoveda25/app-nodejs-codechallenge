import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ITransactionModel } from '@app/shared/infrastructure/models';
import { TransactionsRepository } from '../../../infrastructure/common/repositories';
import { TransactionFindManyQueryImpl } from './transaction-find-many.query-impl';

@QueryHandler(TransactionFindManyQueryImpl)
export class TransactionFindManyQueryHandler
  implements IQueryHandler<TransactionFindManyQueryImpl>
{
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute({
    queryDto,
    sortDto,
    paginationDto: { skip, take },
  }: TransactionFindManyQueryImpl): Promise<ITransactionModel[]> {
    return this.transactionsRepository.findMany({
      where: queryDto,
      orderBy: sortDto,
      skip,
      take,
    });
  }
}
