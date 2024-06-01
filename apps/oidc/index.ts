import * as pulumi from '@pulumi/pulumi';
import { EResources, EScopes } from './shared/enums';
import {
  audienceProtocolMapperFactory,
  authorizationPermissionsFactory,
  clientDefaultScopesFactory,
  clientRolePoliciesFactory,
  clientScopesFactory,
  clientsFactory,
  realmsFactory,
  resourcesFactory,
  scopesFactory,
} from './shared/factories';
import { createAdmin, createAdminRoot } from './users';

/**
 * @description realm for yape
 */
const [realmYapeAdmin] = realmsFactory([
  { realm: 'yape', verifyEmail: true, registrationAllowed: false },
]);

export const realmId = realmYapeAdmin.id;

/**
 * @description clients for yape
 */
const baseUrlKeycloak = 'http://localhost:8083';
const YAPE_GUI_API_CLIENT_ID = 'yape-gui-api';
const YAPE_GUI_API_CLIENT_SECRET =
  'ZXNjeAAAAAEAAAEA0R+3/uPR0wk2NMPtis//4LE0rLJ82H7mDiFZQQ1vuxxAy9co8BD0IfCFOO/mgj04nimctwRl6iG4gx7C7ftVRQ==';
const YAPE_TRANSACTION_CLIENT_ID = 'yape-trasaction-api';
const YAPE_TRANSACTION_CLIENT_SECRET =
  'ZXNjeAAAAAEAAAEA8YjQfUOph6AcckHDkuv0F89j8gK2KNlkC5Nkbf5iPNt6qib1eEv7AKWusAdz9rjPydPQQThC7W8kH1tcYNRaxQ==';
const clientsWithResourcesForCreate = [
  {
    name: YAPE_TRANSACTION_CLIENT_ID,
    clientId: YAPE_TRANSACTION_CLIENT_ID,
    realmId,
    accessType: 'CONFIDENTIAL',
    authorization: {
      policyEnforcementMode: 'ENFORCING',
      decisionStrategy: 'UNANIMOUS',
      allowRemoteResourceManagement: true,
    },
    clientAuthenticatorType: 'client-secret',
    rootUrl: `${baseUrlKeycloak}/${YAPE_TRANSACTION_CLIENT_ID}`,
    validRedirectUris: [],
    webOrigins: ['*'],
    standardFlowEnabled: false,
    implicitFlowEnabled: false,
    directAccessGrantsEnabled: true,
    serviceAccountsEnabled: true,
    oauth2DeviceAuthorizationGrantEnabled: false,
    frontchannelLogoutEnabled: false,
    backchannelLogoutSessionRequired: true,
    loginTheme: 'keycloak',
    pkceCodeChallengeMethod: '',
    clientSecret: YAPE_TRANSACTION_CLIENT_SECRET,
  },
];
const clientsWithoutResourcesForCreate = [
  {
    name: YAPE_GUI_API_CLIENT_ID,
    clientId: YAPE_GUI_API_CLIENT_ID,
    realmId,
    accessType: 'CONFIDENTIAL',
    clientAuthenticatorType: 'client-secret',
    validRedirectUris: ['*'],
    webOrigins: ['*'],
    standardFlowEnabled: true,
    implicitFlowEnabled: false,
    directAccessGrantsEnabled: false,
    serviceAccountsEnabled: false,
    oauth2DeviceAuthorizationGrantEnabled: false,
    frontchannelLogoutEnabled: false,
    backchannelLogoutSessionRequired: true,
    loginTheme: 'keycloak',
    pkceCodeChallengeMethod: 'S256',
    clientSecret: YAPE_GUI_API_CLIENT_SECRET,
  },
];
const clientsWithResources = clientsFactory(clientsWithResourcesForCreate);
const clientsWithoutResources = clientsFactory(
  clientsWithoutResourcesForCreate,
);

export const clientsId = [
  ...clientsWithResources,
  ...clientsWithoutResources,
].map((client) =>
  pulumi.all([client.id, client.clientId]).apply((client) => client),
);

/**
 * @description scopes for yape
 */
const scopesNames = Object.values(EScopes);
const scopesNamesShort = scopesNames.map((scope) =>
  scope.split('-').slice(0, -1).join('-'),
);
const scopesForCreate = clientsWithResources.flatMap(
  (client) =>
    scopesNames.map((scope) => ({
      name: scope,
      realmId: client.realmId.apply((realmId) => realmId),
      resourceServerId: client.id.apply((id) => id),
    })),
  Infinity,
);
const scopes = scopesFactory(scopesForCreate);

export const scopesId = scopes.map((scope) => scope.id);

/**
 * @description resources for yape
 */
const resourcesNames = Object.values(EResources);
const resourcesNamesShort = resourcesNames.map((resource) =>
  resource.split('-').slice(0, -1).join('-'),
);
const resourcesForCreate = clientsWithResources.flatMap((client) =>
  resourcesNames.map((resource) => ({
    name: resource,
    realmId: client.realmId.apply((realmId) => realmId),
    resourceServerId: client.id.apply((id) => id),
    scopes: scopesNames,
    ownerManagedAccess: true,
  })),
);
const resources = resourcesFactory(resourcesForCreate);

export const resourcesId = resources.map((resource) => resource.id);

/**
 * @description users, roles and userRoles for yape
 */
export const {
  userAdminRoot,
  roleAdminRoot,
  defaultRolesBigpods,
  userRoleAdminRoot,
} = createAdminRoot({ realmId });

export const { usersAdmin, roleAdmin, userRolesAdmin } = createAdmin({
  realmId,
});

/**
 * @description clientRolePolicies for yape
 */
const clientRolePoliciesForCreate = resourcesNamesShort
  .flatMap((resource) => {
    return scopesNamesShort.map((scope) => {
      return {
        realmId,
        name: `${resource}-${scope}-policy`,
        roles: [{ id: roleAdminRoot.id, required: false }],
      };
    });
  }, Infinity)
  .map((rolePolicy) => {
    const isPolicyForRole = scopesNamesShort
      .filter(
        (scopeName) =>
          scopeName.includes('read') ||
          scopeName.includes('count') ||
          scopeName.includes('create-one') ||
          scopeName.includes('update-one'),
      )
      .some((scopeName) => new RegExp(scopeName).test(rolePolicy.name));

    return isPolicyForRole
      ? {
          ...rolePolicy,
          roles: [...rolePolicy.roles, { id: roleAdmin.id, required: false }],
        }
      : rolePolicy;
  })
  .flatMap((rolePolicy) => {
    return clientsWithResources.map((client) => ({
      ...rolePolicy,
      resourceServerId: client.id.apply((id) => id),
    }));
  }, Infinity);
const clientRolePolicies = clientRolePoliciesFactory(
  clientRolePoliciesForCreate,
);

export const clientRolePoliciesId = clientRolePolicies.map(
  (clientRolePolicy) => clientRolePolicy.id,
);

/**
 * @description authorization permissions for yape
 */
const authorizationPermissionsByScopesForCreate = resourcesNames
  .flatMap((resource, i) => {
    return scopesNames.map((scope, j) => ({
      name: `${resourcesNamesShort.at(i)}-${scopesNamesShort.at(j)}-permission`,
      realmId,
      resources: [resource],
      scopes: [scope],
      policies: [
        clientRolePoliciesId.at(i * scopes.length + j) as pulumi.Output<string>,
      ],
      type: 'scope',
    }));
  }, Infinity)
  .flatMap(
    (permission) =>
      clientsWithResources.map((client) => ({
        ...permission,
        resourceServerId: client.resourceServerId.apply(
          (resourceServerId) => resourceServerId,
        ),
      })),
    Infinity,
  );

const authorizationPermissions = authorizationPermissionsFactory(
  authorizationPermissionsByScopesForCreate,
);

export const authorizationPermissionsId = authorizationPermissions.map(
  (authorizationPermission) => authorizationPermission.id,
);

/**
 * @description create client scopes for mapping audience
 */
const clientScopesForCreate = clientsWithResources.map((client) =>
  pulumi
    .all([client.clientId, client.realmId])
    .apply(([clientId, realmId]) => ({
      name: `audience-${clientId}`,
      realmId,
      description: `OpenID Connect scope for add audience "${clientId}" to the access token`,
    })),
);

const clientScopes = clientScopesFactory(clientScopesForCreate);

export const clientScopesId = clientScopes.map((clientScope) => clientScope.id);

/**
 * @description create audience protocol mapper for mapping audience
 */
const audienceProtocolMappersForCreate = clientScopes.map(
  (clientScope, index) =>
    pulumi
      .all([
        clientScope.id,
        clientScope.name,
        clientScope.realmId,
        clientsWithResources.at(index)?.clientId as pulumi.Output<string>,
      ])
      .apply(([id, name, realmId, clientId]) => ({
        realmId,
        clientScopeId: id,
        name,
        includedClientAudience: clientId,
      })),
);

const audienceProtocolMappers = audienceProtocolMapperFactory(
  audienceProtocolMappersForCreate,
);

export const audienceProtocolMappersId = audienceProtocolMappers.map(
  (audienceProtocolMapper) => audienceProtocolMapper.id,
);

/**
 * @description create default scopes for clients with resources
 */
const DEFAULT_SCOPES = ['profile', 'email', 'roles', 'web-origins'];
const clientDefaultScopesForCreate = clientsWithoutResources.map((client) => {
  const clientScopeNames = pulumi
    .all(clientScopes.map((clientScope) => clientScope.name))
    .apply((clientScopeNames) => clientScopeNames.join(','));

  return pulumi
    .all([client.realmId, client.id, clientScopeNames])
    .apply(([realmId, id, clientScopeNames]) => ({
      realmId,
      clientId: id,
      defaultScopes: clientScopeNames.split(',').concat(DEFAULT_SCOPES),
    }));
});

const clientDefaultScopes = clientDefaultScopesFactory(
  clientDefaultScopesForCreate,
);

export const clientDefaultScopesId = clientDefaultScopes.map(
  (clientDefaultScope) => clientDefaultScope.id,
);
