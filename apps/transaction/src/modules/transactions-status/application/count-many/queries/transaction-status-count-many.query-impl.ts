import { TTransactionStatusCountManyTransactionStatusDto } from '../../../domain/count-many/dtos';

export class TransactionStatusCountManyQueryImpl {
  constructor(
    readonly queryDto: TTransactionStatusCountManyTransactionStatusDto,
  ) {}
}
