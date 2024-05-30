import { StringFilterInput } from '@app/shared/application/inputs';
import {
  TDateTimeFilterInput,
  TStringFilterInput,
} from '@app/shared/domain/types';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../../../../generated/graphql/prisma/date-time-filter.input';
import { TransactionStatusOrderByWithRelationInput } from '../../../../../generated/graphql/transaction-status/transaction-status-order-by-with-relation.input';
import { TransactionStatusWhereInput } from '../../../../../generated/graphql/transaction-status/transaction-status-where.input';
import {
  ITransactionStatusFindManyTransactionStatusInput,
  TTransactionStatusSortManyTransactionStatusInput,
} from '../../../domain/find-many/inputs';

@InputType({ description: 'Input to find many `TransactionStatus`' })
export class TransactionStatusFindManyTransactionStatusInput
  extends OmitType(TransactionStatusWhereInput, [
    'transactions',
    'name',
    'createdAt',
    'AND',
    'OR',
    'NOT',
  ] as const)
  implements ITransactionStatusFindManyTransactionStatusInput
{
  @Field(() => [TransactionStatusFindManyTransactionStatusInput], {
    nullable: true,
  })
  AND?: Array<TransactionStatusFindManyTransactionStatusInput>;

  @Field(() => [TransactionStatusFindManyTransactionStatusInput], {
    nullable: true,
  })
  OR?: Array<TransactionStatusFindManyTransactionStatusInput>;

  @Field(() => [TransactionStatusFindManyTransactionStatusInput], {
    nullable: true,
  })
  NOT?: Array<TransactionStatusFindManyTransactionStatusInput>;

  @Field(() => StringFilterInput, { nullable: true })
  name?: TStringFilterInput;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: TDateTimeFilterInput;
}

@InputType({ description: 'Input to sort many `TransactionStatus`' })
export class TransactionStatusSortManyTransactionStatusInput
  extends TransactionStatusOrderByWithRelationInput
  implements TTransactionStatusSortManyTransactionStatusInput {}
