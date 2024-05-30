import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TransactionAvgAggregate {

    @Field(() => Float, {nullable:true})
    value?: number;

    @Field(() => Float, {nullable:true})
    transactionTypeId?: number;
}
