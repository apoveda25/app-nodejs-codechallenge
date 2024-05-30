import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutTransactionTypeInput } from './transaction-create-without-transaction-type.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutTransactionTypeInput } from './transaction-create-or-connect-without-transaction-type.input';
import { TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput } from './transaction-upsert-with-where-unique-without-transaction-type.input';
import { TransactionCreateManyTransactionTypeInputEnvelope } from './transaction-create-many-transaction-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput } from './transaction-update-with-where-unique-without-transaction-type.input';
import { TransactionUpdateManyWithWhereWithoutTransactionTypeInput } from './transaction-update-many-with-where-without-transaction-type.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUpdateManyWithoutTransactionTypeNestedInput {

    @Field(() => [TransactionCreateWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionCreateWithoutTransactionTypeInput)
    create?: Array<TransactionCreateWithoutTransactionTypeInput>;

    @Field(() => [TransactionCreateOrConnectWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutTransactionTypeInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutTransactionTypeInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput>;

    @Field(() => TransactionCreateManyTransactionTypeInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyTransactionTypeInputEnvelope)
    createMany?: TransactionCreateManyTransactionTypeInputEnvelope;

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

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutTransactionTypeInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutTransactionTypeInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutTransactionTypeInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
