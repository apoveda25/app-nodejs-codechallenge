export type TTransactionArgs<TCallback> = (tx: TCallback) => Promise<unknown>;

export interface ITransactionRepository<TCallback> {
  transaction(callback: TTransactionArgs<TCallback>): Promise<unknown>;
}
