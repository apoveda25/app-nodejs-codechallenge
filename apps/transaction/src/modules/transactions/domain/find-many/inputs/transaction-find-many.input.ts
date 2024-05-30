import { TFindManyInput, TSortType } from '@app/shared/domain/types';
import { ITransactionModel } from '@app/shared/infrastructure/models';

export interface ITransactionFindManyTransactionInput
  extends Partial<TFindManyInput<ITransactionModel>> {
  AND?: ITransactionFindManyTransactionInput[];
  OR?: ITransactionFindManyTransactionInput[];
  NOT?: ITransactionFindManyTransactionInput[];
}

export type TTransactionSortManyTransactionInput = TSortType<ITransactionModel>;
