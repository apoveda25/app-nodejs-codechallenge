import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TransactionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    value?: true;

    @Field(() => Boolean, {nullable:true})
    transactionTypeId?: true;
}
