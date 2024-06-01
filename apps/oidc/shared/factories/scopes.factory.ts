import * as keycloak from '@pulumi/keycloak';

export type TScopesInput = Pick<
  keycloak.openid.ClientAuthorizationScopeArgs,
  'name' | 'realmId' | 'resourceServerId'
>;

export const scopesFactory = (resources: TScopesInput[]) =>
  resources.map(
    ({ realmId, resourceServerId, name }) =>
      new keycloak.openid.ClientAuthorizationScope(`${name}`, {
        name,
        realmId,
        resourceServerId,
        displayName: name,
      }),
  );
