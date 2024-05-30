import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';

@InputType()
export class TransactionTypeRelationFilter {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    is?: TransactionTypeWhereInput;

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    isNot?: TransactionTypeWhereInput;
}
