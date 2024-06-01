import * as keycloak from '@pulumi/keycloak';

export type TUserInput = Pick<
  keycloak.UserArgs,
  | 'realmId'
  | 'username'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'initialPassword'
  | 'emailVerified'
>;

export const usersFactory = (users: TUserInput[]) =>
  users.map(
    ({
      realmId,
      username,
      email,
      firstName,
      lastName,
      initialPassword,
      emailVerified,
    }) =>
      new keycloak.User(`${username}`, {
        realmId,
        username,
        enabled: true,
        email,
        firstName,
        lastName,
        initialPassword,
        emailVerified,
      }),
  );
