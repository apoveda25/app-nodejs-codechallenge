import * as keycloak from '@pulumi/keycloak';
import * as pulumi from '@pulumi/pulumi';

import { ERoles } from '../shared/enums';
import {
  rolesFactory,
  userRolesFactory,
  usersFactory,
} from '../shared/factories';

export const createAdminRoot = ({
  realmId,
}: {
  realmId: pulumi.Output<string>;
}) => {
  /**
   * user for yape
   */
  const userForCreate = {
    realmId,
    username: 'yapeadmin',
    email: 'admin@yape.com',
    firstName: 'Yape',
    lastName: 'Admin',
    initialPassword: {
      value: 'Secret123',
      temporary: false,
    },
    emailVerified: true,
  };
  const [user] = usersFactory([userForCreate]);

  /**
   * roles for yape
   */
  const defaultRolesName = 'default-roles-yape';
  const defaultRole = keycloak.getRoleOutput({
    realmId,
    name: defaultRolesName,
  });
  const [role] = rolesFactory([{ name: ERoles.ADMIN_ROOT, realmId }]);

  /**
   * user roles for yape
   */
  const userRoleForCreate = {
    realmId,
    userId: user.id,
    roleIds: [role.id, defaultRole.id],
    name: `${ERoles.ADMIN_ROOT}-${userForCreate.username}`,
  };
  const [userRole] = userRolesFactory([userRoleForCreate]);

  return {
    userAdminRoot: user,
    roleAdminRoot: role,
    defaultRolesBigpods: defaultRole,
    userRoleAdminRoot: userRole,
  };
};
