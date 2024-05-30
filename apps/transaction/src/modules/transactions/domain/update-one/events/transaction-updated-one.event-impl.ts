import { EventDomain } from '@app/shared/domain/events';
import { ITransactionModel } from '@app/shared/infrastructure/models';

export class TransactionUpdatedOneEventImpl extends EventDomain<ITransactionModel> {}
