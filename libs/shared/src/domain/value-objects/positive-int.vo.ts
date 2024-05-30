import { ConflictError } from '../errors/conflict.error';
import { AbstractValueObject } from './value-object.abstract';

export class PositiveIntValueObject extends AbstractValueObject<number> {
  constructor(protected readonly _value: number) {
    super();

    this._value = parseInt(_value.toString());

    if (!this.isValidate(_value))
      throw new ConflictError(`"${_value}" does not match positive value`);
  }

  get value(): number {
    return this._value;
  }

  protected isValidate(value: number): boolean {
    return typeof value === 'number' && value >= 0;
  }
}
