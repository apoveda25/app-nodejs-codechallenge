import * as keycloak from '@pulumi/keycloak';

export type TResourcesInput = Pick<
  keycloak.openid.ClientAuthorizationResourceArgs,
  'name' | 'realmId' | 'resourceServerId' | 'scopes' | 'ownerManagedAccess'
>;

export const resourcesFactory = (resources: TResourcesInput[]) =>
  resources.map(
    ({ realmId, resourceServerId, name, scopes, ownerManagedAccess }) =>
      new keycloak.openid.ClientAuthorizationResource(`${name}`, {
        name,
        realmId,
        resourceServerId,
        scopes,
        ownerManagedAccess,
      }),
  );
