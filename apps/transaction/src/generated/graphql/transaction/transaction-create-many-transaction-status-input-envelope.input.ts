import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyTransactionStatusInput } from './transaction-create-many-transaction-status.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyTransactionStatusInputEnvelope {

    @Field(() => [TransactionCreateManyTransactionStatusInput], {nullable:false})
    @Type(() => TransactionCreateManyTransactionStatusInput)
    data!: Array<TransactionCreateManyTransactionStatusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
