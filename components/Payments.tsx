import React from 'react';
import { DANA_NUMBER, WHATSAPP_NUMBER } from '../constants';
import qris from '../image/qris.jpg';

const Payments: React.FC = () => {
  // Function to simulate QRIS download
  const handleDownloadQR = () => {
    // In a real app, this would be a link to a real image. 
    // Here we create a dummy link to trigger a "download" feeling.
    const link = document.createElement('a');
    link.href = qris;
    link.download = 'QRIS_KING_RISKY_OFFC.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="payment" className="py-24 px-6 bg-opacity-30" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">Payment Hub</h2>
              <p className="text-lg md:text-xl opacity-80 leading-relaxed">
                We accept several local payment methods. All processes are manual to ensure you get personal verification and order tracking.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl border-2 transition-transform hover:scale-[1.02]" style={{ borderColor: 'var(--border)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-blue-900/40">DANA</div>
                <div>
                  <div className="text-xs uppercase opacity-50 font-bold tracking-widest mb-1">DANA Account</div>
                  <div className="text-xl md:text-2xl font-black">{DANA_NUMBER}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 rounded-3xl border-2 transition-transform hover:scale-[1.02]" style={{ borderColor: 'var(--border)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-green-900/40">WA</div>
                <div>
                  <div className="text-xs uppercase opacity-50 font-bold tracking-widest mb-1">WhatsApp Admin</div>
                  <div className="text-xl md:text-2xl font-black">{WHATSAPP_NUMBER}</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black bg-opacity-40 border-l-8 border-yellow-500">
               <p className="text-sm font-bold uppercase tracking-wider mb-2">Instructions:</p>
               <ol className="text-sm opacity-80 list-decimal ml-4 space-y-2">
                 <li>Screenshot your transaction receipt.</li>
                 <li>Send it to our WhatsApp admin with your Order ID/Service Name.</li>
                 <li>Wait for verification (usually under 15 minutes).</li>
               </ol>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group max-w-sm mx-auto">
              {/* Decorative shadow behind QR */}
              <div className="absolute inset-0 bg-white blur-3xl opacity-5 -z-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="p-8 bg-white rounded-[2rem] text-black shadow-2xl flex flex-col items-center justify-center border-8 border-black transform transition-transform group-hover:rotate-1">
                <h3 className="font-black text-xl uppercase tracking-[0.2em] mb-6 italic">OFFICIAL QRIS</h3>
                <div className="w-full aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-300 relative overflow-hidden group/qr">
                   <img 
                    src={qris}
                    alt="QRIS Barcode" 
                    className="w-full h-full p-2"
                   />
                   {/* Overlay on hover */}
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-bold">READY TO SCAN</span>
                   </div>
                </div>
                
                <button 
                  onClick={handleDownloadQR}
                  className="mt-8 w-full py-4 bg-black text-white rounded-xl font-black uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  DOWNLOAD QRIS
                </button>
                <p className="mt-4 text-[10px] text-center font-bold opacity-40 uppercase tracking-tighter">
                  Universal QR Payment Supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
