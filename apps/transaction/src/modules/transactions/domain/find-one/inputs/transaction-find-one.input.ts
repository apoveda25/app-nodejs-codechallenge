import { ITransactionModel } from '@app/shared/infrastructure/models';

export interface ITransactionFindOneTransactionInput
  extends Partial<Pick<ITransactionModel, 'transactionExternalId'>> {}
