import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUpdateManyWithoutTransactionTypeNestedInput } from '../transaction/transaction-update-many-without-transaction-type-nested.input';

@InputType()
export class TransactionTypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUpdateManyWithoutTransactionTypeNestedInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutTransactionTypeNestedInput;
}
