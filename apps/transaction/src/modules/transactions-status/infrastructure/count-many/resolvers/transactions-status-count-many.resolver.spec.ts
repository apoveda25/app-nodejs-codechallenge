import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsStatusCountManyResolver } from './transactions-status-count-many.resolver';

describe('TransactionsStatusCountManyResolver', () => {
  let resolver: TransactionsStatusCountManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsStatusCountManyResolver],
    }).compile();

    resolver = module.get<TransactionsStatusCountManyResolver>(TransactionsStatusCountManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
