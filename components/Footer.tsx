
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-black tracking-tighter italic">KING RISKY OFFC</h2>
          <p className="text-sm opacity-50 mt-2">Professional Roblox Development & Assets.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-70">
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        
        <div className="text-xs opacity-40">
          &copy; {new Date().getFullYear()} KING RISKY OFFC. All rights reserved. Not affiliated with Roblox Corp.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
