import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusUpdateInput } from './transaction-status-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';

@ArgsType()
export class UpdateOneTransactionStatusArgs {

    @Field(() => TransactionStatusUpdateInput, {nullable:false})
    @Type(() => TransactionStatusUpdateInput)
    data!: TransactionStatusUpdateInput;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:false})
    @Type(() => TransactionStatusWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;
}
