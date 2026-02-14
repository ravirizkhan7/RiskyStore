
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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

  const selectTheme = (index: number) => {
    setCurrentThemeIndex(index);
    setIsPaused(true); // Pause auto-cycle when manually selected
    setIsThemeDropdownOpen(false);
  };

  const currentTheme = THEME_SEQUENCE[currentThemeIndex];
  const isComic = currentTheme === ThemeType.COMIC;

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Payment', id: 'payment' },
  ];

  return (
    <div className="min-h-screen theme-transition flex flex-col selection:bg-white selection:text-black">
      
      {/* Theme Selection Dropdown */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100]" ref={dropdownRef}>
        <div className="relative flex flex-col items-end gap-2 md:gap-3">
          
          {/* Dropdown Menu Content */}
          <div className={`transition-all duration-300 origin-bottom-right mb-2 overflow-hidden
            ${isThemeDropdownOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4 pointer-events-none'}
            ${isComic ? 'comic-border bg-white shadow-[8px_8px_0_0_#000] md:shadow-[12px_12px_0_0_#000] w-56 md:w-64' : 'bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl w-48 md:w-56'}
          `}>
            <div className={`p-3 md:p-4 ${isComic ? 'border-b-4 border-black bg-yellow-400' : 'border-b border-white/5 bg-white/5'}`}>
               <div className="flex items-center justify-between mb-2">
                 <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isComic ? 'text-black' : 'text-white/40'}`}>
                   Theme Mode
                 </span>
                 <button 
                  onClick={() => setIsPaused(!isPaused)}
                  className={`text-[8px] md:text-[9px] px-1.5 py-0.5 md:px-2 md:py-1 rounded font-black uppercase tracking-tighter transition-colors
                    ${isPaused ? 'bg-red-500 text-white' : 'bg-green-500 text-white animate-pulse'}`}
                 >
                   {isPaused ? 'Manual' : 'Auto'}
                 </button>
               </div>
            </div>

            <div className="p-1.5 md:p-2 space-y-1">
              {THEME_SEQUENCE.map((theme, idx) => (
                <button
                  key={theme}
                  onClick={() => selectTheme(idx)}
                  className={`w-full text-left px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl flex items-center gap-2 md:gap-3 transition-all group
                    ${currentThemeIndex === idx 
                      ? (isComic ? 'bg-red-500 text-white' : 'bg-white/10 text-white') 
                      : (isComic ? 'hover:bg-blue-400 text-black' : 'hover:bg-white/5 text-white/60')}`}
                >
                  <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-black/20 group-hover:scale-125 transition-transform
                    ${theme === ThemeType.DARK_CYBER ? 'bg-cyan-400' : ''}
                    ${theme === ThemeType.NEON_GAMING ? 'bg-magenta-500' : ''}
                    ${theme === ThemeType.SOFT_PASTEL ? 'bg-indigo-300' : ''}
                    ${theme === ThemeType.ROBLOX_POWER ? 'bg-red-600' : ''}
                    ${theme === ThemeType.COMIC ? 'bg-yellow-400' : ''}
                  `} style={{ backgroundColor: theme === ThemeType.NEON_GAMING ? '#d946ef' : undefined }}></div>
                  <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${isComic ? '' : 'font-mono'}`}>
                    {theme.replace('-', ' ')}
                  </span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className={`w-full p-2.5 md:p-3 text-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-colors
                ${isComic ? 'bg-black text-white' : 'bg-white/5 hover:bg-white/10 text-white/40'}`}
            >
              {isPaused ? '▶ Resume Cycle' : '⏸ Pause Cycle'}
            </button>
          </div>

          {/* Trigger Button */}
          <button
            onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            className={`group h-11 md:h-14 px-4 md:px-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-sm tracking-widest transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-2xl hover:scale-105 active:scale-95
              ${isComic 
                ? 'comic-border bg-red-500 text-white shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000]' 
                : 'bg-white text-black'}`}
          >
            <span className="opacity-60 text-[9px] md:text-xs hidden sm:inline">STYLE:</span>
            <span className="uppercase italic truncate max-w-[80px] sm:max-w-none">{currentTheme.replace('-', ' ')}</span>
            <svg 
              className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${isThemeDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Header */}
      <header 
        className={`fixed top-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'bg-opacity-95 backdrop-blur-xl border-b py-2 md:py-3 shadow-lg' : 'bg-transparent py-4 md:py-6'}`} 
        style={{ 
          borderColor: scrolled ? 'var(--border)' : 'transparent', 
          backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent' 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className={`text-lg md:text-2xl font-black tracking-tighter transition-all flex items-center gap-2 group ${isComic ? 'text-black' : ''}`}
          >
            <span className={`${isComic ? 'bg-black text-white' : 'bg-white text-black'} px-1.5 py-0.5 rounded leading-none group-hover:scale-110 transition-transform`}>SKY</span>
            <span className="hidden sm:inline">KING RISKY OFFC</span>
          </a>
          
          <nav className={`hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] ${isComic ? 'text-black' : ''}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:opacity-60 transition-opacity relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#payment" 
              onClick={(e) => handleNavClick(e, 'payment')}
              className={`px-6 py-2.5 border-2 rounded-full hover:bg-white hover:text-black transition-all ${isComic ? 'border-black' : ''}`}
              style={{ borderColor: !isComic ? 'var(--border)' : undefined }}
            >
              Order Now
            </a>
          </nav>

          <button 
            onClick={toggleMenu} 
            className={`md:hidden relative z-[90] p-2 flex flex-col items-end gap-1.5 focus:outline-none ${isComic ? 'text-black' : ''}`}
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-3'}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[85] transition-all duration-500 ease-in-out flex flex-col items-center justify-center
        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <nav className={`flex flex-col items-center gap-8 text-3xl font-black uppercase italic tracking-tighter ${isComic ? 'text-black' : ''}`}>
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
            className={`mt-4 px-10 py-4 rounded-xl text-xl font-black italic shadow-2xl active:scale-95 transition-transform
              ${isComic ? 'bg-red-500 text-white comic-border shadow-[8px_8px_0_0_#000]' : 'bg-white text-black'}`}
          >
            START PROJECT
          </a>
        </nav>
      </div>

      <main className="flex-grow">
        <div id="home">
          <Hero theme={currentTheme} onNavigate={handleNavClick} />
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
