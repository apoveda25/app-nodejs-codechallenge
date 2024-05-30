import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { Type } from 'class-transformer';
import { TransactionTypeOrderByWithAggregationInput } from './transaction-type-order-by-with-aggregation.input';
import { TransactionTypeScalarFieldEnum } from './transaction-type-scalar-field.enum';
import { TransactionTypeScalarWhereWithAggregatesInput } from './transaction-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransactionTypeCountAggregateInput } from './transaction-type-count-aggregate.input';
import { TransactionTypeAvgAggregateInput } from './transaction-type-avg-aggregate.input';
import { TransactionTypeSumAggregateInput } from './transaction-type-sum-aggregate.input';
import { TransactionTypeMinAggregateInput } from './transaction-type-min-aggregate.input';
import { TransactionTypeMaxAggregateInput } from './transaction-type-max-aggregate.input';

@ArgsType()
export class TransactionTypeGroupByArgs {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;

    @Field(() => [TransactionTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransactionTypeOrderByWithAggregationInput>;

    @Field(() => [TransactionTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TransactionTypeScalarFieldEnum>;

    @Field(() => TransactionTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransactionTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransactionTypeCountAggregateInput, {nullable:true})
    _count?: TransactionTypeCountAggregateInput;

    @Field(() => TransactionTypeAvgAggregateInput, {nullable:true})
    _avg?: TransactionTypeAvgAggregateInput;

    @Field(() => TransactionTypeSumAggregateInput, {nullable:true})
    _sum?: TransactionTypeSumAggregateInput;

    @Field(() => TransactionTypeMinAggregateInput, {nullable:true})
    _min?: TransactionTypeMinAggregateInput;

    @Field(() => TransactionTypeMaxAggregateInput, {nullable:true})
    _max?: TransactionTypeMaxAggregateInput;
}
