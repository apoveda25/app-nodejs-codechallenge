import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTransactionStatusNameFieldUpdateOperationsInput } from '../prisma/enum-transaction-status-name-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionUncheckedUpdateManyWithoutTransactionStatusNestedInput } from '../transaction/transaction-unchecked-update-many-without-transaction-status-nested.input';

@InputType()
export class TransactionStatusUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTransactionStatusNameFieldUpdateOperationsInput, {nullable:true})
    name?: EnumTransactionStatusNameFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutTransactionStatusNestedInput, {nullable:true})
    transactions?: TransactionUncheckedUpdateManyWithoutTransactionStatusNestedInput;
}
