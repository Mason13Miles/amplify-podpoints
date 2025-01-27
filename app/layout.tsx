"use client"; // Required for Next.js App Router

import { Inter } from "next/font/google";
import "./app.css";
import AuthGuard from "@/app/components/AuthGuard"; // Import AuthGuard

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthGuard>{children}</AuthGuard> {/* Protect app with authentication */}
      </body>
    </html>
  );
}

