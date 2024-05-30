import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTransactionTypeResolver } from './transactions-transaction-type.resolver';

describe('TransactionsTransactionTypeResolver', () => {
  let resolver: TransactionsTransactionTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTransactionTypeResolver],
    }).compile();

    resolver = module.get<TransactionsTransactionTypeResolver>(TransactionsTransactionTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
