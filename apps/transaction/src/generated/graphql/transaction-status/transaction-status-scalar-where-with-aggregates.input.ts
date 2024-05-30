import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumTransactionStatusNameWithAggregatesFilter } from '../prisma/enum-transaction-status-name-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TransactionStatusScalarWhereWithAggregatesInput {

    @Field(() => [TransactionStatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionStatusScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionStatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionStatusScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionStatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionStatusScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumTransactionStatusNameWithAggregatesFilter, {nullable:true})
    name?: EnumTransactionStatusNameWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
