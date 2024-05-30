import { ZodEffects, ZodObject, ZodPipeline } from 'zod';

import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ZodValidationPipe implements PipeTransform {
  constructor(
    private schema: ZodObject<any> | ZodEffects<any> | ZodPipeline<any, any>,
  ) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (error) {
      throw new BadRequestException(`Validation failed ${error}`);
    }
  }
}
