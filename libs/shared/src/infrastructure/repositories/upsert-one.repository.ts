import { TSelect } from '../../domain/types';

export type TUpsertOneArgs<
  TWhere,
  TData,
  TSelectFields extends TData = TData,
> = {
  where: TWhere;
  create: TData;
  update: Partial<TData>;
  select?: TSelect<TSelectFields>;
};

export interface IUpsertOneRepository<
  TWhere,
  TData,
  TSelectFields extends TData = TData,
> {
  upsertOne(
    args: TUpsertOneArgs<TWhere, TData>,
    tx?: unknown,
  ): Promise<TSelectFields>;
}
