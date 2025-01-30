"use client";

import { Headphones, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import PricingButton from "./pricingButton";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="flex h-16 w-full items-center px-4 justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Headphones className="h-6 w-6 text-blue-gray-600" />
          <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
        </Link>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden sm:flex items-center space-x-4">
          <PricingButton />
          <Button variant="ghost" asChild className="min-w-[100px]">
            <Link href="/subscriptions">Sign In</Link>
          </Button>
          <Button asChild className="min-w-[120px]">
            <Link href="/create">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle Button (Hamburger Menu) */}
        <button
          className="sm:hidden text-blue-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden flex flex-col items-center space-y-3 py-4 border-t">
          <PricingButton />
          <Button variant="ghost" asChild className="w-3/4">
            <Link href="/subscriptions">Sign In</Link>
          </Button>
          <Button asChild className="w-3/4">
            <Link href="/create">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

