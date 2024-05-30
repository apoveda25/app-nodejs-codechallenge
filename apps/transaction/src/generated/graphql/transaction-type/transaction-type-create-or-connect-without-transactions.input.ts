import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateWithoutTransactionsInput } from './transaction-type-create-without-transactions.input';

@InputType()
export class TransactionTypeCreateOrConnectWithoutTransactionsInput {

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:false})
    @Type(() => TransactionTypeWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => TransactionTypeCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionTypeCreateWithoutTransactionsInput)
    create!: TransactionTypeCreateWithoutTransactionsInput;
}
