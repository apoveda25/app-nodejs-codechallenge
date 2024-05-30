import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionMinAggregate {

    @Field(() => String, {nullable:true})
    transactionExternalId?: string;

    @Field(() => Float, {nullable:true})
    value?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    accountExternalIdDebit?: string;

    @Field(() => String, {nullable:true})
    accountExternalIdCredit?: string;

    @Field(() => Int, {nullable:true})
    transactionTypeId?: number;

    @Field(() => String, {nullable:true})
    transactionStatusId?: string;
}
