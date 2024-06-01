import * as keycloak from '@pulumi/keycloak';

export type TRealmInput = Pick<
  keycloak.RealmArgs,
  'realm' | 'verifyEmail' | 'registrationAllowed'
>;

export const realmsFactory = (realms: TRealmInput[]) =>
  realms.map(({ realm, verifyEmail, registrationAllowed }) => {
    const realmString = `${realm}`;
    const realmLower = realmString.toLowerCase();
    const realmCapitalize =
      realmString.charAt(0).toUpperCase() + realmString.slice(1);

    return new keycloak.Realm(realmLower, {
      realm: realmLower,
      displayName: `${realmCapitalize} realm`,
      displayNameHtml: `<b>${realmCapitalize} realm</b>`,
      enabled: true,
      loginWithEmailAllowed: true,
      rememberMe: true,
      verifyEmail,
      registrationAllowed,
      resetPasswordAllowed: true,
      internationalization: {
        defaultLocale: 'es',
        supportedLocales: ['en', 'es'],
      },
      loginTheme: 'base',
      accountTheme: 'base',
      passwordPolicy:
        'upperCase(1) and length(8) and forceExpiredPasswordChange(365) and notUsername',
      securityDefenses: {
        bruteForceDetection: {
          failureResetTimeSeconds: 43200,
          maxFailureWaitSeconds: 900,
          maxLoginFailures: 30,
          minimumQuickLoginWaitSeconds: 60,
          permanentLockout: false,
          quickLoginCheckMilliSeconds: 1000,
          waitIncrementSeconds: 60,
        },
        headers: {
          contentSecurityPolicy:
            "frame-src 'self'; frame-ancestors 'self'; object-src 'none';",
          contentSecurityPolicyReportOnly: '',
          strictTransportSecurity: 'max-age=31536000; includeSubDomains',
          xContentTypeOptions: 'nosniff',
          xFrameOptions: 'DENY',
          xRobotsTag: 'none',
          xXssProtection: '1; mode=block',
        },
      },
      // smtpServer: {
      //   auth: {
      //     password: 'password',
      //     username: 'tom',
      //   },
      //   from: 'example@example.com',
      //   host: 'smtp.example.com',
      // },
      // sslRequired: 'external',
      // webAuthnPolicy: {
      //   relyingPartyEntityName: 'Example',
      //   relyingPartyId: 'keycloak.example.com',
      //   signatureAlgorithms: ['ES256', 'RS256'],
      // },
    });
  });
