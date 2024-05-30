import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TransactionTypeScalarWhereWithAggregatesInput {

    @Field(() => [TransactionTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionTypeScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionTypeScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
