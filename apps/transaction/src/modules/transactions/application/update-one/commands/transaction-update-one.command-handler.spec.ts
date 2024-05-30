import { Test, TestingModule } from '@nestjs/testing';
import { TransactionUpdateOneCommandHandler } from './transaction-update-one.command-handler';

describe('TransactionUpdateOneCommandHandler', () => {
  let provider: TransactionUpdateOneCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionUpdateOneCommandHandler],
    }).compile();

    provider = module.get<TransactionUpdateOneCommandHandler>(TransactionUpdateOneCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
