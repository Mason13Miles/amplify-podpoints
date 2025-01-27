'use-client'

import { Header}from '../components/dashboard/header';
import { Footer } from '../components/dashboard/footer';
import Sidebar from "../components/dashboard/sidebar";
import AuthGuard from '../components/AuthGuard';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <div className="flex-grow bg-gray-100 p-6">
          {children}
        </div>
      </div>
      <Footer />
    </main>
    </AuthGuard>
  );
}


