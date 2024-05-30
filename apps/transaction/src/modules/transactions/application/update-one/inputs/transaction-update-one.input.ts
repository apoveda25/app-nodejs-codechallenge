import { ETransactionStatusName } from '@app/shared/domain/enums';
import { Field, InputType } from '@nestjs/graphql';
import { UUIDMock, UUIDResolver } from 'graphql-scalars';
import { TransactionStatusName } from '../../../../../generated/graphql/prisma/transaction-status-name.enum';
import { ITransactionUpdateOneTransactionInput } from '../../../domain/update-one/inputs';

@InputType({ description: 'Input to create a `Transaction`' })
export class TransactionUpdateOneTransactionInput
  implements ITransactionUpdateOneTransactionInput
{
  @Field(() => UUIDResolver, {
    description: `Example field (${UUIDMock()})`,
    nullable: true,
  })
  transactionExternalId: string;

  @Field(() => TransactionStatusName, {
    description: `Example field (${ETransactionStatusName.APPROVED})`,
    nullable: true,
  })
  transactionStatusName: ETransactionStatusName;
}
