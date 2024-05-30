import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from './transaction-status-name.enum';

@InputType()
export class NestedEnumTransactionStatusNameFilter {

    @Field(() => TransactionStatusName, {nullable:true})
    equals?: keyof typeof TransactionStatusName;

    @Field(() => [TransactionStatusName], {nullable:true})
    in?: Array<keyof typeof TransactionStatusName>;

    @Field(() => [TransactionStatusName], {nullable:true})
    notIn?: Array<keyof typeof TransactionStatusName>;

    @Field(() => NestedEnumTransactionStatusNameFilter, {nullable:true})
    not?: NestedEnumTransactionStatusNameFilter;
}
