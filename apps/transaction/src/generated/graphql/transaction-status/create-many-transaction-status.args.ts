import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusCreateManyInput } from './transaction-status-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransactionStatusArgs {

    @Field(() => [TransactionStatusCreateManyInput], {nullable:false})
    @Type(() => TransactionStatusCreateManyInput)
    data!: Array<TransactionStatusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
