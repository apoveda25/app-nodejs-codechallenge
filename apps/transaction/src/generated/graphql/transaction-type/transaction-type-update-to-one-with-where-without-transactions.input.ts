import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { Type } from 'class-transformer';
import { TransactionTypeUpdateWithoutTransactionsInput } from './transaction-type-update-without-transactions.input';

@InputType()
export class TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;

    @Field(() => TransactionTypeUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionTypeUpdateWithoutTransactionsInput)
    data!: TransactionTypeUpdateWithoutTransactionsInput;
}
