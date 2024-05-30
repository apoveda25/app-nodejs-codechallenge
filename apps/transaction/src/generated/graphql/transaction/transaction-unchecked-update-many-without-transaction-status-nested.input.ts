import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutTransactionStatusInput } from './transaction-create-without-transaction-status.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutTransactionStatusInput } from './transaction-create-or-connect-without-transaction-status.input';
import { TransactionUpsertWithWhereUniqueWithoutTransactionStatusInput } from './transaction-upsert-with-where-unique-without-transaction-status.input';
import { TransactionCreateManyTransactionStatusInputEnvelope } from './transaction-create-many-transaction-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutTransactionStatusInput } from './transaction-update-with-where-unique-without-transaction-status.input';
import { TransactionUpdateManyWithWhereWithoutTransactionStatusInput } from './transaction-update-many-with-where-without-transaction-status.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutTransactionStatusNestedInput {

    @Field(() => [TransactionCreateWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionCreateWithoutTransactionStatusInput)
    create?: Array<TransactionCreateWithoutTransactionStatusInput>;

    @Field(() => [TransactionCreateOrConnectWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutTransactionStatusInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutTransactionStatusInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutTransactionStatusInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutTransactionStatusInput>;

    @Field(() => TransactionCreateManyTransactionStatusInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyTransactionStatusInputEnvelope)
    createMany?: TransactionCreateManyTransactionStatusInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutTransactionStatusInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutTransactionStatusInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutTransactionStatusInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutTransactionStatusInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutTransactionStatusInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
