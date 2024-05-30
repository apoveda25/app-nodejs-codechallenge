import { TFindManyInput, TSortType } from '@app/shared/domain/types';
import { ITransactionTypeModel } from '@app/shared/infrastructure/models';

export interface ITransactionTypeFindManyTransactionTypeInput
  extends Partial<TFindManyInput<ITransactionTypeModel>> {
  AND?: ITransactionTypeFindManyTransactionTypeInput[];
  OR?: ITransactionTypeFindManyTransactionTypeInput[];
  NOT?: ITransactionTypeFindManyTransactionTypeInput[];
}

export type TTransactionTypeSortManyTransactionTypeInput =
  TSortType<ITransactionTypeModel>;
