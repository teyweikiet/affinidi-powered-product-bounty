import { useFetchUserInfoQuery } from './useFetchUserInfoQuery'

export function useAuthentication () {
  const { data, isFetchedAfterMount, status } = useFetchUserInfoQuery()
  return {
    isLoading: status === 'loading',
    isAuthenticated: status === 'success',
    isFetchedAfterMount,
    userId: data?.userId,
    user: data?.user
  }
}
