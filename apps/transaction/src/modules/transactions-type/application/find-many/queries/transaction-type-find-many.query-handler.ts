import { ITransactionTypeModel } from '@app/shared/infrastructure/models';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsTypeRepository } from '../../../infrastructure/common/repositories';
import { TransactionTypeFindManyQueryImpl } from './transaction-type-find-many.query-impl';

@QueryHandler(TransactionTypeFindManyQueryImpl)
export class TransactionTypeFindManyQueryHandler
  implements IQueryHandler<TransactionTypeFindManyQueryImpl>
{
  constructor(
    private readonly transactionsTypeRepository: TransactionsTypeRepository,
  ) {}

  async execute({
    queryDto,
    sortDto,
    paginationDto: { skip, take },
  }: TransactionTypeFindManyQueryImpl): Promise<ITransactionTypeModel[]> {
    return this.transactionsTypeRepository.findMany({
      where: queryDto,
      orderBy: sortDto,
      skip,
      take,
    });
  }
}
