import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TransactionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    transactionExternalId?: true;

    @Field(() => Boolean, {nullable:true})
    value?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    accountExternalIdDebit?: true;

    @Field(() => Boolean, {nullable:true})
    accountExternalIdCredit?: true;

    @Field(() => Boolean, {nullable:true})
    transactionTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    transactionStatusId?: true;
}
