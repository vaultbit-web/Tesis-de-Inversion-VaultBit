
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ROADMAP, VAULTBIT_SHARED } from '../constants';

interface Props {
  lang: Language;
}

const OnePager: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  const currentRoadmap = ROADMAP[lang];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 md:space-y-24 px-6 font-host">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0D0D0D] to-black border border-white/5 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8A00] opacity-[0.03] blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00] shadow-[0_0_8px_#FF8A00]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{content.round}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight uppercase mb-8">
            {lang === 'es' ? 'Infraestructura' : 'Infrastructure'} <br/>
            <span className="text-[#FF8A00] glow-orange">{lang === 'es' ? 'Crítica' : 'Critical'}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
            {content.opportunity}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={VAULTBIT_SHARED.roundtableLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF8A00] hover:bg-white text-black font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {lang === 'es' ? 'Invertir vía Roundtable' : 'Invest via Roundtable'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <div className="text-left">
              <p className="text-[#FF8A00] text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Roundtable Secure Platform</p>
              <p className="text-gray-500 text-[10px] uppercase font-medium">{lang === 'es' ? 'Plataforma líder en SPVs europeos' : 'Lead European SPV platform'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Round Transparency Section */}
      <section className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 md:p-16">
        <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-12 flex items-center gap-3">
          <span className="text-[#FF8A00] text-3xl">●</span>
          {content.roundDetails.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
            <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">{lang === 'es' ? 'Instrumento' : 'Instrument'}</p>
            <p className="text-xl font-bold text-white uppercase">{content.roundDetails.instrument}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
            <p className="text-[9px] text-[#FF8A00] uppercase tracking-widest mb-2">{lang === 'es' ? 'Beneficio Early Bird' : 'Early Bird Benefit'}</p>
            <p className="text-xl font-bold text-white uppercase">{content.roundDetails.discount}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
            <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">{lang === 'es' ? 'Inversión Mínima' : 'Min Ticket'}</p>
            <p className="text-xl font-bold text-white uppercase">{content.roundDetails.minTicket}</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
            <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-2">{lang === 'es' ? 'Estructura Legal' : 'Legal Structure'}</p>
            <p className="text-xl font-bold text-white uppercase">{content.roundDetails.structure}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
          <svg className="w-6 h-6 text-[#FF8A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z"></path>
          </svg>
          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest leading-relaxed">
            {content.roundDetails.securityNote}
          </p>
        </div>
      </section>

      {/* Problema y Solución Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* El Desafío */}
        <div className="bg-[#0D0D0D] border border-red-500/5 p-8 md:p-12 rounded-[2rem] group hover:border-red-500/15 transition-all duration-500">
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-10 flex items-center gap-3">
            <span className="text-red-600 text-3xl">●</span>
            {lang === 'es' ? 'El Desafío' : 'The Challenge'}
          </h2>
          <div className="space-y-10">
            {content.problem.map((p, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-red-600/15 font-extrabold text-3xl italic leading-none">0{i + 1}</span>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* La Solución */}
        <div className="bg-[#0D0D0D] border border-[#FF8A00]/5 p-8 md:p-12 rounded-[2rem] relative group hover:border-[#FF8A00]/20 transition-all duration-500">
          <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-10 flex items-center gap-3">
            <span className="text-[#FF8A00] text-3xl glow-orange">●</span>
            {lang === 'es' ? 'La Solución' : 'The Solution'}
          </h2>
          <div className="space-y-10">
            {content.solution.map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-[#FF8A00]/15 font-extrabold text-3xl italic leading-none">0{i + 1}</span>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">{s.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <section>
        <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {content.financials.map((metric, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold mb-4">{metric.label}</p>
                <p className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">{metric.value}</p>
                <p className="text-[9px] text-[#FF8A00] font-bold uppercase tracking-[0.2em]">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <div className="bg-[#0D0D0D] border border-white/5 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-16 text-center">
            Roadmap <span className="text-[#FF8A00] glow-orange">2026</span>
          </h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {currentRoadmap.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start group">
                  <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FF8A00] transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></div>
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="text-[9px] font-bold text-[#FF8A00] uppercase tracking-[0.3em] mb-2 block">{item.quarter}</span>
                    <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#FF8A00] transition-colors">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA Final */}
      <section>
        <div className="bg-[#FF8A00] rounded-[2.5rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
          <div className="max-w-xl text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black uppercase leading-[1.05] tracking-tight mb-8">
              {lang === 'es' ? 'Construyendo el estándar' : 'Building the standard'} <br/>
              <span className="text-white">post-MiCA</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="bg-black/10 border border-black/5 px-4 py-2 rounded-xl">
                <p className="text-[9px] text-black/50 uppercase font-bold tracking-widest mb-0.5">Valuation Cap</p>
                <p className="text-xl font-extrabold text-black tracking-tight">{content.deal.valuationCap}</p>
              </div>
              <div className="bg-black/10 border border-black/5 px-4 py-2 rounded-xl">
                <p className="text-[9px] text-black/50 uppercase font-bold tracking-widest mb-0.5">Instrument</p>
                <p className="text-xl font-extrabold text-black tracking-tight">{content.deal.instrument}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right relative z-10 flex flex-col items-center lg:items-end gap-6">
             <div>
                <p className="text-black/40 text-[9px] font-bold uppercase tracking-[0.3em] mb-2">Round Target</p>
                <p className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-none">{content.deal.target}</p>
             </div>
             <a 
                href={VAULTBIT_SHARED.roundtableLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full font-extrabold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
             >
                {lang === 'es' ? 'Invertir Ahora' : 'Invest Now'}
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnePager;
