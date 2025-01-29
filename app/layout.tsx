// "use client"; // Required for Next.js App Router

// import { Inter } from "next/font/google";
// import AuthGuard from "@/app/components/AuthGuard"; // Import AuthGuard
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AuthGuard>{children}</AuthGuard> {/* Protect app with authentication */}
//       </body>
//     </html>
//   );
// }
import { Amplify } from 'aws-amplify';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from  "./components/landing/header";
import { Footer } from "./components/landing/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PodPoints - Save Time & Discover More',
  description: 'AI-powered podcast summaries tailored to your interests',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
