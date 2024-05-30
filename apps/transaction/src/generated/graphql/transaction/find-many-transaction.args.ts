import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { Type } from 'class-transformer';
import { TransactionOrderByWithRelationInput } from './transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransactionScalarFieldEnum } from './transaction-scalar-field.enum';

@ArgsType()
export class FindManyTransactionArgs {

    @Field(() => TransactionWhereInput, {nullable:true})
    @Type(() => TransactionWhereInput)
    where?: TransactionWhereInput;

    @Field(() => [TransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransactionOrderByWithRelationInput>;

    @Field(() => TransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransactionWhereUniqueInput, 'transactionExternalId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
