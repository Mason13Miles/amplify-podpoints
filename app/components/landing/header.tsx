"use client";

import { Headphones } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import PricingButton from "./pricingButton";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Header() {
  // const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="flex h-16 w-full items-center px-4">
        {/* Logo on the far left */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Headphones className="h-6 w-6 text-blue-gray-600" />
          <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
        </Link>

        {/* Navigation menu updates based on authentication */}
        <nav className="flex items-center space-x-4 ml-auto">
           {/* (
           
            <>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/settings">Settings</Link>
              </Button>
              <Button variant="destructive" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : ( */}

            <>
              <PricingButton />
              <Button variant="ghost" asChild>
                <Link href="/subscriptions">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/create">Get Started</Link>
              </Button>
            </>
          
        </nav>
      </div>
    </header>
  );
}
