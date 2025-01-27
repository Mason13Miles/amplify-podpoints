"use client"

import Link from "next/link"
import { Button } from "../../components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Save Time & Discover More with{" "}
            <span className="text-blue-gray-600">PodPoints</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get AI-powered summaries of your favorite podcasts, highlighting exactly what matters to you.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}