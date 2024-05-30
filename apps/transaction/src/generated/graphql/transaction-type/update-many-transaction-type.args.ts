import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeUpdateManyMutationInput } from './transaction-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TransactionTypeWhereInput } from './transaction-type-where.input';

@ArgsType()
export class UpdateManyTransactionTypeArgs {

    @Field(() => TransactionTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => TransactionTypeUpdateManyMutationInput)
    data!: TransactionTypeUpdateManyMutationInput;

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;
}
