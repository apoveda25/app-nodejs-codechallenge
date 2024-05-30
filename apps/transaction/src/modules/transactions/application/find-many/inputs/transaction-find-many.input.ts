import { TDateTimeFilterInput } from '@app/shared/domain/types';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../../../../generated/graphql/prisma/date-time-filter.input';
import { TransactionOrderByWithRelationInput } from '../../../../../generated/graphql/transaction/transaction-order-by-with-relation.input';
import { TransactionWhereInput } from '../../../../../generated/graphql/transaction/transaction-where.input';
import {
  ITransactionFindManyTransactionInput,
  TTransactionSortManyTransactionInput,
} from '../../../domain/find-many/inputs';

@InputType({ description: 'Input to find many `Transaction`' })
export class TransactionFindManyTransactionInput
  extends OmitType(TransactionWhereInput, [
    'createdAt',
    'transactionStatus',
    'transactionType',
    'AND',
    'OR',
    'NOT',
  ] as const)
  implements ITransactionFindManyTransactionInput
{
  @Field(() => [TransactionFindManyTransactionInput], { nullable: true })
  AND?: Array<TransactionFindManyTransactionInput>;

  @Field(() => [TransactionFindManyTransactionInput], { nullable: true })
  OR?: Array<TransactionFindManyTransactionInput>;

  @Field(() => [TransactionFindManyTransactionInput], { nullable: true })
  NOT?: Array<TransactionFindManyTransactionInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: TDateTimeFilterInput;
}

@InputType({ description: 'Input to sort many `Transaction`' })
export class TransactionSortManyTransactionInput
  extends OmitType(TransactionOrderByWithRelationInput, [
    'transactionStatus',
    'transactionType',
  ] as const)
  implements TTransactionSortManyTransactionInput {}
