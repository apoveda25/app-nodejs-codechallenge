import { Test, TestingModule } from '@nestjs/testing';
import { TransactionTypeFindManyQueryHandler } from './transaction-type-find-many.query-handler';

describe('TransactionTypeFindManyQueryHandler', () => {
  let provider: TransactionTypeFindManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionTypeFindManyQueryHandler],
    }).compile();

    provider = module.get<TransactionTypeFindManyQueryHandler>(TransactionTypeFindManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
