import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionTypeWhereInput } from './transaction-type-where.input';
import { Type } from 'class-transformer';
import { TransactionTypeOrderByWithRelationInput } from './transaction-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransactionTypeWhereUniqueInput } from './transaction-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransactionTypeScalarFieldEnum } from './transaction-type-scalar-field.enum';

@ArgsType()
export class FindFirstTransactionTypeOrThrowArgs {

    @Field(() => TransactionTypeWhereInput, {nullable:true})
    @Type(() => TransactionTypeWhereInput)
    where?: TransactionTypeWhereInput;

    @Field(() => [TransactionTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransactionTypeOrderByWithRelationInput>;

    @Field(() => TransactionTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransactionTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransactionTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransactionTypeScalarFieldEnum>;
}
