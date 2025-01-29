"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Importing Lucide icons
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
  { label: "Logout", href: "/logout" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
