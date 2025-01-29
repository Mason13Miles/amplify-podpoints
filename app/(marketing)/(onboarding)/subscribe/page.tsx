import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Button variant="ghost" asChild>
        <Link href="/paywall">subscribe</Link>
      </Button>

      <Button variant="ghost" asChild>
        <Link href="/subscriptions">Continue with free</Link>
      </Button>
    </div>
  )
}
export default page