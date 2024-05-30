import { Test, TestingModule } from '@nestjs/testing';
import { TransactionCreateOneService } from './transaction-create-one.service';

describe('TransactionCreateOneService', () => {
  let service: TransactionCreateOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionCreateOneService],
    }).compile();

    service = module.get<TransactionCreateOneService>(TransactionCreateOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
