import * as keycloak from '@pulumi/keycloak';

export type TClientInput = Pick<
  keycloak.openid.ClientArgs,
  | 'name'
  | 'clientId'
  | 'realmId'
  | 'accessType'
  | 'validRedirectUris'
  | 'webOrigins'
  | 'standardFlowEnabled'
  | 'implicitFlowEnabled'
  | 'directAccessGrantsEnabled'
  | 'serviceAccountsEnabled'
  | 'oauth2DeviceAuthorizationGrantEnabled'
  | 'frontchannelLogoutEnabled'
  | 'backchannelLogoutSessionRequired'
  | 'loginTheme'
  | 'pkceCodeChallengeMethod'
  | 'clientSecret'
> &
  Partial<
    Pick<
      keycloak.openid.ClientArgs,
      | 'authorization'
      | 'baseUrl'
      | 'rootUrl'
      | 'validPostLogoutRedirectUris'
      | 'clientAuthenticatorType'
    >
  >;

export const clientsFactory = (clients: TClientInput[]) =>
  clients.map(
    ({
      name,
      clientId,
      realmId,
      accessType,
      authorization,
      clientAuthenticatorType,
      baseUrl,
      rootUrl,
      validRedirectUris,
      validPostLogoutRedirectUris,
      webOrigins,
      standardFlowEnabled,
      implicitFlowEnabled,
      directAccessGrantsEnabled,
      serviceAccountsEnabled,
      oauth2DeviceAuthorizationGrantEnabled,
      frontchannelLogoutEnabled,
      backchannelLogoutSessionRequired,
      loginTheme,
      pkceCodeChallengeMethod,
    }) =>
      new keycloak.openid.Client(String(name), {
        name,
        clientId,
        realmId,
        enabled: true,
        accessType,
        authorization,
        clientAuthenticatorType,
        baseUrl,
        rootUrl,
        validRedirectUris,
        validPostLogoutRedirectUris,
        webOrigins,
        standardFlowEnabled,
        implicitFlowEnabled,
        directAccessGrantsEnabled,
        serviceAccountsEnabled,
        oauth2DeviceAuthorizationGrantEnabled,
        frontchannelLogoutEnabled,
        backchannelLogoutSessionRequired,
        loginTheme,
        pkceCodeChallengeMethod,
      }),
  );
