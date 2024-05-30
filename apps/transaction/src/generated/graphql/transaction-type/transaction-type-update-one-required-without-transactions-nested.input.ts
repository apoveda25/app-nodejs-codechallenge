import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeCreateWithoutTransactionsInput } from './transaction-type-create-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateOrConnectWithoutTransactionsInput } from './transaction-type-create-or-connect-without-transactions.input';
import { TransactionTypeUpsertWithoutTransactionsInput } from './transaction-type-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput } from './transaction-type-update-to-one-with-where-without-transactions.input';

@InputType()
export class TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => TransactionTypeCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeCreateWithoutTransactionsInput)
    create?: TransactionTypeCreateWithoutTransactionsInput;

    @Field(() => TransactionTypeCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutTransactionsInput;

    @Field(() => TransactionTypeUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeUpsertWithoutTransactionsInput)
    upsert?: TransactionTypeUpsertWithoutTransactionsInput;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:true})
    @Type(() => TransactionTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput)
    update?: TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput;
}
