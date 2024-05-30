import { ConflictError } from '../errors';
import { UUIDRegex } from '../regex';
import { AbstractValueObject } from './value-object.abstract';

export class UUID4ValueObject extends AbstractValueObject<string> {
  constructor(protected readonly _value: string) {
    super();

    if (!this.isValidate(_value))
      throw new ConflictError(`"${_value}" does not match UUIDv4`);
  }

  get value(): string {
    return this._value;
  }

  protected isValidate(value: string): boolean {
    return UUIDRegex.test(value);
  }
}
