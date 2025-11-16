import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { DocsPage } from './components/DocsPage';
import { Playground } from './components/Playground';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'docs' | 'playground'>('home');

  return (
    <>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <LandingPage onNavigate={setCurrentPage} />}
      {currentPage === 'docs' && <DocsPage />}
      {currentPage === 'playground' && <Playground />}
      
      <Toaster />
    </>
  );
}