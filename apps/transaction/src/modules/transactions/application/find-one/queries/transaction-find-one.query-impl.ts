import { TTransactionFindOneTransactionDto } from '../../../domain/find-one/dtos';

export class TransactionFindOneQueryImpl {
  constructor(readonly dto: TTransactionFindOneTransactionDto) {}
}
