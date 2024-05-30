import { Test, TestingModule } from '@nestjs/testing';
import { TransactionFindManyQueryHandler } from './transaction-find-many.query-handler';

describe('TransactionFindManyQueryHandler', () => {
  let provider: TransactionFindManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionFindManyQueryHandler],
    }).compile();

    provider = module.get<TransactionFindManyQueryHandler>(TransactionFindManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
