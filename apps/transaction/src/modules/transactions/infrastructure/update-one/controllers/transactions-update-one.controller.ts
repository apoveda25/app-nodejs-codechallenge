import { ETopics, ETransactionStatusName } from '@app/shared/domain/enums';
import { EventDomain } from '@app/shared/domain/events';
import { ITransactionModel } from '@app/shared/infrastructure/models';
import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';
import { TransactionUpdateOneCommandImpl } from '../../../application/update-one/commands';

@Controller()
export class TransactionsUpdateOneController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(ETopics.TRANSACTION_APPROVED_ONE)
  async approvedOne(
    @Payload() message: EventDomain<ITransactionModel>,
    @Ctx() context: KafkaContext,
  ): Promise<ITransactionModel> {
    console.log(`Topic: ${context.getTopic()}`);

    return this.commandBus.execute<
      TransactionUpdateOneCommandImpl,
      ITransactionModel
    >(
      new TransactionUpdateOneCommandImpl({
        transactionExternalId: message.payload.transactionExternalId,
        transactionStatusName: ETransactionStatusName.APPROVED,
      }),
    );
  }

  @EventPattern(ETopics.TRANSACTION_REJECTED_ONE)
  async rejectedOne(
    @Payload() message: EventDomain<ITransactionModel>,
    @Ctx() context: KafkaContext,
  ): Promise<ITransactionModel> {
    console.log(`Topic: ${context.getTopic()}`);

    return this.commandBus.execute<
      TransactionUpdateOneCommandImpl,
      ITransactionModel
    >(
      new TransactionUpdateOneCommandImpl({
        transactionExternalId: message.payload.transactionExternalId,
        transactionStatusName: ETransactionStatusName.REJECTED,
      }),
    );
  }
}
