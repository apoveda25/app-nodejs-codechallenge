import { ETopics } from '@app/shared/domain/enums';
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
import { TransactionValidateOneCommandImpl } from '../../../application/validate-one/commands';

@Controller()
export class AntifraudController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(ETopics.TRANSACTION_CREATED_ONE)
  async validateOne(
    @Payload() message: EventDomain<ITransactionModel>,
    @Ctx() context: KafkaContext,
  ): Promise<boolean> {
    console.log(`Topic: ${context.getTopic()}`);

    return this.commandBus.execute<TransactionValidateOneCommandImpl, boolean>(
      new TransactionValidateOneCommandImpl(message),
    );
  }
}
