import { TPaginationDto } from '@app/shared/domain/types';
import {
  ITransactionFindManyTransactionDto,
  TTransactionSortManyTransactionDto,
} from '../../../domain/find-many/dtos';

export class TransactionFindManyQueryImpl {
  constructor(
    readonly queryDto: ITransactionFindManyTransactionDto,
    readonly sortDto: TTransactionSortManyTransactionDto,
    readonly paginationDto: TPaginationDto,
  ) {}
}
