import { getServerSession } from 'next-auth'

import { authOptions } from '@lib/auth/authOptions'
import { errorHandler } from '@lib/middlewares/errorHandler'
import { ApiError } from '@lib/apiError'
import { NextResponse } from 'next/server'

export async function _handler (req) {
  const session = await getServerSession(authOptions)
  console.log('auth session: ', JSON.stringify(session))
  const accessToken = session?.accessToken
  const userId = session?.userId
  const user = session?.user

  if (!accessToken || !userId) {
    throw new ApiError({
      code: 'NOT_AUTHENTICATED',
      message: 'Access token is not present in the cookies',
      httpStatusCode: 401
    })
  }

  return NextResponse.json(
    { userId, user },
    {
      status: 200
    }
  )
}

const GET = errorHandler(_handler)

export {
  GET
}
