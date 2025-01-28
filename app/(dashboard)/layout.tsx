// 'use-client'

// import { Amplify } from "aws-amplify";
// import { Header}from '../components/dashboard/header';
// import { Footer } from '../components/dashboard/footer';
// import Sidebar from "../components/dashboard/sidebar";
// import AuthGuard from '../components/AuthGuard';


// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <AuthGuard>
//     <main className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex flex-grow">
//         {/* Sidebar on the left */}
//         <Sidebar />

//         {/* Main content on the right */}
//         <div className="flex-grow bg-gray-100 p-6">
//           {children}
//         </div>
//       </div>
//       <Footer />
//     </main>
//     </AuthGuard>
//   );
// }


"use client"

import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import AuthGuard from "../components/AuthGuard";
import Sidebar from "../components/dashboard/sidebar";
import { Header } from "../components/landing/header";
import { Footer } from "../components/dashboard/footer";

Amplify.configure(outputs);


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard> {/* ✅ Protects only the dashboard */}
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </AuthGuard>
  );
}
