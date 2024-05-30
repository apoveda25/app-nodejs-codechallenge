import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsStatusRepository } from './transactions-status.repository';

describe('TransactionsStatusRepository', () => {
  let provider: TransactionsStatusRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionsStatusRepository],
    }).compile();

    provider = module.get<TransactionsStatusRepository>(TransactionsStatusRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
