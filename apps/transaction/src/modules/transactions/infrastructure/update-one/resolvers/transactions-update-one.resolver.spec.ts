import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsUpdateOneResolver } from './transactions-update-one.resolver';

describe('TransactionsUpdateOneResolver', () => {
  let resolver: TransactionsUpdateOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsUpdateOneResolver],
    }).compile();

    resolver = module.get<TransactionsUpdateOneResolver>(TransactionsUpdateOneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
