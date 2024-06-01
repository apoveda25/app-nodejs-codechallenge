import * as keycloak from '@pulumi/keycloak';

export type TUsersRolesInput = Pick<
  keycloak.UserRolesArgs,
  'realmId' | 'userId' | 'roleIds'
> & { name: string };

export const userRolesFactory = (userRoles: TUsersRolesInput[]) =>
  userRoles.map(
    ({ realmId, userId, roleIds, name }) =>
      new keycloak.UserRoles(`${name}`, {
        realmId,
        userId,
        roleIds,
      }),
  );
