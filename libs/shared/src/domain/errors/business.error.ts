import { HttpStatus } from '@nestjs/common';

export interface IBusinessError {
  readonly name: string;
  readonly message: string;
  readonly statusCode: HttpStatus;
}

export class BusinessError extends Error implements IBusinessError {
  readonly statusCode: HttpStatus;

  constructor(message: string, statusCode: HttpStatus) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BusinessError);
    }

    this.name = BusinessError.name;
    this.statusCode = statusCode;
  }
}
