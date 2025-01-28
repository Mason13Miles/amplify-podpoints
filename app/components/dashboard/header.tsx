"use client";

import { Headphones } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Header() {

  const { signOut } = useAuthenticator();

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="flex h-16 w-full items-center px-4 justify-between">
        {/* Logo on the far left */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Headphones className="h-6 w-6 text-blue-gray-600" />
          <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
        </Link>

        {/* Navigation menu on the far right */}
        <nav className="flex items-center space-x-4 ml-auto">
          <Button variant="ghost" asChild>
            <Link href="#pricing">Admin</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Menu</Link>
          </Button>
          <button onClick={signOut}>Sign out</button>
        </nav>
      </div>
    </header>
  );
}
