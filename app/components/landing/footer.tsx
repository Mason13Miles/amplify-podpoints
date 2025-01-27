"use client"

import { Headphones } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Support: [
    { name: "Help Center", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact", href: "#" }
  ],
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Headphones className="h-6 w-6 text-blue-gray-600" />
              <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Transform your podcast listening experience with AI-powered summaries tailored to your interests.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} PodPoints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}