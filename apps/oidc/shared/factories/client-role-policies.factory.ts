import * as keycloak from '@pulumi/keycloak';

export type TClientRolePoliciesInput = Pick<
  keycloak.openid.ClientRolePolicyArgs,
  'realmId' | 'name' | 'resourceServerId' | 'roles'
>;

export const clientRolePoliciesFactory = (
  clientRolePolicies: TClientRolePoliciesInput[],
) =>
  clientRolePolicies.map(({ realmId, name, resourceServerId, roles }) => {
    return new keycloak.openid.ClientRolePolicy(`${name}`, {
      realmId,
      name,
      resourceServerId,
      roles,
      type: 'client',
      decisionStrategy: 'UNANIMOUS',
      logic: 'POSITIVE',
    });
  });
