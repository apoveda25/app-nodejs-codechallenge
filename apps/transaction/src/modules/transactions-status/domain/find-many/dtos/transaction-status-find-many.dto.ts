import { TFindManyDto, TSortType } from '@app/shared/domain/types';
import { ITransactionStatusModel } from '@app/shared/infrastructure/models';

export interface ITransactionStatusFindManyTransactionStatusDto
  extends Partial<TFindManyDto<ITransactionStatusModel>> {
  AND?: ITransactionStatusFindManyTransactionStatusDto[];
  OR?: ITransactionStatusFindManyTransactionStatusDto[];
  NOT?: ITransactionStatusFindManyTransactionStatusDto[];
}

export type TTransactionStatusSortManyTransactionStatusDto =
  TSortType<ITransactionStatusModel>;
