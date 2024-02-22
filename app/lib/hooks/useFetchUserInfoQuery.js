import { useQuery } from '@tanstack/react-query'

export const useFetchUserInfoQuery = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/get-user-info`, {
        method: 'GET'
      })
      if (!response.ok) {
        throw new Error('Unable to get user info. Are you authenticated?')
      }
      return await response.json()
    },
    retry: false
  })
}
