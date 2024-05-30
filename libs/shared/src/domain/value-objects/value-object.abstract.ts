export abstract class AbstractValueObject<T> {
  protected abstract readonly _value: T;

  abstract get value(): T;

  protected abstract isValidate(value: T): boolean;
}
