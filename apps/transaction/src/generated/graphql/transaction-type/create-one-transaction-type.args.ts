import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeCreateInput } from './transaction-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransactionTypeArgs {

    @Field(() => TransactionTypeCreateInput, {nullable:false})
    @Type(() => TransactionTypeCreateInput)
    data!: TransactionTypeCreateInput;
}
