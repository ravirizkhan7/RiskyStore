
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeType } from './types';
import { THEME_SEQUENCE } from './constants';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Payments from './components/Payments';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nextTheme = useCallback(() => {
    setCurrentThemeIndex((prev) => (prev + 1) % THEME_SEQUENCE.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTheme, 20000);
    return () => clearInterval(interval);
  }, [isPaused, nextTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', THEME_SEQUENCE[currentThemeIndex]);
  }, [currentThemeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Fungsi navigasi yang aman (Mencegah error 'File Not Found')
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Sesuaikan dengan tinggi header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Payment', id: 'payment' },
  ];

  return (
    <div className="min-h-screen theme-transition flex flex-col selection:bg-white selection:text-black">
      {/* Theme Control Fixed Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`group px-5 py-3 rounded-full font-black text-xs md:text-sm tracking-widest transition-all duration-300 flex items-center gap-2 border-2 shadow-2xl hover:scale-110 active:scale-95
            ${isPaused ? 'bg-green-600 text-white border-green-400' : 'bg-red-600 text-white border-red-400'}`}
        >
          <span className="group-hover:animate-pulse">
            {isPaused ? '▶ RESUME AUTO-THEME' : '⏸ PAUSE AUTO-THEME'}
          </span>
        </button>
      </div>

      {/* Navigation Header */}
      <header 
        className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'bg-opacity-95 backdrop-blur-xl border-b py-3 shadow-lg' : 'bg-transparent py-6'}`} 
        style={{ 
          borderColor: scrolled ? 'var(--border)' : 'transparent', 
          backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent' 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl md:text-2xl font-black tracking-tighter transition-all flex items-center gap-2 group"
          >
            <span className="bg-white text-black px-2 py-0.5 rounded leading-none group-hover:scale-110 transition-transform">SKY</span>
            <span className="hidden sm:inline">KING RISKY OFFC</span>
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:text-white transition-opacity relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#payment" 
              onClick={(e) => handleNavClick(e, 'payment')}
              className="px-6 py-2.5 border-2 rounded-full hover:bg-white hover:text-black transition-all"
              style={{ borderColor: 'var(--border)' }}
            >
              Order Now
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden relative z-[90] p-2 flex flex-col items-end gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-1 bg-current transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></span>
            <span className={`h-1 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`h-1 bg-current transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-4'}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[85] transition-all duration-500 ease-in-out flex flex-col items-center justify-center
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <nav className="flex flex-col items-center gap-10 text-4xl font-black uppercase italic tracking-tighter">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="hover:scale-110 transition-transform"
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#payment" 
            onClick={(e) => handleNavClick(e, 'payment')}
            className="mt-4 px-12 py-5 bg-white text-black rounded-2xl text-2xl font-black italic shadow-2xl active:scale-95 transition-transform"
          >
            START PROJECT
          </a>
        </nav>
        
        <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-40">
          <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px]">
            <span>Roblox</span>
            <span>Discord</span>
            <span>Instagram</span>
          </div>
          <p className="text-[10px] uppercase tracking-tighter">© 2024 Zenix Dev Studio</p>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="flex-grow">
        <div id="home">
          <Hero theme={THEME_SEQUENCE[currentThemeIndex]} onNavigate={handleNavClick} />
        </div>
        <About />
        <Portfolio />
        <Services />
        <Payments />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
