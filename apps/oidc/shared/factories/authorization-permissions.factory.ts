import * as keycloak from '@pulumi/keycloak';

export type TAuthorizationPermissionsInput = Pick<
  keycloak.openid.ClientAuthorizationPermissionArgs,
  | 'name'
  | 'realmId'
  | 'resourceServerId'
  | 'resources'
  | 'policies'
  | 'scopes'
  | 'type'
>;

export const authorizationPermissionsFactory = (
  permissions: TAuthorizationPermissionsInput[],
) =>
  permissions.map(
    ({ name, realmId, resourceServerId, resources, policies, scopes, type }) =>
      new keycloak.openid.ClientAuthorizationPermission(`${name}`, {
        name,
        realmId,
        resourceServerId,
        type,
        decisionStrategy: 'UNANIMOUS',
        resources,
        policies,
        scopes,
      }),
  );
