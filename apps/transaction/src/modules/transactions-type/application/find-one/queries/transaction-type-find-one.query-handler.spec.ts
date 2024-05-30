import { Test, TestingModule } from '@nestjs/testing';
import { TransactionTypeFindOneQueryHandler } from './transaction-type-find-one.query-handler';

describe('TransactionTypeFindOneQueryHandler', () => {
  let provider: TransactionTypeFindOneQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionTypeFindOneQueryHandler],
    }).compile();

    provider = module.get<TransactionTypeFindOneQueryHandler>(TransactionTypeFindOneQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
