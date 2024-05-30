import { ITransactionStatusModel } from '@app/shared/infrastructure/models';

export interface ITransactionStatusFindOneTransactionStatusInput
  extends Pick<ITransactionStatusModel, 'id'> {}
