import { Test, TestingModule } from '@nestjs/testing';
import { TransactionStatusFindManyQueryHandler } from './transaction-status-find-many.query-handler';

describe('TransactionStatusFindManyQueryHandler', () => {
  let provider: TransactionStatusFindManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionStatusFindManyQueryHandler],
    }).compile();

    provider = module.get<TransactionStatusFindManyQueryHandler>(TransactionStatusFindManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
