import {
  KeycloakConnectConfig,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';

import { ConfigService } from '@nestjs/config';

export const keycloakConfig = (
  configService: ConfigService,
): KeycloakConnectConfig => ({
  authServerUrl: configService.getOrThrow<string>('KEYCLOAK_URL'), // might be http://localhost:8080/auth for older keycloak versions
  realm: configService.getOrThrow<string>('KEYCLOAK_REALM'),
  clientId: configService.getOrThrow<string>('KEYCLOAK_CLIENT_ID'),
  secret: configService.getOrThrow<string>('KEYCLOAK_SECRET'),
  policyEnforcement: PolicyEnforcementMode.ENFORCING, // optional
  tokenValidation: TokenValidation.ONLINE, // optional
  public: false,
  bearerOnly: true,
});
