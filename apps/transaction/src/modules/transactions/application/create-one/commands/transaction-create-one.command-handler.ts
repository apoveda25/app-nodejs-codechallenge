import { TransactionGraphQLType } from '@app/shared/application/types';
import { ETopics } from '@app/shared/domain/enums';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { TransactionAggregate } from '../../../domain/create-one/aggregates';
import { TransactionCreatedOneEventImpl } from '../../../domain/create-one/events';
import { TransactionsRepository } from '../../../infrastructure/common/repositories';
import { TransactionCreateOneService } from '../services/transaction-create-one.service';
import { TransactionCreateOneCommandImpl } from './transaction-create-one.command-impl';

@CommandHandler(TransactionCreateOneCommandImpl)
export class TransactionCreateOneCommandHandler
  implements ICommandHandler<TransactionCreateOneCommandImpl>
{
  constructor(
    private readonly eventBus: EventBus,
    private readonly transactionCreateOneService: TransactionCreateOneService,
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(
    command: TransactionCreateOneCommandImpl,
  ): Promise<TransactionGraphQLType> {
    const transactionCreateOneOutputService =
      await this.transactionCreateOneService.createOne(command);

    const aggregate = TransactionAggregate.build(
      command.dto,
      transactionCreateOneOutputService,
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

    await this.transactionsRepository.createOne({
      data: model,
    });

    await this.eventBus.publish(
      new TransactionCreatedOneEventImpl(
        ETopics.TRANSACTION_CREATED_ONE,
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
