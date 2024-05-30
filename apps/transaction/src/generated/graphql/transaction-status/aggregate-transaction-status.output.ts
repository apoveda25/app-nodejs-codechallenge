import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransactionStatusCountAggregate } from './transaction-status-count-aggregate.output';
import { TransactionStatusMinAggregate } from './transaction-status-min-aggregate.output';
import { TransactionStatusMaxAggregate } from './transaction-status-max-aggregate.output';

@ObjectType()
export class AggregateTransactionStatus {

    @Field(() => TransactionStatusCountAggregate, {nullable:true})
    _count?: TransactionStatusCountAggregate;

    @Field(() => TransactionStatusMinAggregate, {nullable:true})
    _min?: TransactionStatusMinAggregate;

    @Field(() => TransactionStatusMaxAggregate, {nullable:true})
    _max?: TransactionStatusMaxAggregate;
}
