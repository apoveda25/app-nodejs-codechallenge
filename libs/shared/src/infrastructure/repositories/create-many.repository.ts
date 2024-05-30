export type TCreateManyArgs<TData> = {
  data: TData[];
};

export interface ICreateManyRepository<TData> {
  createMany(args: TCreateManyArgs<TData>, tx?: unknown): Promise<TData[]>;
}
