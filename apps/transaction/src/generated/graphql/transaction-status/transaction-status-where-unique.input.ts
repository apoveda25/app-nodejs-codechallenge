import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from '../prisma/transaction-status-name.enum';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class TransactionStatusWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionStatusName, {nullable:true})
    name?: keyof typeof TransactionStatusName;

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    AND?: Array<TransactionStatusWhereInput>;

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    OR?: Array<TransactionStatusWhereInput>;

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    NOT?: Array<TransactionStatusWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transactions?: TransactionListRelationFilter;
}
