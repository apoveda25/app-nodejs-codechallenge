import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateWithoutTransactionsInput } from './transaction-status-create-without-transactions.input';

@InputType()
export class TransactionStatusCreateOrConnectWithoutTransactionsInput {

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:false})
    @Type(() => TransactionStatusWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TransactionStatusCreateWithoutTransactionsInput, {nullable:false})
    @Type(() => TransactionStatusCreateWithoutTransactionsInput)
    create!: TransactionStatusCreateWithoutTransactionsInput;
}
