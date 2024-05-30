import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypeCountManyResolver } from './transactions-type-count-many.resolver';

describe('TransactionsTypeCountManyResolver', () => {
  let resolver: TransactionsTypeCountManyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypeCountManyResolver],
    }).compile();

    resolver = module.get<TransactionsTypeCountManyResolver>(TransactionsTypeCountManyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
