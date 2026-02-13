
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-opacity-50" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Project Archive</h2>
            <p className="text-xl opacity-70">Over 50+ successful deployments. These are some of our community favorites.</p>
          </div>
          <a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-black underline underline-offset-8 uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
            ROBLOX PROFILE →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-[2.5rem] border-4 card-comic glow-on-hover transition-all duration-500 bg-black"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex-grow">
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] bg-white text-black px-2 py-1 rounded mb-4">{project.year}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{project.name}</h3>
                    <p className="text-white/70 mt-3 text-lg line-clamp-2 max-w-md">{project.description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
