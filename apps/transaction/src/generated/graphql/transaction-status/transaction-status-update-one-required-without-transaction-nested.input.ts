import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusCreateWithoutTransactionInput } from './transaction-status-create-without-transaction.input';
import { Type } from 'class-transformer';
import { TransactionStatusCreateOrConnectWithoutTransactionInput } from './transaction-status-create-or-connect-without-transaction.input';
import { TransactionStatusUpsertWithoutTransactionInput } from './transaction-status-upsert-without-transaction.input';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { TransactionStatusUpdateToOneWithWhereWithoutTransactionInput } from './transaction-status-update-to-one-with-where-without-transaction.input';

@InputType()
export class TransactionStatusUpdateOneRequiredWithoutTransactionNestedInput {

    @Field(() => TransactionStatusCreateWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusCreateWithoutTransactionInput)
    create?: TransactionStatusCreateWithoutTransactionInput;

    @Field(() => TransactionStatusCreateOrConnectWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusCreateOrConnectWithoutTransactionInput)
    connectOrCreate?: TransactionStatusCreateOrConnectWithoutTransactionInput;

    @Field(() => TransactionStatusUpsertWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusUpsertWithoutTransactionInput)
    upsert?: TransactionStatusUpsertWithoutTransactionInput;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:true})
    @Type(() => TransactionStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;

    @Field(() => TransactionStatusUpdateToOneWithWhereWithoutTransactionInput, {nullable:true})
    @Type(() => TransactionStatusUpdateToOneWithWhereWithoutTransactionInput)
    update?: TransactionStatusUpdateToOneWithWhereWithoutTransactionInput;
}
