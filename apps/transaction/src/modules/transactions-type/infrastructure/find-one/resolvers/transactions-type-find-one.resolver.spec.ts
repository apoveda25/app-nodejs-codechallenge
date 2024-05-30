import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypeFindOneResolver } from './transactions-type-find-one.resolver';

describe('TransactionsTypeFindOneResolver', () => {
  let resolver: TransactionsTypeFindOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypeFindOneResolver],
    }).compile();

    resolver = module.get<TransactionsTypeFindOneResolver>(TransactionsTypeFindOneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
