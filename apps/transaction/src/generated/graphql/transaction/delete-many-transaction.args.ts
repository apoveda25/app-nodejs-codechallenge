import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTransactionArgs {

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    where?: TransactionWhereInput;
}
