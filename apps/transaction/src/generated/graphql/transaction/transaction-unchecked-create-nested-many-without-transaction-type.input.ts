import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutTransactionTypeInput } from './transaction-create-without-transaction-type.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutTransactionTypeInput } from './transaction-create-or-connect-without-transaction-type.input';
import { TransactionCreateManyTransactionTypeInputEnvelope } from './transaction-create-many-transaction-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput {

    @Field(() => [TransactionCreateWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionCreateWithoutTransactionTypeInput)
    create?: Array<TransactionCreateWithoutTransactionTypeInput>;

    @Field(() => [TransactionCreateOrConnectWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutTransactionTypeInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutTransactionTypeInput>;

    @Field(() => TransactionCreateManyTransactionTypeInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyTransactionTypeInputEnvelope)
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;
}
