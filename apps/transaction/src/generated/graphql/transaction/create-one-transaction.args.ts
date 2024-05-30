import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionCreateInput } from './transaction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransactionArgs {

    @Field(() => TransactionCreateInput, {nullable:false})
    @Type(() => TransactionCreateInput)
    data!: TransactionCreateInput;
}
