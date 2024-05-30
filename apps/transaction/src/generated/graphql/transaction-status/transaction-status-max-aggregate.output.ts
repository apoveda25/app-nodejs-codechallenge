import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransactionStatusName } from '../prisma/transaction-status-name.enum';

@ObjectType()
export class TransactionStatusMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionStatusName, {nullable:true})
    name?: keyof typeof TransactionStatusName;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
