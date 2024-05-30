import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTransactionStatusArgs {

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:false})
    @Type(() => TransactionStatusWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;
}
