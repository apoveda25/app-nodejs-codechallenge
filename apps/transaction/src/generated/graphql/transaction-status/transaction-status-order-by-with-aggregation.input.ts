import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionStatusCountOrderByAggregateInput } from './transaction-status-count-order-by-aggregate.input';
import { TransactionStatusMaxOrderByAggregateInput } from './transaction-status-max-order-by-aggregate.input';
import { TransactionStatusMinOrderByAggregateInput } from './transaction-status-min-order-by-aggregate.input';

@InputType()
export class TransactionStatusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => TransactionStatusCountOrderByAggregateInput, {nullable:true})
    _count?: TransactionStatusCountOrderByAggregateInput;

    @Field(() => TransactionStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: TransactionStatusMaxOrderByAggregateInput;

    @Field(() => TransactionStatusMinOrderByAggregateInput, {nullable:true})
    _min?: TransactionStatusMinOrderByAggregateInput;
}
