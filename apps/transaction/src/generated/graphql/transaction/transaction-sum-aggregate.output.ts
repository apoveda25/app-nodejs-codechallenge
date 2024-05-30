import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionSumAggregate {

    @Field(() => Float, {nullable:true})
    value?: number;

    @Field(() => Int, {nullable:true})
    transactionTypeId?: number;
}
