import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsFindManyResolver } from './transactions-find-many.resolver';

describe('TransactionsFindManyResolver', () => {
  let resolver: TransactionsFindManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsFindManyResolver],
    }).compile();

    resolver = module.get<TransactionsFindManyResolver>(TransactionsFindManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
