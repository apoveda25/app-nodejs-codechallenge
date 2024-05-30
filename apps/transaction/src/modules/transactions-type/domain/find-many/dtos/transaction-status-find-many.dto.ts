import { TFindManyDto, TSortType } from '@app/shared/domain/types';
import { ITransactionTypeModel } from '@app/shared/infrastructure/models';

export interface ITransactionTypeFindManyTransactionTypeDto
  extends Partial<TFindManyDto<ITransactionTypeModel>> {
  AND?: ITransactionTypeFindManyTransactionTypeDto[];
  OR?: ITransactionTypeFindManyTransactionTypeDto[];
  NOT?: ITransactionTypeFindManyTransactionTypeDto[];
}

export type TTransactionTypeSortManyTransactionTypeDto =
  TSortType<ITransactionTypeModel>;
