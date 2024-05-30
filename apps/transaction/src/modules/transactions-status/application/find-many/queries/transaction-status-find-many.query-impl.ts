import { TPaginationDto } from '@app/shared/domain/types';
import {
  ITransactionStatusFindManyTransactionStatusDto,
  TTransactionStatusSortManyTransactionStatusDto,
} from '../../../domain/find-many/dtos';

export class TransactionStatusFindManyQueryImpl {
  constructor(
    readonly queryDto: ITransactionStatusFindManyTransactionStatusDto,
    readonly sortDto: TTransactionStatusSortManyTransactionStatusDto,
    readonly paginationDto: TPaginationDto,
  ) {}
}
