import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { Type } from 'class-transformer';
import { TransactionStatusOrderByWithAggregationInput } from './transaction-status-order-by-with-aggregation.input';
import { TransactionStatusScalarFieldEnum } from './transaction-status-scalar-field.enum';
import { TransactionStatusScalarWhereWithAggregatesInput } from './transaction-status-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransactionStatusCountAggregateInput } from './transaction-status-count-aggregate.input';
import { TransactionStatusMinAggregateInput } from './transaction-status-min-aggregate.input';
import { TransactionStatusMaxAggregateInput } from './transaction-status-max-aggregate.input';

@ArgsType()
export class TransactionStatusGroupByArgs {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;

    @Field(() => [TransactionStatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransactionStatusOrderByWithAggregationInput>;

    @Field(() => [TransactionStatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TransactionStatusScalarFieldEnum>;

    @Field(() => TransactionStatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransactionStatusScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransactionStatusCountAggregateInput, {nullable:true})
    _count?: TransactionStatusCountAggregateInput;

    @Field(() => TransactionStatusMinAggregateInput, {nullable:true})
    _min?: TransactionStatusMinAggregateInput;

    @Field(() => TransactionStatusMaxAggregateInput, {nullable:true})
    _max?: TransactionStatusMaxAggregateInput;
}
