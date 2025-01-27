"use client"

import { Check } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$7",
    description: "Perfect for casual podcast listeners",
    features: [
      "Custom summaries for up to 3 podcasts",
      "Email delivery",
      "Basic topic tracking",
      "7-day summary history",
      "Standard support"
    ]
  },
  {
    name: "Pro",
    price: "$15",
    description: "For podcast enthusiasts and power users",
    features: [
      "Custom summaries for unlimited podcasts",
      "Custom email configuration",
      "Advanced topic tracking",
      "30-day summary history",
      "Priority support",
      "Custom highlight rules",

    ]
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your podcast listening habits
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="p-8 flex flex-col h-full">
              <div className="mb-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-gray-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}