import { EServices } from '@app/shared/domain/enums';
import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  TransactionApprovedOneEventImpl,
  TransactionRejectedOneEventImpl,
} from '../../../domain/validate-one/events';

@EventsHandler(TransactionRejectedOneEventImpl, TransactionApprovedOneEventImpl)
export class TransactionValidateOneEventHandler
  implements
    IEventHandler<
      TransactionRejectedOneEventImpl | TransactionApprovedOneEventImpl
    >
{
  private readonly logger = new Logger(TransactionValidateOneEventHandler.name);

  constructor(@Inject(EServices.ANTIFRAUD) private client: ClientProxy) {}

  async handle(
    event: TransactionRejectedOneEventImpl | TransactionApprovedOneEventImpl,
  ) {
    try {
      this.logger.verbose(`Try send event ${event.topic}:`);

      await lastValueFrom(
        this.client.emit<string, string>(event.topic, JSON.stringify(event)),
      );
    } catch (error) {
      this.logger.error(error.message);
    } finally {
      this.logger.log(JSON.stringify(event, null, 2));
    }
  }
}
