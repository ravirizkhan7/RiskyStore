
import React, { useState } from 'react';

const faqs = [
  {
    q: "Berapa lama proses pengerjaan map?",
    a: "Tergantung tingkat kerumitan. Map basic biasanya selesai dalam 3-5 hari, sedangkan map premium memakan waktu 1-2 minggu."
  },
  {
    q: "Apakah saya mendapatkan source code script?",
    a: "Ya, untuk pembelian map atau sistem, anda akan mendapatkan file .rbxl atau akses penuh ke script yang ada di dalam game."
  },
  {
    q: "Apakah pembayaran bisa dicicil?",
    a: "Untuk project di atas 500rb, kami menerima sistem DP 50% di awal dan pelunasan setelah pengerjaan selesai 100%."
  },
  {
    q: "Bagaimana cara klaim admin game?",
    a: "Cukup hubungi WhatsApp admin dengan melampirkan bukti pembayaran dan Username Roblox anda."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-12 uppercase italic">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="border-2 rounded-2xl overflow-hidden transition-all duration-300"
            style={{ borderColor: 'var(--border)' }}
          >
            <button 
              className="w-full p-6 text-left flex justify-between items-center font-bold text-lg"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.q}
              <span className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openIndex === idx && (
              <div className="p-6 pt-0 opacity-80 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
