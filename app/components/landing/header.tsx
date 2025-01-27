"use client"

import { Headphones } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
        <Headphones className="h-6 w-6 text-blue-gray-600" />
        <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
      </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="#pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/onboarding">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}