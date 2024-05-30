import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { Type } from 'class-transformer';
import { TransactionTypeUpdateWithoutTransactionInput } from './transaction-type-update-without-transaction.input';

@InputType()
export class TransactionTypeUpdateToOneWithWhereWithoutTransactionInput {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;

    @Field(() => TransactionTypeUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionTypeUpdateWithoutTransactionInput)
    data!: TransactionTypeUpdateWithoutTransactionInput;
}
