import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsIP,
  IsNumber,
  IsString,
  IsUrl,
  validateSync,
} from 'class-validator';

class EnvironmentVariables {
  @IsString()
  ENVIRONMENT: string;

  @IsString()
  TRANSACTION_SERVICE_NAME: string;

  @IsString()
  TRANSACTION_API_NAME: string;

  @IsNumber()
  TRANSACTION_APP_API_PORT: number;

  @IsIP()
  TRANSACTION_APP_API_ADDRESS: string;

  @IsString()
  TRANSACTION_APP_API_PATH: string;

  @IsBoolean()
  TRANSACTION_APP_API_MASKED_ERRORS: boolean;

  @IsUrl({
    protocols: ['mysql'],
    require_tld: false,
    require_protocol: true,
  })
  DATABASE_URL: string;

  @IsUrl({
    require_tld: false,
    require_protocol: false,
  })
  QUEUE_URL: string;

  @IsUrl({
    protocols: ['https', 'http'],
    require_tld: false,
    require_protocol: true,
  })
  KEYCLOAK_URL: string;

  @IsString()
  KEYCLOAK_REALM: string;

  @IsString()
  KEYCLOAK_CLIENT_ID: string;

  @IsString()
  KEYCLOAK_SECRET: string;

  @IsString()
  I18N_FALLBACK_LANGUAGE: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
