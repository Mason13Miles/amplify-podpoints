import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <Button variant="ghost" asChild>
    <Link href="/subscriptions">Subscribe</Link>
  </Button>
  )
}

export default page