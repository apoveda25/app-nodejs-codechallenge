import { ITransactionCreateOneTransactionDto } from '../../../domain/create-one/dtos';

export class TransactionCreateOneCommandImpl {
  constructor(readonly dto: ITransactionCreateOneTransactionDto) {}
}
