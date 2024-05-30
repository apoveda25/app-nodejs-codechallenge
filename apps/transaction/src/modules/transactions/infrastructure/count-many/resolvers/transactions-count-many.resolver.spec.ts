import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsCountManyResolver } from './transactions-count-many.resolver';

describe('TransactionsCountManyResolver', () => {
  let resolver: TransactionsCountManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsCountManyResolver],
    }).compile();

    resolver = module.get<TransactionsCountManyResolver>(TransactionsCountManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
