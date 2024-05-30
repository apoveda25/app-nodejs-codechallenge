import { TSelect } from '../../domain/types';

export type TCreateOneArgs<TData, TSelectFields = TData> = {
  data: TData;
  select?: TSelect<TSelectFields>;
};

export interface ICreateOneRepository<TData, TSelectFields = TData> {
  createOne(args: TCreateOneArgs<TData>, tx?: unknown): Promise<TSelectFields>;
}
