import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusName } from './transaction-status-name.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransactionStatusNameFilter } from './nested-enum-transaction-status-name-filter.input';

@InputType()
export class NestedEnumTransactionStatusNameWithAggregatesFilter {

    @Field(() => TransactionStatusName, {nullable:true})
    equals?: keyof typeof TransactionStatusName;

    @Field(() => [TransactionStatusName], {nullable:true})
    in?: Array<keyof typeof TransactionStatusName>;

    @Field(() => [TransactionStatusName], {nullable:true})
    notIn?: Array<keyof typeof TransactionStatusName>;

    @Field(() => NestedEnumTransactionStatusNameWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionStatusNameWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransactionStatusNameFilter, {nullable:true})
    _min?: NestedEnumTransactionStatusNameFilter;

    @Field(() => NestedEnumTransactionStatusNameFilter, {nullable:true})
    _max?: NestedEnumTransactionStatusNameFilter;
}
