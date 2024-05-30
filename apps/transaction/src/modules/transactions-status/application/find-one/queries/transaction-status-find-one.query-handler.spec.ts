import { Test, TestingModule } from '@nestjs/testing';
import { TransactionStatusFindOneQueryHandler } from './transaction-status-find-one.query-handler';

describe('TransactionStatusFindOneQueryHandler', () => {
  let provider: TransactionStatusFindOneQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionStatusFindOneQueryHandler],
    }).compile();

    provider = module.get<TransactionStatusFindOneQueryHandler>(TransactionStatusFindOneQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
