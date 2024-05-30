import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';

@InputType()
export class TransactionTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    transactions?: TransactionOrderByRelationAggregateInput;
}
