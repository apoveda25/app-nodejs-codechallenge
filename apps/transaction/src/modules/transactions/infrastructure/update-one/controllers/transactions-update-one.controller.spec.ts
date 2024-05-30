import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsUpdateOneController } from './transactions-update-one.controller';

describe('TransactionsUpdateOneController', () => {
  let controller: TransactionsUpdateOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionsUpdateOneController],
    }).compile();

    controller = module.get<TransactionsUpdateOneController>(TransactionsUpdateOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
