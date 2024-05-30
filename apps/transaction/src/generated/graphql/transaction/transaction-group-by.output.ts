import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionCountAggregate } from './transaction-count-aggregate.output';
import { TransactionAvgAggregate } from './transaction-avg-aggregate.output';
import { TransactionSumAggregate } from './transaction-sum-aggregate.output';
import { TransactionMinAggregate } from './transaction-min-aggregate.output';
import { TransactionMaxAggregate } from './transaction-max-aggregate.output';

@ObjectType()
export class TransactionGroupBy {

    @Field(() => String, {nullable:false})
    transactionExternalId!: string;

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    accountExternalIdDebit!: string;

    @Field(() => String, {nullable:false})
    accountExternalIdCredit!: string;

    @Field(() => Int, {nullable:false})
    transactionTypeId!: number;

    @Field(() => String, {nullable:false})
    transactionStatusId!: string;

    @Field(() => TransactionCountAggregate, {nullable:true})
    _count?: TransactionCountAggregate;

    @Field(() => TransactionAvgAggregate, {nullable:true})
    _avg?: TransactionAvgAggregate;

    @Field(() => TransactionSumAggregate, {nullable:true})
    _sum?: TransactionSumAggregate;

    @Field(() => TransactionMinAggregate, {nullable:true})
    _min?: TransactionMinAggregate;

    @Field(() => TransactionMaxAggregate, {nullable:true})
    _max?: TransactionMaxAggregate;
}
