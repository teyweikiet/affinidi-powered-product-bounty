export const PROVIDER_ATTRIBUTES_KEY = 'custom'

export const provider = {
  id: 'affinidi',
  name: 'Affinidi',
  clientId: process.env.PROVIDER_CLIENT_ID,
  clientSecret: process.env.PROVIDER_CLIENT_SECRET,
  type: 'oauth',
  wellKnown: `${process.env.PROVIDER_ISSUER}/.well-known/openid-configuration`,
  authorization: {
    params: {
      prompt: 'login',
      scope: 'openid offline_access'
    }
  },
  client: {
    token_endpoint_auth_method: 'client_secret_post'
  },
  idToken: true,
  profile (profile) {
    const { type, did, ...data } = profile.custom?.reduce((obj, item) => ({ ...obj, ...item }), {})
    return {
      id: did,
      ...data
    }
  }
}
