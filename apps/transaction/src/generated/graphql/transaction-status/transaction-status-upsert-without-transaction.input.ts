import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusUpdateWithoutTransactionInput } from './transaction-status-update-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateWithoutTransactionInput } from './transaction-status-create-without-transaction.input';
import { TransactionStatusWhereInput } from './transaction-status-where.input';

@InputType()
export class TransactionStatusUpsertWithoutTransactionInput {

    @Field(() => TransactionStatusUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionStatusUpdateWithoutTransactionInput)
    update!: TransactionStatusUpdateWithoutTransactionInput;

    @Field(() => TransactionStatusCreateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionStatusCreateWithoutTransactionInput)
    create!: TransactionStatusCreateWithoutTransactionInput;

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;
}
