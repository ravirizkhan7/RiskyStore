import React from 'react';
import poto from '../image/tll.jpg';
const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border-4" style={{ borderColor: 'var(--border)' }}>
            <img 
              src={poto} 
              alt="Creator Profile" 
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl border-2 bg-black bg-opacity-50 backdrop-blur-md" style={{ borderColor: 'var(--border)' }}>
            <span className="text-2xl font-black">KING RISKY OFFC</span>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">About The Studio</h2>
          <div className="space-y-4 text-lg opacity-90" style={{ color: 'var(--text-secondary)' }}>
            <p>
              King Risky Offc started as a solo project by a passionate Roblox player who wanted to push the boundaries of map design and gameplay mechanics.
            </p>
            <p>
              With over 2 years of experience in the Roblox Developer community, we've helped numerous game creators launch successful titles by providing high-quality assets and reliable admin systems.
            </p>
            <p>
              We believe that every game deserves a map that tells a story and engages players from the first second they spawn in.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {['Map Building', 'Lighting', 'Admin Scripts', 'VFX', 'UI Design'].map(skill => (
              <span key={skill} className="px-4 py-2 border rounded-full text-xs font-bold uppercase tracking-widest" style={{ borderColor: 'var(--border)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
