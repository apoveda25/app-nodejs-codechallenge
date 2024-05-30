import { TFindManyDto, TSortType } from '@app/shared/domain/types';
import { ITransactionModel } from '@app/shared/infrastructure/models';

export interface ITransactionFindManyTransactionDto
  extends Partial<TFindManyDto<ITransactionModel>> {
  AND?: ITransactionFindManyTransactionDto[];
  OR?: ITransactionFindManyTransactionDto[];
  NOT?: ITransactionFindManyTransactionDto[];
}

export type TTransactionSortManyTransactionDto = TSortType<ITransactionModel>;
