import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsStatusFindOneResolver } from './transactions-status-find-one.resolver';

describe('TransactionsStatusFindOneResolver', () => {
  let resolver: TransactionsStatusFindOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsStatusFindOneResolver],
    }).compile();

    resolver = module.get<TransactionsStatusFindOneResolver>(TransactionsStatusFindOneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
