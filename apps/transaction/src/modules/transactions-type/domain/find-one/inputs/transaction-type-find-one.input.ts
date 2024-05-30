import { ITransactionTypeModel } from '@app/shared/infrastructure/models';

export interface ITransactionTypeFindOneTransactionTypeInput
  extends Pick<ITransactionTypeModel, 'id'> {}
