import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusCreateWithoutTransactionsInput } from './transaction-status-create-without-transactions.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateOrConnectWithoutTransactionsInput } from './transaction-status-create-or-connect-without-transactions.input';
import { TransactionStatusUpsertWithoutTransactionsInput } from './transaction-status-upsert-without-transactions.input';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { TransactionStatusUpdateToOneWithWhereWithoutTransactionsInput } from './transaction-status-update-to-one-with-where-without-transactions.input';

@InputType()
export class TransactionStatusUpdateOneRequiredWithoutTransactionsNestedInput {

    @Field(() => TransactionStatusCreateWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusCreateWithoutTransactionsInput)
    create?: TransactionStatusCreateWithoutTransactionsInput;

    @Field(() => TransactionStatusCreateOrConnectWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusCreateOrConnectWithoutTransactionsInput)
    connectOrCreate?: TransactionStatusCreateOrConnectWithoutTransactionsInput;

    @Field(() => TransactionStatusUpsertWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusUpsertWithoutTransactionsInput)
    upsert?: TransactionStatusUpsertWithoutTransactionsInput;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:true})
    @Type(() => TransactionStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TransactionStatusUpdateToOneWithWhereWithoutTransactionsInput, {nullable:true})
    @Type(() => TransactionStatusUpdateToOneWithWhereWithoutTransactionsInput)
    update?: TransactionStatusUpdateToOneWithWhereWithoutTransactionsInput;
}
