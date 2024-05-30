import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTransactionStatusNameFilter } from '../prisma/enum-transaction-status-name-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class TransactionStatusWhereInput {

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    AND?: Array<TransactionStatusWhereInput>;

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    OR?: Array<TransactionStatusWhereInput>;

    @Field(() => [TransactionStatusWhereInput], {nullable:true})
    NOT?: Array<TransactionStatusWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumTransactionStatusNameFilter, {nullable:true})
    name?: EnumTransactionStatusNameFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transactions?: TransactionListRelationFilter;
}
