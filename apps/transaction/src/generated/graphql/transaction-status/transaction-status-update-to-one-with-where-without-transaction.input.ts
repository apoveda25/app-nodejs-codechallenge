import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { Type } from 'class-transformer';
import { TransactionStatusUpdateWithoutTransactionInput } from './transaction-status-update-without-transaction.input';

@InputType()
export class TransactionStatusUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;

    @Field(() => TransactionStatusUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionStatusUpdateWithoutTransactionInput)
    data!: TransactionStatusUpdateWithoutTransactionInput;
}
