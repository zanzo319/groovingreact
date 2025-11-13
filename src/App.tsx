import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Upcoming } from './pages/Upcoming';
import { Past } from './pages/Past';
import { Merch } from './pages/Merch';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/past" element={<Past />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/merch/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}