'use client'

import { Button } from '@mantine/core'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

import LogoAffinidi from '@public/images/logo-affinidi.svg'

export function LoginButton () {
  const clientLogin = () => signIn('affinidi', { callbackUrl: process.env.NEXT_PUBLIC_HOST })

  return (
    <Button variant="primary" onClick={clientLogin}>
      <Image src={LogoAffinidi} alt="logo affinidi" />
      Affinidi Login
    </Button>
  )
}
