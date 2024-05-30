import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput } from '../transaction/transaction-unchecked-create-nested-many-without-transaction-type.input';

@InputType()
export class TransactionTypeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput, {nullable:true})
    transactions?: TransactionUncheckedCreateNestedManyWithoutTransactionTypeInput;
}
