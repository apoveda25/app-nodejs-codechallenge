import { TransactionGraphQLType } from '@app/shared/application/types';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TransactionsRepository } from '../../../infrastructure/common/repositories';
import { TransactionFindOneQueryImpl } from './transaction-find-one.query-impl';

@QueryHandler(TransactionFindOneQueryImpl)
export class TransactionFindOneQueryHandler
  implements IQueryHandler<TransactionFindOneQueryImpl>
{
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(
    query: TransactionFindOneQueryImpl,
  ): Promise<TransactionGraphQLType | null> {
    return this.transactionsRepository.findOne({
      where: query.dto,
    });
  }
}
