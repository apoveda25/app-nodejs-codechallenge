import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateWithoutTransactionStatusInput } from './transaction-create-without-transaction-status.input';

@InputType()
export class TransactionCreateOrConnectWithoutTransactionStatusInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => TransactionCreateWithoutTransactionStatusInput, {nullable:false})
    @Type(() => TransactionCreateWithoutTransactionStatusInput)
    create!: TransactionCreateWithoutTransactionStatusInput;
}
