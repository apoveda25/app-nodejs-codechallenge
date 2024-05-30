import { TSelect } from '../../domain/types';

export type TDeleteOneArgs<TWhere, TSelectFields> = {
  where: TWhere;
  select?: TSelect<TSelectFields>;
};

export interface IDeleteOneRepository<TWhere, TSelectFields> {
  deleteOne(
    args: TDeleteOneArgs<TWhere, TSelectFields>,
    tx?: unknown,
  ): Promise<TSelectFields>;
}
