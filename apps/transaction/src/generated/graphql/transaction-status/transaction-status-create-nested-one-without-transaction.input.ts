import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusCreateWithoutTransactionInput } from './transaction-status-create-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateOrConnectWithoutTransactionInput } from './transaction-status-create-or-connect-without-transaction.input';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';

@InputType()
export class TransactionStatusCreateNestedOneWithoutTransactionInput {

    @Field(() => TransactionStatusCreateWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusCreateWithoutTransactionInput)
    create?: TransactionStatusCreateWithoutTransactionInput;

    @Field(() => TransactionStatusCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: TransactionStatusCreateOrConnectWithoutTransactionInput;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:true})
    @Type(() => TransactionStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;
}
