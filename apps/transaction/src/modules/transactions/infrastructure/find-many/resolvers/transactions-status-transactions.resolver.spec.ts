import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsStatusTransactionsResolver } from './transactions-status-transactions.resolver';

describe('TransactionsStatusTransactionsResolver', () => {
  let resolver: TransactionsStatusTransactionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsStatusTransactionsResolver],
    }).compile();

    resolver = module.get<TransactionsStatusTransactionsResolver>(TransactionsStatusTransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
