import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionUpdateManyMutationInput } from './transaction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TransactionWhereInput } from './transaction-where.input';

@ArgsType()
export class UpdateManyTransactionArgs {

    @Field(() => TransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransactionUpdateManyMutationInput)
    data!: TransactionUpdateManyMutationInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    where?: TransactionWhereInput;
}
