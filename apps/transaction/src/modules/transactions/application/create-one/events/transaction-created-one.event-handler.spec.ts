import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCreatedOneEventHandler } from './transaction-created-one.event-handler';

describe('TransactionCreatedOneEventHandler', () => {
  let provider: TransactionCreatedOneEventHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCreatedOneEventHandler],
    }).compile();

    provider = module.get<TransactionCreatedOneEventHandler>(TransactionCreatedOneEventHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
