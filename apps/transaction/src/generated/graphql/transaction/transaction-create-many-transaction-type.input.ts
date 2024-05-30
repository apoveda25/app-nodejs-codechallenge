import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class TransactionCreateManyTransactionTypeInput {

    @Field(() => String, {nullable:true})
    transactionExternalId?: string;

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    accountExternalIdDebit!: string;

    @Field(() => String, {nullable:false})
    accountExternalIdCredit!: string;

    @Field(() => String, {nullable:false})
    transactionStatusId!: string;
}
