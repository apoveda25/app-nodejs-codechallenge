import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTransactionTypeOrThrowArgs {

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:false})
    @Type(() => TransactionTypeWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;
}
