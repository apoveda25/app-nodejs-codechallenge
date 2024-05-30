import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeCreateManyInput } from './transaction-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransactionTypeArgs {

    @Field(() => [TransactionTypeCreateManyInput], {nullable:false})
    @Type(() => TransactionTypeCreateManyInput)
    data!: Array<TransactionTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
