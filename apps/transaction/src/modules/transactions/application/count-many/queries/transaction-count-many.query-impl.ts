import { TTransactionCountManyTransactionDto } from '../../../domain/count-many/dtos';

export class TransactionCountManyQueryImpl {
  constructor(readonly queryDto: TTransactionCountManyTransactionDto) {}
}
