import * as keycloak from '@pulumi/keycloak';

export type TAudienceProtocolMapper = Pick<
  keycloak.openid.AudienceProtocolMapperArgs,
  'realmId' | 'name' | 'clientScopeId' | 'includedClientAudience'
>;

export const audienceProtocolMapperFactory = (
  audienceProtocolMappers: TAudienceProtocolMapper[],
) =>
  audienceProtocolMappers.map(
    ({ realmId, name, includedClientAudience, clientScopeId }) => {
      return new keycloak.openid.AudienceProtocolMapper(`${name}`, {
        realmId,
        name,
        includedClientAudience,
        clientScopeId,
        addToAccessToken: true,
      });
    },
  );
