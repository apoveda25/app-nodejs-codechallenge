import { plainToClass } from 'class-transformer';
import { IsIP, IsNumber, IsString, IsUrl, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsString()
  ENVIRONMENT: string;

  @IsString()
  ANTIFRAUD_SERVICE_NAME: string;

  @IsString()
  ANTIFRAUD_API_NAME: string;

  @IsNumber()
  ANTIFRAUD_API_PORT: number;

  @IsIP()
  ANTIFRAUD_API_ADDRESS: string;

  @IsUrl({
    require_tld: false,
    require_protocol: false,
  })
  QUEUE_URL: string;
}

export function validateEnvForAntifraudService(
  config: Record<string, unknown>,
) {
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
