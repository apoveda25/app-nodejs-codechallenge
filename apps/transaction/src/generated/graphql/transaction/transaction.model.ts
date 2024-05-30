import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionType } from '../transaction-type/transaction-type.model';
import { TransactionStatus } from '../transaction-status/transaction-status.model';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    transactionExternalId!: string;

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    accountExternalIdDebit!: string;

    @Field(() => String, {nullable:false})
    accountExternalIdCredit!: string;

    @Field(() => Int, {nullable:false})
    transactionTypeId!: number;

    @Field(() => String, {nullable:false})
    transactionStatusId!: string;

    @Field(() => TransactionType, {nullable:false})
    transactionType?: TransactionType;

    @Field(() => TransactionStatus, {nullable:false})
    transactionStatus?: TransactionStatus;
}
