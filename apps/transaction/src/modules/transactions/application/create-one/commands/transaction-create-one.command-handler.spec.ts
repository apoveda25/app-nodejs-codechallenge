import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCreateOneCommandHandler } from './transaction-create-one.command-handler';

describe('TransactionCreateOneCommandHandler', () => {
  let provider: TransactionCreateOneCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCreateOneCommandHandler],
    }).compile();

    provider = module.get<TransactionCreateOneCommandHandler>(TransactionCreateOneCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
