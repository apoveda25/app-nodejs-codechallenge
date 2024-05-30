import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionTypeOrderByWithRelationInput } from '../transaction-type/transaction-type-order-by-with-relation.input';
import { TransactionStatusOrderByWithRelationInput } from '../transaction-status/transaction-status-order-by-with-relation.input';

@InputType()
export class TransactionOrderByWithRelationInput {

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

    @Field(() => TransactionTypeOrderByWithRelationInput, {nullable:true})
    transactionType?: TransactionTypeOrderByWithRelationInput;

    @Field(() => TransactionStatusOrderByWithRelationInput, {nullable:true})
    transactionStatus?: TransactionStatusOrderByWithRelationInput;
}
