import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionStatusWhereInput } from './transaction-status-where.input';
import { Type } from 'class-transformer';
import { TransactionStatusOrderByWithRelationInput } from './transaction-status-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransactionStatusWhereUniqueInput } from './transaction-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransactionStatusScalarFieldEnum } from './transaction-status-scalar-field.enum';

@ArgsType()
export class FindFirstTransactionStatusOrThrowArgs {

    @Field(() => TransactionStatusWhereInput, {nullable:true})
    @Type(() => TransactionStatusWhereInput)
    where?: TransactionStatusWhereInput;

    @Field(() => [TransactionStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransactionStatusOrderByWithRelationInput>;

    @Field(() => TransactionStatusWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransactionStatusWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransactionStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransactionStatusScalarFieldEnum>;
}
