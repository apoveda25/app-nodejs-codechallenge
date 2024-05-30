import { PositiveIntResolver } from 'graphql-scalars';

import { Field, InputType } from '@nestjs/graphql';
import { TPaginationInput } from '../../domain/types';
import { PAGINATION_INPUT_DEFAULT } from '../dtos';

@InputType()
export class PaginationInput implements TPaginationInput {
  @Field(() => PositiveIntResolver, {
    nullable: true,
    defaultValue: PAGINATION_INPUT_DEFAULT.page,
    description: 'Page number. Min 1 page.',
  })
  page?: number;

  @Field(() => PositiveIntResolver, {
    nullable: true,
    defaultValue: PAGINATION_INPUT_DEFAULT.docsByPage,
    description: 'Docs by page. Max 50 per page.',
  })
  docsByPage?: number;
}
