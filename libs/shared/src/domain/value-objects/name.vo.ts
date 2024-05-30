import { ConflictError } from '../errors/conflict.error';
import { NameRegex } from '../regex';
import { AbstractValueObject } from './value-object.abstract';

export class NameValueObject extends AbstractValueObject<string> {
  constructor(protected readonly _value: string) {
    super();

    if (!this.isValidate(_value))
      throw new ConflictError(`"${_value}" does not match name`);
  }

  get value(): string {
    return this._value;
  }

  protected isValidate(value: string): boolean {
    return NameRegex.test(value);
  }
}
