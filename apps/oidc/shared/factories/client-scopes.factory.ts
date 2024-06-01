import * as keycloak from '@pulumi/keycloak';

export type TClientScopeInput = Pick<
  keycloak.openid.ClientScopeArgs,
  'realmId' | 'name' | 'description'
>;

export const clientScopesFactory = (clientScopes: TClientScopeInput[]) =>
  clientScopes.map(({ realmId, name, description }) => {
    return new keycloak.openid.ClientScope(`${name}`, {
      realmId,
      name,
      description,
      includeInTokenScope: false,
    });
  });
