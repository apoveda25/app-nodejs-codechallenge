import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateWithoutTransactionInput } from './transaction-type-create-without-transaction.input';

@InputType()
export class TransactionTypeCreateOrConnectWithoutTransactionInput {

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:false})
    @Type(() => TransactionTypeWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => TransactionTypeCreateWithoutTransactionInput, {nullable:false})
    @Type(() => TransactionTypeCreateWithoutTransactionInput)
    create!: TransactionTypeCreateWithoutTransactionInput;
}
