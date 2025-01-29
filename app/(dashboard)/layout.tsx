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


// "use client"

// import React from "react";
// import { Amplify } from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
// import outputs from "@/amplify_outputs.json";
// import AuthGuard from "../components/AuthGuard";
// import Sidebar from "../components/dashboard/sidebar";
// import { Header } from "../components/dashboard/header";

// Amplify.configure(outputs);


// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (

//     <AuthGuard> 
//       <div className="flex min-h-screen">
//         <Header />
//         <Sidebar />
//         <main className="flex-grow p-6">{children}</main>
//       </div>
//     </AuthGuard>
//   );
// }

import React from "react";
import { Header } from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Sidebar + Page Content */}
      <div className="flex flex-row mt-16 flex-grow">
        {/* Sidebar on the left with fixed width */}
        <aside className="w-64 bg-gray-100 min-h-screen">
          <Sidebar />
        </aside>

        {/* Page Content on the right */}
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
