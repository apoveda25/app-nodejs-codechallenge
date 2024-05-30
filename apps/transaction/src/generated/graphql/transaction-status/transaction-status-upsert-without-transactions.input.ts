import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusUpdateWithoutTransactionsInput } from './transaction-status-update-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateWithoutTransactionsInput } from './transaction-status-create-without-transactions.input';
import { TransactionStatusWhereInput } from './transaction-status-where.input';

@InputType()
export class TransactionStatusUpsertWithoutTransactionsInput {

    @Field(() => TransactionStatusUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionStatusUpdateWithoutTransactionsInput)
    update!: TransactionStatusUpdateWithoutTransactionsInput;

    @Field(() => TransactionStatusCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionStatusCreateWithoutTransactionsInput)
    create!: TransactionStatusCreateWithoutTransactionsInput;

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;
}
