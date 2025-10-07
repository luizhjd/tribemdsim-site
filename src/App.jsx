import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Screenshots from '@/pages/Screenshots';
import HelpCenter from '@/pages/HelpCenter';
import ScrollToAnchor from '@/components/ScrollToAnchor';
import DownloadSection from '@/components/DownloadSection';
import StatsSection from '@/components/StatsSection';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToAnchor />
      <Navigation />
      <main className="flex-grow">
        <Home />
        <StatsSection />
        <Features />
        <Screenshots />
        <HelpCenter />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;