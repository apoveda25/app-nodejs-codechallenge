import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionTypeCountAggregate } from './transaction-type-count-aggregate.output';
import { TransactionTypeAvgAggregate } from './transaction-type-avg-aggregate.output';
import { TransactionTypeSumAggregate } from './transaction-type-sum-aggregate.output';
import { TransactionTypeMinAggregate } from './transaction-type-min-aggregate.output';
import { TransactionTypeMaxAggregate } from './transaction-type-max-aggregate.output';

@ObjectType()
export class TransactionTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => TransactionTypeCountAggregate, {nullable:true})
    _count?: TransactionTypeCountAggregate;

    @Field(() => TransactionTypeAvgAggregate, {nullable:true})
    _avg?: TransactionTypeAvgAggregate;

    @Field(() => TransactionTypeSumAggregate, {nullable:true})
    _sum?: TransactionTypeSumAggregate;

    @Field(() => TransactionTypeMinAggregate, {nullable:true})
    _min?: TransactionTypeMinAggregate;

    @Field(() => TransactionTypeMaxAggregate, {nullable:true})
    _max?: TransactionTypeMaxAggregate;
}
