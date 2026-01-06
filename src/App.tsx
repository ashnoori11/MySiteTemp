import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { SchedulePage } from './pages/SchedulePage';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'about' | 'products' | 'contact' | 'demo' | 'schedule';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'demo':
        return <DemoPage />;
      case 'schedule':
        return <SchedulePage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}
