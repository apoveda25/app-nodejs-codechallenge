import { ITransactionStatusModel } from '@app/shared/infrastructure/models';
import {
  ICountManyRepository,
  IFindManyRepository,
  IFindOneRepository,
  TCountManyArgs,
  TFindManyArgs,
  TFindOneArgs,
} from '@app/shared/infrastructure/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { ITXClientDenyList } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransactionsStatusRepository
  implements
    IFindOneRepository<ITransactionStatusModel>,
    IFindManyRepository<ITransactionStatusModel>,
    ICountManyRepository<ITransactionStatusModel>
{
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(
    args: TFindOneArgs<ITransactionStatusModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionStatusModel | null> {
    return (tx ?? this.prismaService).transactionStatus.findFirst(args);
  }

  async findMany(
    args: TFindManyArgs<ITransactionStatusModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionStatusModel[]> {
    return (tx ?? this.prismaService).transactionStatus.findMany(args);
  }

  async countMany(
    args: TCountManyArgs<ITransactionStatusModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<number> {
    return (tx ?? this.prismaService).transactionStatus.count(args);
  }
}
