import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TransactionCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    transactionExternalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountExternalIdDebit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountExternalIdCredit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionStatusId?: keyof typeof SortOrder;
}
