import * as keycloak from '@pulumi/keycloak';
import * as pulumi from '@pulumi/pulumi';

import { ERoles } from '../shared/enums';
import {
  rolesFactory,
  userRolesFactory,
  usersFactory,
} from '../shared/factories';

export const createAdmin = ({
  realmId,
}: {
  realmId: pulumi.Output<string>;
}) => {
  /**
   * user for yape
   */
  const usersForCreate = [
    {
      realmId,
      username: 'apoveda25',
      email: 'alfpovsistemas@gmail.com',
      firstName: 'Alfredo',
      lastName: 'Poveda',
      initialPassword: {
        value: 'Secret123',
        temporary: false,
      },
      emailVerified: true,
    },
  ];
  const users = usersFactory(usersForCreate);

  /**
   * roles for yape
   */
  const defaultRolesBigpodsName = 'default-roles-yape';
  const defaultRolesBigpods = keycloak.getRoleOutput({
    realmId,
    name: defaultRolesBigpodsName,
  });
  const [role] = rolesFactory([{ name: ERoles.ADMIN, realmId }]);

  /**
   * user roles for yape
   */
  const userRolesForCreate = users.flatMap((user, i) => {
    const userForCreate = usersForCreate.at(i);

    return [
      {
        realmId,
        userId: user.id,
        roleIds: [role.id, defaultRolesBigpods.id],
        name: `${ERoles.ADMIN}-${userForCreate ? userForCreate.username : ''}`,
      },
    ];
  }, Infinity);
  const userRoles = userRolesFactory(userRolesForCreate);

  return {
    usersAdmin: users,
    roleAdmin: role,
    userRolesAdmin: userRoles,
  };
};
