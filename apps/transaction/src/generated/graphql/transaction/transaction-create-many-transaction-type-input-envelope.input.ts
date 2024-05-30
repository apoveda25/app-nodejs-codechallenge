import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyTransactionTypeInput } from './transaction-create-many-transaction-type.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionCreateManyTransactionTypeInputEnvelope {

    @Field(() => [TransactionCreateManyTransactionTypeInput], {nullable:false})
    @Type(() => TransactionCreateManyTransactionTypeInput)
    data!: Array<TransactionCreateManyTransactionTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
