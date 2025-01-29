import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <Button variant="ghost" asChild>
    <Link href="/favorites">Continue</Link>
  </Button>
  )
}

export default page