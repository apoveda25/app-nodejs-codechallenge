import { TSelect } from '../../domain/types';

export type TFindOneArgs<TWhere, TSelectFields = TWhere> = {
  where: Partial<TWhere>;
  select?: TSelect<TSelectFields>;
};

export interface IFindOneRepository<TWhere, TSelectFields = TWhere> {
  findOne(
    args: TFindOneArgs<TWhere, TSelectFields>,
    tx?: unknown,
  ): Promise<TSelectFields | null>;
}
