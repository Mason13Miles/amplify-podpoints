"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 border-r p-4">
      <Accordion.Root type="single" collapsible className="space-y-2">
        {/* Subscriptions Section */}
        <Accordion.Item value="subscriptions">
          <Accordion.Trigger className="flex items-center justify-between w-full p-3 text-lg font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition">
            Subscriptions
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="pl-4 mt-2 space-y-2 text-gray-700">
            <Link href="/subscriptions/podcasts" className="block hover:underline">
              Podcasts
            </Link>
            <Link href="/subscriptions/newsletters" className="block hover:underline">
              Newsletters
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Explore Section */}
        <Accordion.Item value="explore">
          <Accordion.Trigger className="flex items-center justify-between w-full p-3 text-lg font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition">
            Explore
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="pl-4 mt-2 space-y-2 text-gray-700">
            <Link href="/explore/trending" className="block hover:underline">
              Trending
            </Link>
            <Link href="/explore/categories" className="block hover:underline">
              Categories
            </Link>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </aside>
  );
}
