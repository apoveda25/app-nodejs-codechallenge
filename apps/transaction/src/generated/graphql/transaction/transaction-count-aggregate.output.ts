import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionCountAggregate {

    @Field(() => Int, {nullable:false})
    transactionExternalId!: number;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    accountExternalIdDebit!: number;

    @Field(() => Int, {nullable:false})
    accountExternalIdCredit!: number;

    @Field(() => Int, {nullable:false})
    transactionTypeId!: number;

    @Field(() => Int, {nullable:false})
    transactionStatusId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
