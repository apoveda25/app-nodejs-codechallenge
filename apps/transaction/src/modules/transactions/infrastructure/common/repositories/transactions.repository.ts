import { ITransactionModel } from '@app/shared/infrastructure/models';
import {
  ICountManyRepository,
  ICreateOneRepository,
  IFindManyRepository,
  IFindOneRepository,
  ITransactionRepository,
  IUpdateOneRepository,
  TCountManyArgs,
  TCreateOneArgs,
  TFindManyArgs,
  TFindOneArgs,
  TTransactionArgs,
  TUpdateOneArgs,
} from '@app/shared/infrastructure/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { ITXClientDenyList } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransactionsRepository
  implements
    ITransactionRepository<Omit<PrismaClient, ITXClientDenyList>>,
    IFindOneRepository<ITransactionModel>,
    IFindManyRepository<ITransactionModel>,
    ICountManyRepository<ITransactionModel>,
    ICreateOneRepository<ITransactionModel>,
    IUpdateOneRepository<ITransactionModel, ITransactionModel>
{
  constructor(private readonly prismaService: PrismaService) {}

  async transaction(
    callback: TTransactionArgs<Omit<PrismaClient, ITXClientDenyList>>,
  ): Promise<unknown> {
    return this.prismaService.$transaction(callback);
  }

  async findOne(
    args: TFindOneArgs<ITransactionModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionModel | null> {
    return (tx ?? this.prismaService).transaction.findFirst(args);
  }

  async findMany(
    args: TFindManyArgs<ITransactionModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionModel[]> {
    return (tx ?? this.prismaService).transaction.findMany(args);
  }

  async countMany(
    args: TCountManyArgs<ITransactionModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<number> {
    return (tx ?? this.prismaService).transaction.count(args);
  }

  async createOne(
    args: TCreateOneArgs<ITransactionModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionModel> {
    return (tx ?? this.prismaService).transaction.create(args);
  }

  async updateOne(
    args: TUpdateOneArgs<
      Pick<ITransactionModel, 'transactionExternalId'>,
      ITransactionModel
    >,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionModel> {
    return (tx ?? this.prismaService).transaction.update(args);
  }
}
