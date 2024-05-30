import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeUpdateWithoutTransactionsInput } from './transaction-type-update-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateWithoutTransactionsInput } from './transaction-type-create-without-transactions.input';
import { TransactionTypeWhereInput } from './transaction-type-where.input';

@InputType()
export class TransactionTypeUpsertWithoutTransactionsInput {

    @Field(() => TransactionTypeUpdateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionTypeUpdateWithoutTransactionsInput)
    update!: TransactionTypeUpdateWithoutTransactionsInput;

    @Field(() => TransactionTypeCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionTypeCreateWithoutTransactionsInput)
    create!: TransactionTypeCreateWithoutTransactionsInput;

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;
}
