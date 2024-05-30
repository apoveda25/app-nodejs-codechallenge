import {
  TBigIntFilterInput,
  TBooleanFilterInput,
  TDateTimeFilterInput,
  TEnumFilterInput,
  TFloatFilterInput,
  TIntFilterInput,
  TJsonFilterInput,
  TSelect,
  TSortType,
  TStringFilterInput,
} from '../../domain/types';

export type TFindManyRecord = Record<
  string,
  | boolean
  | string
  | number
  | bigint
  | Date
  | Record<string, boolean | string | number | bigint | Date>
>;

export type TFindManyWhere<TWhere = TFindManyRecord> = {
  [k in keyof TWhere]: TWhere[k] extends boolean
    ? TBooleanFilterInput
    : TWhere[k] extends string
      ? TStringFilterInput | TEnumFilterInput<string>
      : TWhere[k] extends number
        ? TIntFilterInput | TFloatFilterInput | TEnumFilterInput<number>
        : TWhere[k] extends bigint
          ? TBigIntFilterInput
          : TWhere[k] extends Date
            ? TDateTimeFilterInput
            : TWhere[k] extends Record<
                  string,
                  boolean | string | number | bigint | Date
                >
              ? TJsonFilterInput
              : never;
};

export type TFindManyArgs<TWhere = TFindManyRecord, TSelectFields = TWhere> = {
  where: Partial<TFindManyWhere<TWhere>>;
  select?: TSelect<TSelectFields>;
  orderBy?: TSortType<TSelectFields>;
  take?: number;
  skip?: number;
};

export interface IFindManyRepository<
  TWhere = TFindManyRecord,
  TSelectFields = TWhere,
> {
  findMany(
    args?: TFindManyArgs<TWhere, TSelectFields>,
    tx?: unknown,
  ): Promise<TSelectFields[]>;
}
