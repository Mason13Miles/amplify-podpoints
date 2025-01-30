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
'use client'

import React, { useState } from "react";
import { Header } from "../components/dashboard/header";
import Sidebar from "../components/dashboard/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Sidebar + Page Content */}
      <div className="flex flex-row mt-16 flex-grow">
        {/* Sidebar Toggle Button (Only Visible on Small Screens) */}
        <button
          className="absolute top-4 left-4 z-50 text-white px-3 py-2 rounded-lg lg:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          ☰ Menu
        </button>

        {/* Sidebar - Visible on Large Screens, Hidden on Mobile */}
        <aside
          className={`fixed inset-y-0 left-0 w-64  text-white min-h-screen p-4 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:w-80`}
        >
          <Sidebar />
        </aside>

        {/* Page Content (Main) */}
        <main className="flex-grow p-4 sm:p-6 max-w-screen-lg mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

