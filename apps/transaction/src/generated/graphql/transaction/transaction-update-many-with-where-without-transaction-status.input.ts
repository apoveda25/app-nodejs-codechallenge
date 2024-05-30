import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';
import { Type } from 'class-transformer';
import { TransactionUpdateManyMutationInput } from './transaction-update-many-mutation.input';

@InputType()
export class TransactionUpdateManyWithWhereWithoutTransactionStatusInput {

    @Field(() => TransactionScalarWhereInput, {nullable:false})
    @Type(() => TransactionScalarWhereInput)
    where!: TransactionScalarWhereInput;

    @Field(() => TransactionUpdateManyMutationInput, {nullable:false})
    @Type(() => TransactionUpdateManyMutationInput)
    data!: TransactionUpdateManyMutationInput;
}
