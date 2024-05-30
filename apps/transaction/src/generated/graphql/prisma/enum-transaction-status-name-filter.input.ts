import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from './transaction-status-name.enum';
import { NestedEnumTransactionStatusNameFilter } from './nested-enum-transaction-status-name-filter.input';

@InputType()
export class EnumTransactionStatusNameFilter {

    @Field(() => TransactionStatusName, {nullable:true})
    equals?: keyof typeof TransactionStatusName;

    @Field(() => [TransactionStatusName], {nullable:true})
    in?: Array<keyof typeof TransactionStatusName>;

    @Field(() => [TransactionStatusName], {nullable:true})
    notIn?: Array<keyof typeof TransactionStatusName>;

    @Field(() => NestedEnumTransactionStatusNameFilter, {nullable:true})
    not?: NestedEnumTransactionStatusNameFilter;
}
