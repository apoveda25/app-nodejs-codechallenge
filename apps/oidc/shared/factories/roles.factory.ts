import * as keycloak from '@pulumi/keycloak';

export type TRoleInput = Pick<
  keycloak.RoleArgs,
  'name' | 'realmId' | 'description' | 'clientId'
>;

export const rolesFactory = (roles: TRoleInput[]) =>
  roles.map(
    ({ name, realmId, description, clientId }) =>
      new keycloak.Role(`${name}`, {
        realmId,
        name,
        description,
        clientId,
      }),
  );
