import { Test, TestingModule } from '@nestjs/testing';
import { TransactionValidateOneEventHandler } from './transaction-validate-one.event-handler';

describe('TransactionValidateOneEventHandler', () => {
  let provider: TransactionValidateOneEventHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionValidateOneEventHandler],
    }).compile();

    provider = module.get<TransactionValidateOneEventHandler>(TransactionValidateOneEventHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
