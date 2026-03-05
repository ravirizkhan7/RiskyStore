
import React from 'react';
import { ThemeType } from '../types';
import { WHATSAPP_NUMBER, ORDER_TEMPLATE } from '../constants';

interface HeroProps {
  theme: ThemeType;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ theme, onNavigate }) => {
  const handleOrderClick = () => {
    const message = encodeURIComponent(ORDER_TEMPLATE("Layanan Roblox"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const isComic = theme === ThemeType.COMIC;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[1000px] h-[1000px] rounded-full blur-[150px] -z-10 animate-pulse ${isComic ? 'bg-red-500 opacity-20' : 'bg-indigo-500 opacity-10'}`}></div>
      
      <div className="max-w-6xl relative z-10 w-full">
        <h1 
          className={`mb-8 tracking-tighter leading-[0.85] break-words ${isComic ? 'text-6xl sm:text-7xl md:text-[11rem] uppercase italic font-black text-black' : 'text-5xl sm:text-7xl md:text-[9rem] font-extrabold'}`}
          style={isComic ? { textShadow: '6px 6px 0px #F44336, 12px 12px 0px #2196F3' } : {}}
        >
          CREATING dgsdgsd THE <br className="hidden md:block" /> <span className={isComic ? 'text-black' : 'text-white opacity-95'}>NEXT LEVEL</span> OF ROBLOX
        </h1>
        
        <p className="text-base sm:text-xl md:text-3xl mb-14 max-w-3xl mx-auto opacity-80 leading-relaxed px-4 font-medium" style={{ color: isComic ? '#000' : 'var(--text-secondary)' }}>
          Elite map construction and specialized admin systems for ambitious creators. 
          Your vision, our development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
          <button
            onClick={handleOrderClick}
            className={`w-full sm:w-auto px-12 py-6 rounded-2xl text-xl font-black transition-all duration-300 hover:scale-110 active:scale-95 ${isComic ? 'comic-border shadow-[10px_10px_0_0_#000] bg-[#F44336] text-white' : 'shadow-2xl shadow-indigo-500/20'}`}
            style={!isComic ? { backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' } : {}}
          >
            ORDER VIA WHATSAPP
          </button>
          <a
            href="#portfolio"
            onClick={(e) => onNavigate(e, 'portfolio')}
            className={`w-full sm:w-auto px-12 py-6 rounded-2xl text-xl font-black border-4 transition-all duration-300 hover:bg-white hover:text-black active:scale-95 ${isComic ? 'comic-border shadow-[10px_10px_0_0_#000] bg-[#2196F3] text-white' : ''}`}
            style={!isComic ? { borderColor: 'var(--border)' } : {}}
          >
            VIEW PROJECTS
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 cursor-pointer" onClick={(e) => onNavigate(e as any, 'about')}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
