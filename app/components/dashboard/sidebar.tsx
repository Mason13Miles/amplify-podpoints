"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import {
  Headphones,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  Star,
  Users
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  admin?: boolean
}

const navItems: NavItem[] = [
  { title: "Subscriptions", href: "/dashboard", icon: Home },
  { title: "Following", href: "/dashboard/following", icon: Star },
  { title: "Explore", href: "/dashboard/explore", icon: Search },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
  { title: "Admin Console", href: "/dashboard/admin", icon: Users, admin: true },
]

interface SidebarProps {
  isAdmin?: boolean
}

export function Sidebar({ isAdmin = false }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const filteredNavItems = navItems.filter(item => !item.admin || (item.admin && isAdmin))

  const NavContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <div className="flex items-center space-x-2 mb-8">
          <Headphones className="h-6 w-6 text-blue-gray-600" />
          <span className="text-xl font-bold text-blue-gray-600">PodPoints</span>
        </div>
        <div className="space-y-1">
          {filteredNavItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href ? "bg-muted" : ""
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/signin">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <NavContent />
        </SheetContent>
      </Sheet>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="border-r bg-background">
          <NavContent />
        </div>
      </div>
    </>
  )
}