import { TPaginationDto } from '@app/shared/domain/types';
import {
  ITransactionTypeFindManyTransactionTypeDto,
  TTransactionTypeSortManyTransactionTypeDto,
} from '../../../domain/find-many/dtos';

export class TransactionTypeFindManyQueryImpl {
  constructor(
    readonly queryDto: ITransactionTypeFindManyTransactionTypeDto,
    readonly sortDto: TTransactionTypeSortManyTransactionTypeDto,
    readonly paginationDto: TPaginationDto,
  ) {}
}
