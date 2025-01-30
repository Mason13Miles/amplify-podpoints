"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  // Determine the default open section
  const getDefaultOpenSection = () => {
    if (pathname.startsWith("/subscriptions")) return "subscriptions";
    if (pathname.startsWith("/following")) return "following";
    if (pathname.startsWith("/explore")) return "explore";
    return null;
  };

  const [openSection, setOpenSection] = useState<string | null>(getDefaultOpenSection);

  useEffect(() => {
    // Update state if user navigates between pages
    setOpenSection(getDefaultOpenSection());
  }, [pathname]);

  // Section routes mapping
  const sectionRoutes: Record<string, string> = {
    subscriptions: "/subscriptions",
    following: "/following",
    explore: "/explore",
  };

  const handleHeaderClick = (section: string) => {
    // Toggle expansion
    setOpenSection((prev) => (prev === section ? null : section));
    // Navigate to the section's page dynamically
    router.push(sectionRoutes[section]);
  };

  return (
    <aside className="w-64 h-screen border-r p-4">
      <Accordion.Root
        type="single"
        collapsible
        className="space-y-2"
        value={openSection || ""}
        onValueChange={setOpenSection}
      >
        {/* Subscriptions Section */}
        <Accordion.Item value="subscriptions">
          <Accordion.Header>
            <Accordion.Trigger className="group flex items-center w-full">
              <div
                onClick={() => handleHeaderClick("subscriptions")}
                className="flex items-center justify-between w-full p-3 text-lg font-medium text-gray-800 rounded-md hover:bg-gray-300 transition cursor-pointer"
              >
                Subscriptions
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="pl-4 mt-2 space-y-2 text-gray-700">
            <Link href="/subscriptions/podcasts" className="block hover:underline">
              Podcasts
            </Link>
            <Link href="/subscriptions/newsletters" className="block hover:underline">
              Newsletters
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Following Section */}
        <Accordion.Item value="following">
          <Accordion.Header>
            <Accordion.Trigger className="group flex items-center w-full">
              <div
                onClick={() => handleHeaderClick("following")}
                className="flex items-center justify-between w-full p-3 text-lg font-medium text-gray-800  rounded-md hover:bg-gray-300 transition cursor-pointer"
              >
                Following
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="pl-4 mt-2 space-y-2 text-gray-700">
            <Link href="/following/1" className="block hover:underline">
              JomBoy
            </Link>
            <Link href="/following/2" className="block hover:underline">
              Barstool
            </Link>
            <Link href="/following/3" className="block hover:underline">
              NYYST
            </Link>
            <Link href="/following/4" className="block hover:underline">
              Collin Cowherd
            </Link>
            <Link href="/following/5" className="block hover:underline">
              ESPN
            </Link>
            <Link href="/following/6" className="block hover:underline">
              Fox sports
            </Link>
          </Accordion.Content>
        </Accordion.Item>

        {/* Explore Section */}
        <Accordion.Item value="explore">
          <Accordion.Header>
            <Accordion.Trigger className="group flex items-center w-full">
              <div
                onClick={() => handleHeaderClick("explore")}
                className="flex items-center justify-between w-full p-3 text-lg font-medium text-gray-800 rounded-md hover:bg-gray-300 transition cursor-pointer"
              >
                Explore
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="pl-4 mt-2 space-y-2 text-gray-700">
            <Link href="/explore/1" className="block hover:underline">
              Trending
            </Link>
            <Link href="/explore/6" className="block hover:underline">
              Finance
            </Link>
            <Link href="/explore/7" className="block hover:underline">
              Parenting
            </Link>
            <Link href="/explore/8" className="block hover:underline">
              Fitness
            </Link>
            <Link href="/explore/9" className="block hover:underline">
              Bitcoin
            </Link>
            <Link href="/explore/10" className="block hover:underline">
              Travel
            </Link>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </aside>
  );
}

