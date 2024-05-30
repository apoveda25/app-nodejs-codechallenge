import { ExecutionResult } from 'graphql';
import { join } from 'node:path';

import { HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MercuriusDriverConfig } from '@nestjs/mercurius';

export const graphqlMercuriusConfig: (
  configService: ConfigService,
) => MercuriusDriverConfig = (configService: ConfigService) => {
  return {
    sortSchema: true,
    transformAutoSchemaFile: true,
    autoSchemaFile: join(process.cwd(), 'transaction-api.schema.graphql'),
    path: configService.getOrThrow<string>('TRANSACTION_APP_API_PATH'),
    queryDepth: 7,
    errorFormatter: (
      execution: ExecutionResult & Required<Pick<ExecutionResult, 'errors'>>,
    ) => ({
      statusCode: execution.errors
        .at(0)
        .message.includes('Graphql validation error')
        ? HttpStatus.BAD_REQUEST
        : HttpStatus.INTERNAL_SERVER_ERROR,
      response: execution,
    }),
  };
};
