import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/footer';
import { HomeCarousel } from './pages/HomeCarousel';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Quote } from './pages/Quote';
import { Contact } from './pages/Contact';
import { Research } from './pages/Research';

import { Analytics } from "@vercel/analytics/react"


function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <HomeCarousel />
      <About />
      <Services />
      <Quote />
      <Contact />
    </>
  );
}

function ResearchPage() {
  return (
    <>
      <Research />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <ScrollManager />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa" element={<ResearchPage />} />
        </Routes>
      </main>

      <Footer />

      <Analytics />
    </div>
  );
}

export default App;
