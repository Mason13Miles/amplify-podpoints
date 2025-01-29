import React from "react";
import { Header } from "../components/admin/header";
import Sidebar from "../components/admin/sidebar";

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
