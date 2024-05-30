import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusCreateWithoutTransactionsInput } from './transaction-status-create-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateOrConnectWithoutTransactionsInput } from './transaction-status-create-or-connect-without-transactions.input';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';

@InputType()
export class TransactionStatusCreateNestedOneWithoutTransactionsInput {

    @Field(() => TransactionStatusCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusCreateWithoutTransactionsInput)
    create?: TransactionStatusCreateWithoutTransactionsInput;

    @Field(() => TransactionStatusCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: TransactionStatusCreateOrConnectWithoutTransactionsInput;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:true})
    @Type(() => TransactionStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;
}
