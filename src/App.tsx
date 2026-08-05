import { Header } from './components/Header';
import { Footer } from './components/footer';
import { HomeCarousel } from './pages/HomeCarousel';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Header />
      <HomeCarousel />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;