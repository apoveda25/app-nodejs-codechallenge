import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateNestedManyWithoutTransactionTypeInput } from '../transaction/transaction-create-nested-many-without-transaction-type.input';

@InputType()
export class TransactionTypeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => TransactionCreateNestedManyWithoutTransactionTypeInput, {nullable:true})
    transactions?: TransactionCreateNestedManyWithoutTransactionTypeInput;
}
