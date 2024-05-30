import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCountManyQueryHandler } from './transaction-count-many.query-handler';

describe('TransactionCountManyQueryHandler', () => {
  let provider: TransactionCountManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCountManyQueryHandler],
    }).compile();

    provider = module.get<TransactionCountManyQueryHandler>(TransactionCountManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
