import * as fakerJs from '@faker-js/faker'
import { useFetchUserInfoQuery } from './useFetchUserInfoQuery'
import { useMemo } from 'react'

export function useFaker () {
  const { isLoading, data } = useFetchUserInfoQuery()

  const faker = useMemo(() => {
    const userLocale = fakerJs[data?.user?.languageCode] ?? fakerJs[data?.user?.countryCode?.toLowerCase()]

    return new fakerJs.Faker({
      locale: userLocale
        ? [userLocale, fakerJs.en, fakerJs.base]
        : [fakerJs.en, fakerJs.base]
    })
  }, [data?.user?.languageCode, data?.user?.countryCode])

  return {
    isLoading,
    faker
  }
}
