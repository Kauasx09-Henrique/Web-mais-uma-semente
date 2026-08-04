import { Header } from './components/Header';
import { Footer } from './components/footer';
import { HomeCarousel } from './pages/HomeCarousel';
import { About } from './pages/About';
import { Services } from './pages/Services'; // <-- Importe aqui

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Header />
      <HomeCarousel />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;