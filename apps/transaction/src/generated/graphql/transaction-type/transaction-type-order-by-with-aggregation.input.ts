import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionTypeCountOrderByAggregateInput } from './transaction-type-count-order-by-aggregate.input';
import { TransactionTypeAvgOrderByAggregateInput } from './transaction-type-avg-order-by-aggregate.input';
import { TransactionTypeMaxOrderByAggregateInput } from './transaction-type-max-order-by-aggregate.input';
import { TransactionTypeMinOrderByAggregateInput } from './transaction-type-min-order-by-aggregate.input';
import { TransactionTypeSumOrderByAggregateInput } from './transaction-type-sum-order-by-aggregate.input';

@InputType()
export class TransactionTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => TransactionTypeCountOrderByAggregateInput, {nullable:true})
    _count?: TransactionTypeCountOrderByAggregateInput;

    @Field(() => TransactionTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: TransactionTypeAvgOrderByAggregateInput;

    @Field(() => TransactionTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: TransactionTypeMaxOrderByAggregateInput;

    @Field(() => TransactionTypeMinOrderByAggregateInput, {nullable:true})
    _min?: TransactionTypeMinOrderByAggregateInput;

    @Field(() => TransactionTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: TransactionTypeSumOrderByAggregateInput;
}
