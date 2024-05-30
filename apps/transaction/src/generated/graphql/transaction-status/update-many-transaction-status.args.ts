import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusUpdateManyMutationInput } from './transaction-status-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TransactionStatusWhereInput } from './transaction-status-where.input';

@ArgsType()
export class UpdateManyTransactionStatusArgs {

    @Field(() => TransactionStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => TransactionStatusUpdateManyMutationInput)
    data!: TransactionStatusUpdateManyMutationInput;

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;
}
