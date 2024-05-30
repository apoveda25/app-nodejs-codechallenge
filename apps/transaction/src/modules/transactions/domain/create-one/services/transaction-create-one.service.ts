import {
  ITransactionModel,
  ITransactionStatusModel,
  ITransactionTypeModel,
} from '@app/shared/infrastructure/models';
import { ITransactionCreateOneTransactionDto } from '../dtos';

export type TTransactionCreateOneInputService = {
  dto: ITransactionCreateOneTransactionDto;
};

export type TTransactionCreateOneOutputService = {
  transactionFoundById: ITransactionModel | null;
  transactionTypeFoundById: ITransactionTypeModel | null;
  transactionStatusFoundByName: ITransactionStatusModel | null;
};

export interface ITransactionCreateOneService {
  createOne(
    input: TTransactionCreateOneInputService,
  ): Promise<TTransactionCreateOneOutputService>;
}
