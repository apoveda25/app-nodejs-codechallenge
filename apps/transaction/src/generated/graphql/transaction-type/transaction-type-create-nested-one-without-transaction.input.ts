import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeCreateWithoutTransactionInput } from './transaction-type-create-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateOrConnectWithoutTransactionInput } from './transaction-type-create-or-connect-without-transaction.input';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';

@InputType()
export class TransactionTypeCreateNestedOneWithoutTransactionInput {

    @Field(() => TransactionTypeCreateWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeCreateWithoutTransactionInput)
    create?: TransactionTypeCreateWithoutTransactionInput;

    @Field(() => TransactionTypeCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionInput;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:true})
    @Type(() => TransactionTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;
}
