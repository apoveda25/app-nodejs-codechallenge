import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeCreateWithoutTransactionInput } from './transaction-type-create-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateOrConnectWithoutTransactionInput } from './transaction-type-create-or-connect-without-transaction.input';
import { TransactionTypeUpsertWithoutTransactionInput } from './transaction-type-upsert-without-transaction.input';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { TransactionTypeUpdateToOneWithWhereWithoutTransactionInput } from './transaction-type-update-to-one-with-where-without-transaction.input';

@InputType()
export class TransactionTypeUpdateOneRequiredWithoutTransactionNestedInput {

    @Field(() => TransactionTypeCreateWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeCreateWithoutTransactionInput)
    create?: TransactionTypeCreateWithoutTransactionInput;

    @Field(() => TransactionTypeCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionInput;

    @Field(() => TransactionTypeUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeUpsertWithoutTransactionInput)
    upsert?: TransactionTypeUpsertWithoutTransactionInput;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:true})
    @Type(() => TransactionTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => TransactionTypeUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionTypeUpdateToOneWithWhereWithoutTransactionInput)
    update?: TransactionTypeUpdateToOneWithWhereWithoutTransactionInput;
}
