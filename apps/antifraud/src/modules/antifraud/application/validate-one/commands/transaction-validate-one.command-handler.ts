import { ETopics, ETransactionStatusName } from '@app/shared/domain/enums';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { TransactionAggregate } from '../../../domain/validate-one/aggregates';
import {
  TransactionApprovedOneEventImpl,
  TransactionRejectedOneEventImpl,
} from '../../../domain/validate-one/events';
import { TransactionValidateOneCommandImpl } from './transaction-validate-one.command-impl';

@CommandHandler(TransactionValidateOneCommandImpl)
export class TransactionValidateOneCommandHandler
  implements ICommandHandler<TransactionValidateOneCommandImpl>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: TransactionValidateOneCommandImpl): Promise<boolean> {
    const aggregate = TransactionAggregate.build(command.dto);

    const model = {
      transactionExternalId: aggregate.transactionExternalId.value,
      value: aggregate.value.value,
      createdAt: aggregate.createdAt,
      accountExternalIdCredit: aggregate.accountExternalIdCredit.value,
      accountExternalIdDebit: aggregate.accountExternalIdDebit.value,
      transactionStatusId: aggregate.transactionStatusId.value,
      transactionTypeId: aggregate.transactionTypeId.value,
    };

    const event =
      aggregate.transactionStatusName.value === ETransactionStatusName.APPROVED
        ? new TransactionApprovedOneEventImpl(
            ETopics.TRANSACTION_APPROVED_ONE,
            model,
            randomUUID(),
          )
        : new TransactionRejectedOneEventImpl(
            ETopics.TRANSACTION_REJECTED_ONE,
            model,
            randomUUID(),
          );

    await this.eventBus.publish(event);

    return true;
  }
}
