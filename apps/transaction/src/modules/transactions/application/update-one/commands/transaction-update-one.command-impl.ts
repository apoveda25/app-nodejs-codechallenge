import { ITransactionUpdateOneTransactionDto } from '../../../domain/update-one/dtos';

export class TransactionUpdateOneCommandImpl {
  constructor(readonly dto: ITransactionUpdateOneTransactionDto) {}
}
