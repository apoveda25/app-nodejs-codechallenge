import { Test, TestingModule } from '@nestjs/testing';
import { TransactionFindOneQueryHandler } from './transaction-find-one.query-handler';

describe('TransactionFindOneQueryHandler', () => {
  let provider: TransactionFindOneQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionFindOneQueryHandler],
    }).compile();

    provider = module.get<TransactionFindOneQueryHandler>(TransactionFindOneQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
