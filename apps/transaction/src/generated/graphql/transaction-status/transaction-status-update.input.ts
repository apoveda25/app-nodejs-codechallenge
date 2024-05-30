import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTransactionStatusNameFieldUpdateOperationsInput } from '../prisma/enum-transaction-status-name-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUpdateManyWithoutTransactionStatusNestedInput } from '../transaction/transaction-update-many-without-transaction-status-nested.input';

@InputType()
export class TransactionStatusUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTransactionStatusNameFieldUpdateOperationsInput, {nullable:true})
    name?: EnumTransactionStatusNameFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUpdateManyWithoutTransactionStatusNestedInput, {nullable:true})
    transactions?: TransactionUpdateManyWithoutTransactionStatusNestedInput;
}
