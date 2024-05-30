import { ITransactionTypeModel } from '@app/shared/infrastructure/models';
import {
  IFindOneRepository,
  TFindOneArgs,
} from '@app/shared/infrastructure/repositories';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { ITXClientDenyList } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransactionsTypeRepository
  implements IFindOneRepository<ITransactionTypeModel>
{
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(
    args: TFindOneArgs<ITransactionTypeModel>,
    tx?: Omit<PrismaClient, ITXClientDenyList>,
  ): Promise<ITransactionTypeModel | null> {
    return (tx ?? this.prismaService).transactionType.findFirst(args);
  }
}
