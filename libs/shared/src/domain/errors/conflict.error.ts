import { HttpStatus } from '@nestjs/common';
import { BusinessError, IBusinessError } from './business.error';

export class ConflictError extends BusinessError implements IBusinessError {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ConflictError);
    }

    this.name = ConflictError.name;
  }
}
