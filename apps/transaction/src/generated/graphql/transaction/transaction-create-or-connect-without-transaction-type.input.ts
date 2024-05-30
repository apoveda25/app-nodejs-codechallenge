import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutTransactionTypeInput } from './transaction-create-without-transaction-type.input';

@InputType()
export class TransactionCreateOrConnectWithoutTransactionTypeInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => TransactionCreateWithoutTransactionTypeInput, {nullable:false})
    @Type(() => TransactionCreateWithoutTransactionTypeInput)
    create!: TransactionCreateWithoutTransactionTypeInput;
}
