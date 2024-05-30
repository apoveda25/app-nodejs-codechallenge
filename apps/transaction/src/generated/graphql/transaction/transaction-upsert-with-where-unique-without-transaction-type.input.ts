import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutTransactionTypeInput } from './transaction-update-without-transaction-type.input';
import { TransactionCreateWithoutTransactionTypeInput } from './transaction-create-without-transaction-type.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => TransactionUpdateWithoutTransactionTypeInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutTransactionTypeInput)
    update!: TransactionUpdateWithoutTransactionTypeInput;

    @Field(() => TransactionCreateWithoutTransactionTypeInput, {nullable:false})
    @Type(() => TransactionCreateWithoutTransactionTypeInput)
    create!: TransactionCreateWithoutTransactionTypeInput;
}
