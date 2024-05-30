import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypeTransactionsResolver } from './transactions-type-transactions.resolver';

describe('TransactionsTypeTransactionsResolver', () => {
  let resolver: TransactionsTypeTransactionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypeTransactionsResolver],
    }).compile();

    resolver = module.get<TransactionsTypeTransactionsResolver>(TransactionsTypeTransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
