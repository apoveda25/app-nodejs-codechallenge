import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsTypeRepository } from './transactions-type.repository';

describe('TransactionsTypeRepository', () => {
  let provider: TransactionsTypeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsTypeRepository],
    }).compile();

    provider = module.get<TransactionsTypeRepository>(TransactionsTypeRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
