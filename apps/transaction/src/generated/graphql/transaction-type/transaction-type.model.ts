import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Transaction } from '../transaction/transaction.model';
import { TransactionTypeCount } from './transaction-type-count.output';

@ObjectType()
export class TransactionType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [Transaction], {nullable:true})
    transactions?: Array<Transaction>;

    @Field(() => TransactionTypeCount, {nullable:false})
    _count?: TransactionTypeCount;
}
