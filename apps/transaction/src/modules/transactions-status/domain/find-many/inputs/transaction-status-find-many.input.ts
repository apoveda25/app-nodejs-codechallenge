import { TFindManyInput, TSortType } from '@app/shared/domain/types';
import { ITransactionStatusModel } from '@app/shared/infrastructure/models';

export interface ITransactionStatusFindManyTransactionStatusInput
  extends Partial<TFindManyInput<ITransactionStatusModel>> {
  AND?: ITransactionStatusFindManyTransactionStatusInput[];
  OR?: ITransactionStatusFindManyTransactionStatusInput[];
  NOT?: ITransactionStatusFindManyTransactionStatusInput[];
}

export type TTransactionStatusSortManyTransactionStatusInput =
  TSortType<ITransactionStatusModel>;
