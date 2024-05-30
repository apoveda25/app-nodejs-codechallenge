import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class TransactionScalarWhereInput {

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    AND?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    OR?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereInput>;

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
}
