import { randomUUID } from 'crypto';
import { ETopics } from '../enums';

export abstract class EventDomain<T> {
  constructor(
    readonly topic: ETopics,
    readonly payload: T,
    readonly createdBy: string,
    readonly delay = 0,
    readonly createdAt = new Date(),
    readonly id = randomUUID(),
  ) {}
}
