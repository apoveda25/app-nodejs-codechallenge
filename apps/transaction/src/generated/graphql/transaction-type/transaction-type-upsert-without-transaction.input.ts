import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeUpdateWithoutTransactionInput } from './transaction-type-update-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateWithoutTransactionInput } from './transaction-type-create-without-transaction.input';
import { TransactionTypeWhereInput } from './transaction-type-where.input';

@InputType()
export class TransactionTypeUpsertWithoutTransactionInput {

    @Field(() => TransactionTypeUpdateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionTypeUpdateWithoutTransactionInput)
    update!: TransactionTypeUpdateWithoutTransactionInput;

    @Field(() => TransactionTypeCreateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionTypeCreateWithoutTransactionInput)
    create!: TransactionTypeCreateWithoutTransactionInput;

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;
}
