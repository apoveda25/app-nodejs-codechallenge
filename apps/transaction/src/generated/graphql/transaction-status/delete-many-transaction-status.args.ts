import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTransactionStatusArgs {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;
}
