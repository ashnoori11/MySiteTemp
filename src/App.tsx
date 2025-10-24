import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { DemoRequestSection } from './components/DemoRequestSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <WhyChooseUsSection />
          <FeaturesSection />
          <AboutSection />
          <SuccessStoriesSection />
          <DemoRequestSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}
