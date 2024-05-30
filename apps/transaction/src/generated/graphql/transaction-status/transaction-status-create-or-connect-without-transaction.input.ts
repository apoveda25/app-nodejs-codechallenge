import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateWithoutTransactionInput } from './transaction-status-create-without-transaction.input';

@InputType()
export class TransactionStatusCreateOrConnectWithoutTransactionInput {

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:false})
    @Type(() => TransactionStatusWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TransactionStatusCreateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionStatusCreateWithoutTransactionInput)
    create!: TransactionStatusCreateWithoutTransactionInput;
}
