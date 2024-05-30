import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTransactionStatusResolver } from './transactions-transaction-status.resolver';

describe('TransactionsTransactionStatusResolver', () => {
  let resolver: TransactionsTransactionStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTransactionStatusResolver],
    }).compile();

    resolver = module.get<TransactionsTransactionStatusResolver>(TransactionsTransactionStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
