import { TSelect } from '../../domain/types';

export type TUpdateOneArgs<
  TWhere,
  TData,
  TSelectFields extends TData = TData,
> = {
  where: TWhere;
  data: Partial<TData>;
  select?: TSelect<TSelectFields>;
};

export interface IUpdateOneRepository<
  TWhere,
  TData,
  TSelectFields extends TData = TData,
> {
  updateOne(
    args: TUpdateOneArgs<TWhere, TData>,
    tx?: unknown,
  ): Promise<TSelectFields>;
}
