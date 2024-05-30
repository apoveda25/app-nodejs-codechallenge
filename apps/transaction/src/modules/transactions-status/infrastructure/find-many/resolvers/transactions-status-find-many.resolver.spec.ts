import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsStatusFindManyResolver } from './transactions-status-find-many.resolver';

describe('TransactionsStatusFindManyResolver', () => {
  let resolver: TransactionsStatusFindManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsStatusFindManyResolver],
    }).compile();

    resolver = module.get<TransactionsStatusFindManyResolver>(TransactionsStatusFindManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
