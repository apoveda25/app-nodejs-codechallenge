import {
  TBigIntFilterInput,
  TBooleanFilterInput,
  TDateTimeFilterInput,
  TEnumFilterInput,
  TFloatFilterInput,
  TIntFilterInput,
  TJsonFilterInput,
  TStringFilterInput,
} from '../../domain/types';

export type TCountManyRecord = Record<
  string,
  | boolean
  | string
  | number
  | bigint
  | Date
  | Record<string, boolean | string | number | bigint | Date>
>;

export type TCountManyWhere<TWhere = TCountManyRecord> = {
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

export type TCountManyArgs<TWhere = TCountManyRecord> = {
  where: Partial<TCountManyWhere<TWhere>>;
};

export interface ICountManyRepository<TWhere = TCountManyRecord> {
  countMany(args?: TCountManyArgs<TWhere>, tx?: unknown): Promise<number>;
}
