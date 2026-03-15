import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

// Admin Pages (Removed)

const PortfolioHome = () => {
  return (
    <div className="bg-black min-h-screen text-white w-full">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} PORTFOLIO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PortfolioHome />} />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
