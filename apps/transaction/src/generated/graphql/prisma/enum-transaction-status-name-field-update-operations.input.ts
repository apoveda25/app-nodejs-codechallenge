import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from './transaction-status-name.enum';

@InputType()
export class EnumTransactionStatusNameFieldUpdateOperationsInput {

    @Field(() => TransactionStatusName, {nullable:true})
    set?: keyof typeof TransactionStatusName;
}
