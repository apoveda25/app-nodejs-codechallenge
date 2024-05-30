import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { TransactionTypeRelationFilter } from '../transaction-type/transaction-type-relation-filter.input';
import { TransactionStatusRelationFilter } from '../transaction-status/transaction-status-relation-filter.input';

@InputType()
export class TransactionWhereInput {

    @Field(() => [TransactionWhereInput], {nullable:true})
    AND?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    OR?: Array<TransactionWhereInput>;

    @Field(() => [TransactionWhereInput], {nullable:true})
    NOT?: Array<TransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    transactionExternalId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    value?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    accountExternalIdDebit?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    accountExternalIdCredit?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    transactionTypeId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    transactionStatusId?: StringFilter;

    @Field(() => TransactionTypeRelationFilter, {nullable:true})
    transactionType?: TransactionTypeRelationFilter;

    @Field(() => TransactionStatusRelationFilter, {nullable:true})
    transactionStatus?: TransactionStatusRelationFilter;
}
