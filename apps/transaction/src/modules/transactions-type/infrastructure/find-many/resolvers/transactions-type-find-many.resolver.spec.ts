import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypeFindManyResolver } from './transactions-type-find-many.resolver';

describe('TransactionsTypeFindManyResolver', () => {
  let resolver: TransactionsTypeFindManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypeFindManyResolver],
    }).compile();

    resolver = module.get<TransactionsTypeFindManyResolver>(TransactionsTypeFindManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
