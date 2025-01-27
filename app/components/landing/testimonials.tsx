"use client"

import { Star } from "lucide-react"
import { Card } from "../../components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "PodPoints has transformed how I consume podcasts. I save hours every week by focusing on the content that matters most to me.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "The AI summaries are incredibly accurate. It's like having a personal podcast assistant that knows exactly what I'm interested in.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "As someone who listens to dozens of podcasts weekly, PodPoints has become an essential tool for staying up-to-date efficiently.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Loved by Podcast Enthusiasts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of listeners who are getting more value from their favorite podcasts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-gray-600 text-blue-gray-600" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}