import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TransactionUncheckedCreateInput {

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

    @Field(() => Int, {nullable:false})
    transactionTypeId!: number;

    @Field(() => String, {nullable:false})
    transactionStatusId!: string;
}
