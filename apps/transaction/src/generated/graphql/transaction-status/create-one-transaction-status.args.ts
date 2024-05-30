import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusCreateInput } from './transaction-status-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransactionStatusArgs {

    @Field(() => TransactionStatusCreateInput, {nullable:false})
    @Type(() => TransactionStatusCreateInput)
    data!: TransactionStatusCreateInput;
}
