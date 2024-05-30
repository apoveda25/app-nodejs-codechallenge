import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TransactionStatusCreateNestedOneWithoutTransactionsInput } from '../transaction-status/transaction-status-create-nested-one-without-transactions.input';

@InputType()
export class TransactionCreateWithoutTransactionTypeInput {

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

    @Field(() => TransactionStatusCreateNestedOneWithoutTransactionsInput, {nullable:false})
    transactionStatus!: TransactionStatusCreateNestedOneWithoutTransactionsInput;
}
