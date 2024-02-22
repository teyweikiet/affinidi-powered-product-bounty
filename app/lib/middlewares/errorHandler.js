import { NextResponse } from 'next/server'
import { ApiError } from '../apiError'

export const errorHandler = (fn) => async (req) => {
  try {
    return await fn(req)
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          error: {
            code: error.code,
            message: error.message,
            context: error.context
          }
        },
        {
          status: error.httpStatusCode
        }
      )
    } else {
      console.error('Unhandled error:', error)
      return NextResponse.json(
        {
          code: 'INTERNAL_SERVER_ERROR'
        },
        {
          status: 500
        }
      )
    }
  }
}
