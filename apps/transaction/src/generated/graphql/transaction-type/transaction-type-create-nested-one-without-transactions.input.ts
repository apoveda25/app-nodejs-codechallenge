import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeCreateWithoutTransactionsInput } from './transaction-type-create-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateOrConnectWithoutTransactionsInput } from './transaction-type-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';

@InputType()
export class TransactionTypeCreateNestedOneWithoutTransactionsInput {

    @Field(() => TransactionTypeCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeCreateWithoutTransactionsInput)
    create?: TransactionTypeCreateWithoutTransactionsInput;

    @Field(() => TransactionTypeCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionsInput;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:true})
    @Type(() => TransactionTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;
}
