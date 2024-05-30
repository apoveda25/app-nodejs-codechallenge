import { EServices } from '@app/shared/domain/enums';
import { Inject, Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { TransactionCreatedOneEventImpl } from '../../../domain/create-one/events';

@EventsHandler(TransactionCreatedOneEventImpl)
export class TransactionCreatedOneEventHandler
  implements IEventHandler<TransactionCreatedOneEventImpl>
{
  private readonly logger = new Logger(TransactionCreatedOneEventHandler.name);

  constructor(@Inject(EServices.TRANSACTIONS) private client: ClientProxy) {}

  async handle(event: TransactionCreatedOneEventImpl) {
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
