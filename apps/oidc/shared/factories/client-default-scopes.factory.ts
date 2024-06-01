import * as keycloak from '@pulumi/keycloak';
import { randomUUID } from 'crypto';

export type TClientDefaultScopesInput = Pick<
  keycloak.openid.ClientDefaultScopesArgs,
  'realmId' | 'clientId' | 'defaultScopes'
>;

export const clientDefaultScopesFactory = (
  clientDefaultScopes: TClientDefaultScopesInput[],
) =>
  clientDefaultScopes.map(({ realmId, clientId, defaultScopes }) => {
    return new keycloak.openid.ClientDefaultScopes(randomUUID(), {
      realmId,
      clientId,
      defaultScopes,
    });
  });
