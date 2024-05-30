import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput } from '../transaction-type/transaction-type-update-one-required-without-transactions-nested.input';
import { TransactionStatusUpdateOneRequiredWithoutTransactionsNestedInput } from '../transaction-status/transaction-status-update-one-required-without-transactions-nested.input';

@InputType()
export class TransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    transactionExternalId?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accountExternalIdDebit?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accountExternalIdCredit?: StringFieldUpdateOperationsInput;

    @Field(() => TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    transactionType?: TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput;

    @Field(() => TransactionStatusUpdateOneRequiredWithoutTransactionsNestedInput, {nullable:true})
    transactionStatus?: TransactionStatusUpdateOneRequiredWithoutTransactionsNestedInput;
}
