import { Test, TestingModule } from '@nestjs/testing';
import { TransactionValidateOneCommandHandler } from './transaction-validate-one.command-handler';

describe('TransactionValidateOneCommandHandler', () => {
  let provider: TransactionValidateOneCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionValidateOneCommandHandler],
    }).compile();

    provider = module.get<TransactionValidateOneCommandHandler>(TransactionValidateOneCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
