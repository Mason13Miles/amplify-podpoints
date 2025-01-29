import { Header } from '../components/landing/header';
import { Footer } from '../components/landing/footer'


export default function MarketingLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header - Navigation for Marketing Pages */}
        <Header />
  
        {/* Page Content */}
        <main className="flex-grow mt-16">
          {children}
        </main>
      </div>
    );
  }
  