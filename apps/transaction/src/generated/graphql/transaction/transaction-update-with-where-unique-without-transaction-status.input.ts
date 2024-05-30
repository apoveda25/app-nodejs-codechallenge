import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionUpdateWithoutTransactionStatusInput } from './transaction-update-without-transaction-status.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutTransactionStatusInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => TransactionUpdateWithoutTransactionStatusInput, {nullable:false})
    @Type(() => TransactionUpdateWithoutTransactionStatusInput)
    data!: TransactionUpdateWithoutTransactionStatusInput;
}
