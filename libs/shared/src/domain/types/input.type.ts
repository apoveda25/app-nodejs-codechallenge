export type TSelect<T> = {
  [k in keyof T]?: T[k] extends boolean | string | number | bigint | Date
    ? true
    : never;
};

export type TInclude<T> = {
  [k in keyof T]: T[k] extends boolean | string | number | bigint | Date
    ? never
    : true;
};

// export type TEnumerable<T> = T | Array<T>;
export type TEnumerable<T> = Array<T>;

export type TSortType<T = unknown> = {
  [k in keyof T]?: T[k] extends boolean | string | number | bigint | Date
    ? TSortOrder
    : never;
};

export type TSortOrder = 'asc' | 'desc';

export type TQueryMode = 'default' | 'insensitive';

export type TBooleanFilterInput = {
  equals?: boolean;
  // not?: TBooleanFilterInput | boolean;
  not?: TBooleanFilterInput;
};

export type TStringFilterInput = {
  equals?: string;
  in?: TEnumerable<string>;
  notIn?: TEnumerable<string>;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: TQueryMode;
  // not?: Omit<TStringFilterInput, 'mode'> | string;
  not?: Omit<TStringFilterInput, 'mode' | 'not'>;
};

export type TStringNullableFilterInput = {
  equals?: string | null;
  in?: TEnumerable<string> | null;
  notIn?: TEnumerable<string> | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: TQueryMode;
  not?: Omit<TStringNullableFilterInput, 'mode'> | string | null;
};

export type TJsonFilterInput = {
  path: string[];
  equals?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  string_contains: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  array_contains?: string[] | Record<string, unknown>[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  array_starts_with?: string[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  array_ends_with?: string[];
};

export type TIntFilterInput = {
  equals?: number;
  in?: TEnumerable<number>;
  notIn?: TEnumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TIntFilterInput, 'not'>;
};

export type TIntNullableFilterInput = {
  equals?: number | null;
  in?: TEnumerable<number> | null;
  notIn?: TEnumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TIntNullableFilterInput, 'not'>;
};

export type TFloatFilterInput = {
  equals?: number;
  in?: TEnumerable<number>;
  notIn?: TEnumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TFloatFilterInput, 'not'>;
};

export type TFloatNullableFilterInput = {
  equals?: number | null;
  in?: TEnumerable<number> | null;
  notIn?: TEnumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: Omit<TFloatNullableFilterInput, 'not'>;
};

export type TBigIntFilterInput = {
  equals?: number;
  in?: TEnumerable<bigint>;
  notIn?: TEnumerable<bigint>;
  lt?: bigint;
  lte?: bigint;
  gt?: bigint;
  gte?: bigint;
  not?: Omit<TBigIntFilterInput, 'not'>;
};

export type TBigIntNullableFilterInput = {
  equals?: number | null;
  in?: TEnumerable<bigint> | null;
  notIn?: TEnumerable<bigint> | null;
  lt?: bigint;
  lte?: bigint;
  gt?: bigint;
  gte?: bigint;
  not?: Omit<TBigIntNullableFilterInput, 'not'>;
};

export type TDateTimeFilterInput = {
  // equals?: Date | string;
  equals?: Date;
  // in?: TEnumerable<Date> | TEnumerable<string>;
  in?: TEnumerable<Date>;
  // notIn?: TEnumerable<Date> | TEnumerable<string>;
  notIn?: TEnumerable<Date>;
  // lt?: Date | string;
  lt?: Date;
  // lte?: Date | string;
  lte?: Date;
  // gt?: Date | string;
  gt?: Date;
  // gte?: Date | string;
  gte?: Date;
  // not?: TDateTimeFilterInput | Date | string;
  not?: Omit<TDateTimeFilterInput, 'not'>;
};

export type TDateTimeNullableFilterInput = {
  equals?: Date | string | null;
  in?: TEnumerable<Date> | TEnumerable<string> | null;
  notIn?: TEnumerable<Date> | TEnumerable<string> | null;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: TDateTimeNullableFilterInput | Date | string | null;
};

export type TEnumFilterInput<T> = {
  equals?: T;
  in?: TEnumerable<T>;
  notIn?: TEnumerable<T>;
  not?: TEnumFilterInput<T> | T;
};

export type TFindManyEntity = Record<
  string,
  boolean | string | number | bigint | Date
>;

export type TFindManyInput<TEntity = TFindManyEntity> = {
  [k in keyof TEntity]: TEntity[k] extends boolean
    ? TBooleanFilterInput
    : TEntity[k] extends string
      ? TStringFilterInput
      : TEntity[k] extends number
        ? TIntFilterInput | TFloatFilterInput
        : TEntity[k] extends bigint
          ? TBigIntFilterInput
          : TEntity[k] extends Date
            ? TDateTimeFilterInput
            : never;
};

export type TFindManyDto<TEntity = TFindManyEntity> = {
  [k in keyof TEntity]: TEntity[k] extends boolean
    ? TBooleanFilterInput
    : TEntity[k] extends string
      ? TStringFilterInput
      : TEntity[k] extends number
        ? TIntFilterInput | TFloatFilterInput
        : TEntity[k] extends bigint
          ? TBigIntFilterInput
          : TEntity[k] extends Date
            ? TDateTimeFilterInput
            : never;
};

export type TPaginationInput = {
  page?: number;
  docsByPage?: number;
};

export type TPaginationDto = {
  skip: number;
  take: number;
};
