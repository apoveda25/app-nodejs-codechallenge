import { TDateTimeFilterInput } from '@app/shared/domain/types';
import { Field, InputType, OmitType } from '@nestjs/graphql';
import { DateTimeFilter } from '../../../../../generated/graphql/prisma/date-time-filter.input';
import { TransactionTypeOrderByWithRelationInput } from '../../../../../generated/graphql/transaction-type/transaction-type-order-by-with-relation.input';
import { TransactionTypeWhereInput } from '../../../../../generated/graphql/transaction-type/transaction-type-where.input';
import {
  ITransactionTypeFindManyTransactionTypeInput,
  TTransactionTypeSortManyTransactionTypeInput,
} from '../../../domain/find-many/inputs';

@InputType({ description: 'Input to find many `TransactionType`' })
export class TransactionTypeFindManyTransactionTypeInput
  extends OmitType(TransactionTypeWhereInput, [
    'transactions',
    'createdAt',
    'AND',
    'OR',
    'NOT',
  ] as const)
  implements ITransactionTypeFindManyTransactionTypeInput
{
  @Field(() => [TransactionTypeFindManyTransactionTypeInput], {
    nullable: true,
  })
  AND?: Array<TransactionTypeFindManyTransactionTypeInput>;

  @Field(() => [TransactionTypeFindManyTransactionTypeInput], {
    nullable: true,
  })
  OR?: Array<TransactionTypeFindManyTransactionTypeInput>;

  @Field(() => [TransactionTypeFindManyTransactionTypeInput], {
    nullable: true,
  })
  NOT?: Array<TransactionTypeFindManyTransactionTypeInput>;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: TDateTimeFilterInput;
}

@InputType({ description: 'Input to sort many `TransactionType`' })
export class TransactionTypeSortManyTransactionTypeInput
  extends TransactionTypeOrderByWithRelationInput
  implements TTransactionTypeSortManyTransactionTypeInput {}
