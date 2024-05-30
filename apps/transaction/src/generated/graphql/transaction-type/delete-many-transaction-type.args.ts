import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTransactionTypeArgs {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;
}
