import { TTransactionTypeCountManyTransactionTypeDto } from '../../../domain/count-many/dtos';
import { TTransactionTypeCountManyTransactionTypeInput } from '../../../domain/count-many/inputs';
import {
  TransactionTypeFindManyTransactionTypeDto,
  TransactionTypeFindManyTransactionTypeInputSchema,
} from '../../find-many/dtos';

export const TransactionTypeCountManyTransactionTypeInputSchema =
  TransactionTypeFindManyTransactionTypeInputSchema;

export const TransactionTypeCountManyTransactionTypeDtoSchema =
  TransactionTypeCountManyTransactionTypeInputSchema.transform(
    (input) =>
      new TransactionTypeCountManyTransactionTypeDto(
        input as unknown as TTransactionTypeCountManyTransactionTypeInput,
      ),
  ).pipe(TransactionTypeCountManyTransactionTypeInputSchema);

export class TransactionTypeCountManyTransactionTypeDto
  extends TransactionTypeFindManyTransactionTypeDto
  implements TTransactionTypeCountManyTransactionTypeDto {}
