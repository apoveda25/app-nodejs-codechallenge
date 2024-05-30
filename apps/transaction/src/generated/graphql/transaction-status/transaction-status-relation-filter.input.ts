import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';

@InputType()
export class TransactionStatusRelationFilter {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    is?: TransactionStatusWhereInput;

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    isNot?: TransactionStatusWhereInput;
}
