import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutTransactionStatusInput } from './transaction-create-without-transaction-status.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutTransactionStatusInput } from './transaction-create-or-connect-without-transaction-status.input';
import { TransactionCreateManyTransactionStatusInputEnvelope } from './transaction-create-many-transaction-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutTransactionStatusInput {

    @Field(() => [TransactionCreateWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionCreateWithoutTransactionStatusInput)
    create?: Array<TransactionCreateWithoutTransactionStatusInput>;

    @Field(() => [TransactionCreateOrConnectWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutTransactionStatusInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutTransactionStatusInput>;

    @Field(() => TransactionCreateManyTransactionStatusInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyTransactionStatusInputEnvelope)
    createMany?: TransactionCreateManyTransactionStatusInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;
}
