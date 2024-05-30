import { Test, TestingModule } from '@nestjs/testing';
import { TransactionStatusCountManyQueryHandler } from './transaction-status-count-many.query-handler';

describe('TransactionStatusCountManyQueryHandler', () => {
  let provider: TransactionStatusCountManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionStatusCountManyQueryHandler],
    }).compile();

    provider = module.get<TransactionStatusCountManyQueryHandler>(TransactionStatusCountManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
