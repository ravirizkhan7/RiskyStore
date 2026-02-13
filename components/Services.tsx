
import React from 'react';
import { SERVICES_DATA, WHATSAPP_NUMBER, ORDER_TEMPLATE } from '../constants';

const Services: React.FC = () => {
  const handleOrder = (id: number) => {
    const message = encodeURIComponent(ORDER_TEMPLATE(id));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">Service Plans</h2>
          <p className="max-w-3xl mx-auto text-xl opacity-70">Expertise tailored to your game scale. Choose a plan or contact for a custom quote.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className="p-10 rounded-[3rem] border-4 flex flex-col h-full bg-opacity-30 card-comic glow-on-hover transition-all duration-500 hover:-translate-y-2"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
            >
              <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">{service.title}</h3>
              <div className="text-5xl font-black mb-10">{service.price}</div>
              
              <div className="h-1 w-full bg-current opacity-10 mb-10 rounded-full"></div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-lg font-semibold opacity-90">
                    <span className="mt-1.5 w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-primary)' }}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleOrder(service.id)}
                className="w-full py-6 rounded-2xl font-black text-xl text-center border-4 uppercase tracking-[0.1em] transition-all hover:bg-black hover:text-white active:scale-95"
                style={{ borderColor: 'var(--border)' }}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 rounded-[3rem] border-4 border-dashed opacity-50 text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xl font-bold uppercase tracking-widest italic">Need something else? We offer custom scripting and UI design packages.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
