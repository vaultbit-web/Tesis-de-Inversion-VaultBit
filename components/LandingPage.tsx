
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: Language;
  onNavigateToInvestors: () => void;
}

const LandingPage: React.FC<Props> = ({ lang, onNavigateToInvestors }) => {
  const content = TRANSLATIONS[lang];
  const landing = content.landing!;

  return (
    <div className="w-full bg-black text-white font-host">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF8A00]/10 via-black to-black opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/5 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse"></span>
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF8A00]">ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            {landing.hero.title}
          </h1>
          
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {landing.hero.subtitle}
          </p>
          
          <button 
            onClick={onNavigateToInvestors}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#FF8A00] px-10 font-black text-black transition-all duration-300 hover:w-60 hover:bg-white"
          >
            <span className="mr-2 text-xs uppercase tracking-[0.2em]">{landing.hero.cta}</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {landing.features.map((feature, i) => (
            <div key={i} className="group p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#FF8A00]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#FF8A00]/10 flex items-center justify-center mb-8 text-[#FF8A00]">
                <span className="font-black text-xl">0{i+1}</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-4 tracking-tight text-white group-hover:text-[#FF8A00] transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              {landing.security.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              {landing.security.desc}
            </p>
            <ul className="space-y-4">
              {landing.security.list.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-[#111] to-black border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="text-center relative z-10 p-10">
                   <div className="w-24 h-24 mx-auto mb-6 border-2 border-[#FF8A00] rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#FF8A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                   </div>
                   <span className="block text-6xl font-black text-white tracking-tighter mb-2">VII</span>
                   <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em]">GRADO CERTIFICADO</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Product Pricing Preview */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{landing.products.title}</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{landing.products.subtitle}</p>
         </div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {landing.products.list.map((prod, i) => (
               <div key={i} className="p-8 rounded-3xl border border-white/10 bg-black hover:border-[#FF8A00]/50 transition-colors group">
                  <h3 className="text-xl font-black uppercase text-white mb-2">{prod.name}</h3>
                  <p className="text-3xl font-black text-[#FF8A00] mb-6 tracking-tighter">{prod.price}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase leading-relaxed">{prod.desc}</p>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default LandingPage;
