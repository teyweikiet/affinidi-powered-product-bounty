import { PROVIDER_ATTRIBUTES_KEY, provider } from './authProvider'
import locales from '@lib/locales.json'

export const authOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  providers: [provider],
  callbacks: {
    // checks whether user is allowed to sign in
    async signIn ({ account }) {
      return Boolean(
        account?.provider === provider.id &&
          account.access_token &&
          account.id_token
      )
    },
    // "account" and "profile" are only passed the first time this callback is called on a new session, after the user signs in
    // this defines how JWT is generated and is then used in session() callback as "token"
    async jwt ({ token, account, profile }) {
      const profileItems = profile?.[PROVIDER_ATTRIBUTES_KEY]
      if (profile && profileItems) {
        const { type, did, ...data } = profile.custom?.reduce((obj, item) => ({ ...obj, ...item }), {})
        const key = data?.country?.toLowerCase().replace(/[^\p{L}\p{M}]/gu, '')
        if (locales[key]) {
          data.countryCode = locales[key].Code
          data.languageCode = locales[key].Language
        }
        const user = {
          id: did,
          ...data
        }
        token = {
          ...token,
          user,
          ...(did && { userId: did })
        }
      }

      if (account) {
        token = {
          ...token,
          ...(account?.access_token && { accessToken: account.access_token }),
          ...(account?.id_token && { idToken: account.id_token })
        }
      }

      return token
    },
    // session is persisted as an HttpOnly cookie
    async session ({ session, token }) {
      console.log('authOptions session token: ', JSON.stringify(token))
      return {
        ...session,
        ...(token.user && { user: { ...session.user, ...token.user } }),
        ...(token.accessToken && { accessToken: token.accessToken }),
        ...(token.idToken && { idToken: token.idToken }),
        ...(token.userId && { userId: token.userId })
      }
    }
  }
}
