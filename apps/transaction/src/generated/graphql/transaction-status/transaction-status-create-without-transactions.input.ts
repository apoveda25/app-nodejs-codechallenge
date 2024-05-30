import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from '../prisma/transaction-status-name.enum';

@InputType()
export class TransactionStatusCreateWithoutTransactionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionStatusName, {nullable:false})
    name!: keyof typeof TransactionStatusName;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
