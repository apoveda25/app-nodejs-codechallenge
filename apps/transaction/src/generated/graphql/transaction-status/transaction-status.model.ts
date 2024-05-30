import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TransactionStatusName } from '../prisma/transaction-status-name.enum';
import { Transaction } from '../transaction/transaction.model';
import { TransactionStatusCount } from './transaction-status-count.output';

@ObjectType()
export class TransactionStatus {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => TransactionStatusName, {nullable:false})
    name!: keyof typeof TransactionStatusName;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => TransactionStatusCount, {nullable:false})
    _count?: TransactionStatusCount;
}
