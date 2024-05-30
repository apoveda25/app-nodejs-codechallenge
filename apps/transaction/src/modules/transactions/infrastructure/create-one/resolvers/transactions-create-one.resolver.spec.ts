import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsCreateOneResolver } from './transactions-create-one.resolver';

describe('TransactionsCreateOneResolver', () => {
  let resolver: TransactionsCreateOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsCreateOneResolver],
    }).compile();

    resolver = module.get<TransactionsCreateOneResolver>(
      TransactionsCreateOneResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
