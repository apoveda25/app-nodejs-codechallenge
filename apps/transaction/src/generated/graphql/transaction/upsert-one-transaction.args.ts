import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionCreateInput } from './transaction-create.input';
import { TransactionUpdateInput } from './transaction-update.input';

@ArgsType()
export class UpsertOneTransactionArgs {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    @Type(() => TransactionWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => TransactionCreateInput, {nullable:false})
    @Type(() => TransactionCreateInput)
    create!: TransactionCreateInput;

    @Field(() => TransactionUpdateInput, {nullable:false})
    @Type(() => TransactionUpdateInput)
    update!: TransactionUpdateInput;
}
