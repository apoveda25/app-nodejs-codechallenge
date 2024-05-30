import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsFindOneResolver } from './transactions-find-one.resolver';

describe('TransactionsFindOneResolver', () => {
  let resolver: TransactionsFindOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsFindOneResolver],
    }).compile();

    resolver = module.get<TransactionsFindOneResolver>(TransactionsFindOneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
