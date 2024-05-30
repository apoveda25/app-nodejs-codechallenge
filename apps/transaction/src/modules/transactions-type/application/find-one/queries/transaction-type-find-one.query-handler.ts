import { ITransactionTypeModel } from '@app/shared/infrastructure/models';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsTypeRepository } from '../../../infrastructure/common/repositories';
import { TransactionTypeFindOneQueryImpl } from './transaction-type-find-one.query-impl';

@QueryHandler(TransactionTypeFindOneQueryImpl)
export class TransactionTypeFindOneQueryHandler
  implements IQueryHandler<TransactionTypeFindOneQueryImpl>
{
  constructor(
    private readonly transactionsTypeRepository: TransactionsTypeRepository,
  ) {}

  async execute(
    query: TransactionTypeFindOneQueryImpl,
  ): Promise<ITransactionTypeModel | null> {
    return this.transactionsTypeRepository.findOne({
      where: query.dto,
    });
  }
}
