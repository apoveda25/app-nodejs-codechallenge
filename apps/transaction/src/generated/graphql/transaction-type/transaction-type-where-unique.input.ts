import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class TransactionTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [TransactionTypeWhereInput], {nullable:true})
    AND?: Array<TransactionTypeWhereInput>;

    @Field(() => [TransactionTypeWhereInput], {nullable:true})
    OR?: Array<TransactionTypeWhereInput>;

    @Field(() => [TransactionTypeWhereInput], {nullable:true})
    NOT?: Array<TransactionTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transactions?: TransactionListRelationFilter;
}
