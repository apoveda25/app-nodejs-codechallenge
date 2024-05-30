import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionTypeCreateInput } from './transaction-type-create.input';
import { TransactionTypeUpdateInput } from './transaction-type-update.input';

@ArgsType()
export class UpsertOneTransactionTypeArgs {

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:false})
    @Type(() => TransactionTypeWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => TransactionTypeCreateInput, {nullable:false})
    @Type(() => TransactionTypeCreateInput)
    create!: TransactionTypeCreateInput;

    @Field(() => TransactionTypeUpdateInput, {nullable:false})
    @Type(() => TransactionTypeUpdateInput)
    update!: TransactionTypeUpdateInput;
}
