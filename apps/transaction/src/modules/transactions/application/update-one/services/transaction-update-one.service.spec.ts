import { Test, TestingModule } from '@nestjs/testing';
import { TransactionUpdateOneService } from './transaction-update-one.service';

describe('TransactionUpdateOneService', () => {
  let service: TransactionUpdateOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionUpdateOneService],
    }).compile();

    service = module.get<TransactionUpdateOneService>(TransactionUpdateOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
