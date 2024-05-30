import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { Type } from 'class-transformer';
import { TransactionStatusUpdateWithoutTransactionsInput } from './transaction-status-update-without-transactions.input';

@InputType()
export class TransactionStatusUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;

    @Field(() => TransactionStatusUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionStatusUpdateWithoutTransactionsInput)
    data!: TransactionStatusUpdateWithoutTransactionsInput;
}
