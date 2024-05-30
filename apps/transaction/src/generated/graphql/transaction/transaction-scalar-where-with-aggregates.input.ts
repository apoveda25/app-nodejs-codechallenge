import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class TransactionScalarWhereWithAggregatesInput {

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transactionExternalId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    value?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accountExternalIdDebit?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accountExternalIdCredit?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    transactionTypeId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transactionStatusId?: StringWithAggregatesFilter;
}
