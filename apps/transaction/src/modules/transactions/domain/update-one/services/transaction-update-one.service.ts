import {
  ITransactionModel,
  ITransactionStatusModel,
} from '@app/shared/infrastructure/models';
import { ITransactionUpdateOneTransactionDto } from '../dtos';

export type TTransactionUpdateOneInputService = {
  dto: ITransactionUpdateOneTransactionDto;
};

export type TTransactionUpdateOneOutputService = {
  transactionFoundById: ITransactionModel | null;
  transactionStatusFoundByName: ITransactionStatusModel | null;
};

export interface ITransactionUpdateOneService {
  updateOne(
    input: TTransactionUpdateOneInputService,
  ): Promise<TTransactionUpdateOneOutputService>;
}
