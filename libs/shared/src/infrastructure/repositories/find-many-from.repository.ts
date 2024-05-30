import { TFindManyArgs } from './find-many.repository';

export interface IFindManyFromRepository<TWhere, TSelectFields> {
  findManyFrom(
    fromId: string,
    args?: TFindManyArgs<TWhere, TSelectFields>,
    tx?: unknown,
  ): Promise<TSelectFields[]>;
}
