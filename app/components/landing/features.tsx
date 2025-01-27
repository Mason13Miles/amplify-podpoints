"use client"

import { Clock, Mail, FastForward, Bookmark, Hash, Search } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "Email Summaries",
    description: "Get concise summaries of your subscribed podcasts delivered straight to your inbox"
  },
  {
    icon: FastForward,
    title: "Skip the Fluff",
    description: "Save time by focusing on the content that matters most to you"
  },
  {
    icon: Clock,
    title: "Smart Timestamps",
    description: "Jump directly to the most engaging sections based on listener data"
  },
  {
    icon: Search,
    title: "Easy Discovery",
    description: "Find new podcasts that match your interests and listening habits"
  },
  {
    icon: Hash,
    title: "Topics to Follow",
    description: "Stay updated on specific topics across multiple podcasts"
  },
  {
    icon: Bookmark,
    title: "Custom Highlights",
    description: "AI identifies and marks content based on your preferences"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Everything You Need to Stay Informed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your podcast listening experience with our powerful features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-background rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-blue-gray-600/10 text-blue-gray-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}