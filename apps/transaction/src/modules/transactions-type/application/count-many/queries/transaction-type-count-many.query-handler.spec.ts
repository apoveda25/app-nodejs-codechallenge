import { Test, TestingModule } from '@nestjs/testing';
import { TransactionTypeCountManyQueryHandler } from './transaction-type-count-many.query-handler';

describe('TransactionTypeCountManyQueryHandler', () => {
  let provider: TransactionTypeCountManyQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionTypeCountManyQueryHandler],
    }).compile();

    provider = module.get<TransactionTypeCountManyQueryHandler>(TransactionTypeCountManyQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
