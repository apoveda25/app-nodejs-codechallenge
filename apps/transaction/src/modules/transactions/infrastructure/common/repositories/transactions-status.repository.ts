import { ITransactionStatusModel } from '@app/shared/infrastructure/models';
import {
  IFindOneRepository,
  TFindOneArgs,
} from '@app/shared/infrastructure/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { ITXClientDenyList } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransactionsStatusRepository
  implements IFindOneRepository<ITransactionStatusModel>
{
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(
    args: TFindOneArgs<ITransactionStatusModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionStatusModel | null> {
    return (tx ?? this.prismaService).transactionStatus.findFirst(args);
  }
}
