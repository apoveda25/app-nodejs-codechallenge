import { Test, TestingModule } from '@nestjs/testing';
import { TransactionUpdatedOneEventHandler } from './transaction-updated-one.event-handler';

describe('TransactionUpdatedOneEventHandler', () => {
  let provider: TransactionUpdatedOneEventHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionUpdatedOneEventHandler],
    }).compile();

    provider = module.get<TransactionUpdatedOneEventHandler>(TransactionUpdatedOneEventHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
