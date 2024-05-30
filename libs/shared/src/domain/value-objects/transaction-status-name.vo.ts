import { ETransactionStatusName } from '../enums';
import { ConflictError } from '../errors';
import { AbstractValueObject } from './value-object.abstract';

export class TransactionStatusNameValueObject extends AbstractValueObject<ETransactionStatusName> {
  constructor(protected readonly _value: ETransactionStatusName) {
    super();

    if (!this.isValidate(_value))
      throw new ConflictError(
        `"${_value}" does not match transaction status name`,
      );
  }

  get value(): ETransactionStatusName {
    return this._value;
  }

  protected isValidate(value: ETransactionStatusName): boolean {
    return Object.values(ETransactionStatusName).includes(value);
  }
}
