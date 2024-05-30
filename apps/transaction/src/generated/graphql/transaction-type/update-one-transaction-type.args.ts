import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeUpdateInput } from './transaction-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';

@ArgsType()
export class UpdateOneTransactionTypeArgs {

    @Field(() => TransactionTypeUpdateInput, {nullable:false})
    @Type(() => TransactionTypeUpdateInput)
    data!: TransactionTypeUpdateInput;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:false})
    @Type(() => TransactionTypeWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;
}
