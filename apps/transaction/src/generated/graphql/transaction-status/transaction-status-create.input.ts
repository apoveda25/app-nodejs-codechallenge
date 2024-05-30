import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from '../prisma/transaction-status-name.enum';
import { TransactionCreateNestedManyWithoutTransactionStatusInput } from '../transaction/transaction-create-nested-many-without-transaction-status.input';

@InputType()
export class TransactionStatusCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionStatusName, {nullable:false})
    name!: keyof typeof TransactionStatusName;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutTransactionStatusInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutTransactionStatusInput;
}
