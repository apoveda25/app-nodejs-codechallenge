import { TransactionGraphQLType } from '@app/shared/application/types';
import { ETopics } from '@app/shared/domain/enums';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { TransactionAggregate } from '../../../domain/update-one/aggregates';
import { TransactionUpdatedOneEventImpl } from '../../../domain/update-one/events';
import { TransactionsRepository } from '../../../infrastructure/common/repositories';
import { TransactionUpdateOneService } from '../services';
import { TransactionUpdateOneCommandImpl } from './transaction-update-one.command-impl';

@CommandHandler(TransactionUpdateOneCommandImpl)
export class TransactionUpdateOneCommandHandler
  implements ICommandHandler<TransactionUpdateOneCommandImpl>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly transactionUpdateOneService: TransactionUpdateOneService,
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(
    command: TransactionUpdateOneCommandImpl,
  ): Promise<TransactionGraphQLType> {
    const transactionUpdateOneOutputService =
      await this.transactionUpdateOneService.updateOne(command);

    const aggregate = TransactionAggregate.build(
      command.dto,
      transactionUpdateOneOutputService,
    );

    const model = {
      transactionExternalId: aggregate.transactionExternalId.value,
      value: aggregate.value.value,
      createdAt: aggregate.createdAt,
      accountExternalIdCredit: aggregate.accountExternalIdCredit.value,
      accountExternalIdDebit: aggregate.accountExternalIdDebit.value,
      transactionStatusId: aggregate.transactionStatusId.value,
      transactionTypeId: aggregate.transactionTypeId.value,
    };

    await this.transactionsRepository.updateOne({
      where: {
        transactionExternalId: model.transactionExternalId,
      },
      data: model,
    });

    await this.eventBus.publish(
      new TransactionUpdatedOneEventImpl(
        ETopics.TRANSACTION_UPDATED_ONE,
        model,
        randomUUID(),
      ),
    );

    return {
      transactionExternalId: aggregate.transactionExternalId.value,
      value: aggregate.value.value,
      createdAt: aggregate.createdAt,
      transactionStatusId: aggregate.transactionStatusId.value,
      transactionTypeId: aggregate.transactionTypeId.value,
    };
  }
}
