
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, VAULTBIT_SHARED } from '../constants';

interface Props {
  lang: Language;
}

const SectionIcons = {
  Mission: () => (
    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Vision: () => (
    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Economics: () => (
    <svg className="w-6 h-6 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  MiCA: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6h18M3 12h18M3 18h18M7 3v18M17 3v18" strokeLinecap="round" />
    </svg>
  ),
  Fragility: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Demand: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3" />
      <path d="M9 21v-4a1 1 0 011-1h4a1 1 0 011 1v4" />
    </svg>
  )
};

const ThesisIcons: Record<string, () => React.JSX.Element> = {
  real: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  moat: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
  saas: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  market: () => (
    <svg className="w-8 h-8 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 6l-9.5 9.5-5-5L1 18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 6h6v6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const RoadmapIcons = {
  Foundation: () => (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 7l-9 5-9-5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12l9-5M12 12L3 7" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" className="animate-pulse" />
    </svg>
  ),
  Activation: () => (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 12h3M19 12h3M12 2v3M12 19v3M5 5l2.1 2.1M16.9 16.9 19 19M5 19l2.1-2.1M16.9 7.1 19 5" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
    </svg>
  ),
  Network: () => (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="4" r="2" />
      <circle cx="4" cy="20" r="2" />
      <circle cx="20" cy="20" r="2" />
      <path d="M5.5 5.5l5 5M18.5 5.5l-5 5M5.5 18.5l5-5M18.5 18.5l-5-5" strokeLinecap="round" />
    </svg>
  ),
  Standard: () => (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const RiskIcons: Record<string, () => React.JSX.Element> = {
  "Seguridad Física": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  "Physical Security": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  "Tecnológico": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 16V8m0 0l-3 3m3-3l3 3M4 12h16m-4-8h4v4m-4 12h4v-4M4 4h4v4m-4 12h4v-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Technological": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 16V8m0 0l-3 3m3-3l3 3M4 12h16m-4-8h4v4m-4 12h4v-4M4 4h4v4m-4 12h4v-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Regulatorio": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Regulatory": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Operativo": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "Operational": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  "Financiero": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  "Financial": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  "Mercado": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
    </svg>
  ),
  "Market": () => (
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
    </svg>
  )
};

const CheckIcon = () => (
  <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#FF8A00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PitchDeck: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  const fmx = content.ferrimax;
  
  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 md:space-y-32 py-10 md:py-20 px-4 sm:px-8 font-host text-white pb-32 md:pb-40 overflow-hidden">
      
      {/* Intro Header */}
      <section className="text-center py-12 md:py-28 glass-card rounded-[2rem] md:rounded-[3.5rem] border border-white/5 relative overflow-hidden px-4 md:px-12 bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none"></div>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-5 md:h-7 mx-auto mb-8 md:mb-10 opacity-95 glow-orange" />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 uppercase tracking-tighter leading-[0.9] max-w-5xl mx-auto text-balance">
          {content.deck.intro}
        </h1>
        <div className="h-1 w-20 md:w-24 bg-[#FF8A00] mx-auto mb-6 md:mb-10 rounded-full"></div>
        <p className="text-[#FF8A00] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[14px] font-black">
          {lang === 'es' ? 'DOCUMENTO ESTRATÉGICO INSTITUCIONAL' : 'INSTITUTIONAL STRATEGIC DOCUMENT'}
        </p>
      </section>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative group overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <SectionIcons.Mission />
          </div>
          <div className="mb-6 md:mb-8"><SectionIcons.Mission /></div>
          <h2 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-[#FF8A00] tracking-widest">{lang === 'es' ? 'Misión' : 'Mission'}</h2>
          <p className="text-base md:text-xl font-bold uppercase leading-snug tracking-tight text-white/95">{content.deck.mission}</p>
        </div>
        <div className="p-8 md:p-12 glass-card rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative group overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <SectionIcons.Vision />
          </div>
          <div className="mb-6 md:mb-8"><SectionIcons.Vision /></div>
          <h2 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-[#FF8A00] tracking-widest">{lang === 'es' ? 'Visión' : 'Vision'}</h2>
          <p className="text-base md:text-xl font-bold uppercase leading-snug tracking-tight text-white/95">{content.deck.vision}</p>
        </div>
      </div>

      {/* Why Now Section */}
      <section className="space-y-10 md:space-y-16">
        <div className="text-center md:text-left">
          <h2 className="text-[9px] md:text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-6">{lang === 'es' ? 'CONTEXTO ESTRATÉGICO' : 'STRATEGIC CONTEXT'}</h2>
          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">{content.deck.whyNow.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.deck.whyNow.reasons.map((reason, i) => (
            <div key={i} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] group hover:border-[#FF8A00]/40 transition-all">
              <div className="mb-5 md:mb-6">
                {i === 0 && <SectionIcons.MiCA />}
                {i === 1 && <SectionIcons.Fragility />}
                {i === 2 && <SectionIcons.Demand />}
              </div>
              <h4 className="text-lg md:text-xl font-black uppercase text-white mb-3 md:mb-4 leading-tight">{reason.title}</h4>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-tight leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ferrimax Section */}
      <section className="space-y-10 md:space-y-16">
        <div className="text-center md:text-left px-2">
          <h2 className="text-[9px] md:text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-6">{lang === 'es' ? 'ALIANZA ESTRATÉGICA' : 'STRATEGIC ALLIANCE'}</h2>
          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-5">
            {fmx.title}
          </h3>
          <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">{fmx.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fmx.features.map((feat, i) => (
            <div key={i} className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] group hover:border-[#FF8A00]/40 transition-all hover:translate-y-[-5px]">
              <h4 className="text-lg md:text-xl font-black uppercase text-[#FF8A00] mb-3 md:mb-5 leading-tight">{feat.title}</h4>
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-tight leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8 md:pt-10 border-t border-white/5">
           {fmx.certifications.map((cert, i) => (
             <div key={i} className="flex items-center gap-3 md:gap-4">
               <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shadow-[0_0_8px_#FF8A00]"></div>
               <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white/70">{cert}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Economics Section */}
      <section className="space-y-10 md:space-y-16">
        <div className="text-center md:text-left">
          <h2 className="text-[9px] md:text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-6">{lang === 'es' ? 'VIABILIDAD FINANCIERA' : 'FINANCIAL VIABILITY'}</h2>
          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">{content.deck.unitEconomics.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.deck.unitEconomics.metrics.map((m, i) => (
            <div key={i} className="p-8 md:p-10 bg-black border border-white/10 rounded-[2rem] flex flex-col items-center text-center group hover:border-[#FF8A00]/50 transition-all">
              <div className="mb-5 md:mb-6 p-3 rounded-full bg-[#FF8A00]/5 text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-black transition-colors">
                <SectionIcons.Economics />
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-3">{m.label}</p>
              <p className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter">{m.value}</p>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="space-y-12 md:space-y-20 py-10 md:py-12">
        <div className="text-center md:text-left">
          <h2 className="text-[9px] md:text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-8">{content.deck.expansion.title}</h2>
          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-5">
            {lang === 'es' ? 'HOJA DE RUTA ESTRATÉGICA' : 'STRATEGIC ROADMAP'}
          </h3>
          <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{content.deck.expansion.goal}</p>
        </div>

        <div className="relative pt-10 md:pt-24 px-2 md:px-4">
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF8A00]/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 relative z-10">
            {content.deck.expansion.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative mb-8 md:mb-12">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black border-[3px] border-white/10 flex items-center justify-center text-[#FF8A00] transition-all duration-700 group-hover:scale-110 group-hover:border-[#FF8A00]/60 group-hover:bg-[#FF8A00]/10 shadow-[0_0_40px_rgba(255,138,0,0)] group-hover:shadow-[0_0_60px_rgba(255,138,0,0.3)] relative z-20">
                    {i === 0 && <RoadmapIcons.Foundation />}
                    {i === 1 && <RoadmapIcons.Activation />}
                    {i === 2 && <RoadmapIcons.Network />}
                    {i === 3 && <RoadmapIcons.Standard />}
                  </div>
                  {i === 0 && <div className="absolute inset-0 w-full h-full rounded-full bg-[#FF8A00] animate-ping opacity-5 pointer-events-none"></div>}
                </div>

                <div className="space-y-3 md:space-y-5 max-w-[280px]">
                  <p className="text-[#FF8A00] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-1">{step.year}</p>
                  <h4 className="text-base md:text-xl font-black uppercase text-white leading-tight tracking-tight min-h-[2.5rem] flex items-center justify-center">{step.title}</h4>
                  <p className="text-[9px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validación Section */}
      <section className="bg-white p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] text-black shadow-[0_40px_100px_rgba(255,138,0,0.1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8A00]/10 blur-[80px] pointer-events-none"></div>
        <div className="mb-10 md:mb-16 text-center md:text-left relative z-10">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">{content.deck.validation.title}</h2>
          <p className="text-[10px] md:text-sm font-black text-[#FF8A00] uppercase tracking-widest">{content.deck.validation.total}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 relative z-10">
          <div className="space-y-6 md:space-y-10">
            <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-gray-400 border-b-2 border-black/10 pb-3 md:pb-5">{lang === 'es' ? 'SECTORES VALIDADOS' : 'VALIDATED SECTORS'}</h4>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {content.deck.validation.sectors.map((item, i) => (
                <span key={i} className="flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 md:py-4 bg-black text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-tighter hover:bg-[#FF8A00] hover:text-black transition-all duration-300 shadow-lg cursor-default group/sector">
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6 md:space-y-10">
             <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-gray-400 border-b-2 border-black/10 pb-3 md:pb-5">{lang === 'es' ? 'SOPORTE LEGAL E INSTITUCIONAL' : 'LEGAL & INSTITUTIONAL'}</h4>
             <div className="flex flex-wrap gap-3 md:gap-5">
              {content.deck.validation.legal.map((item, i) => (
                <span key={i} className="px-5 md:px-6 py-3 md:py-4 bg-gray-100 border border-gray-200 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-tighter opacity-70 hover:opacity-100 transition-all cursor-default">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Riesgos Section */}
      <section className="space-y-10 md:space-y-16">
        <div className="text-center px-2">
          <h2 className="text-[9px] md:text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-8">{lang === 'es' ? 'GOBERNANZA Y CONTROL DE RIESGOS' : 'GOVERNANCE & RISK CONTROL'}</h2>
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none">{content.deck.risks.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.deck.risks.items.map((item, i) => (
            <div key={i} className="group p-8 md:p-10 glass-card rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent flex flex-col hover:border-[#FF8A00]/40 transition-all duration-500 hover:translate-y-[-5px]">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-3 md:p-3.5 rounded-2xl bg-white/5 text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-black transition-all duration-500 shadow-inner">
                    {RiskIcons[item.category] ? RiskIcons[item.category]() : <div className="w-5 h-5 border-2 border-current rounded-full" />}
                  </div>
                  <p className="text-[#FF8A00] text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{item.category}</p>
                </div>
              </div>
              <p className="text-lg md:text-xl font-black uppercase leading-tight text-white mb-6 md:mb-8 min-h-[3rem] tracking-tight">{item.risk}</p>
              
              <div className="mt-auto pt-6 md:pt-8 border-t border-white/10">
                <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 md:mb-4">{lang === 'es' ? 'PROTOCOLO DE MITIGACIÓN' : 'MITIGATION PROTOCOL'}</p>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-tight leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                  {item.mitigation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thesis Summary */}
      <section className="space-y-12 md:space-y-20 bg-[#FF8A00]/5 p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border border-[#FF8A00]/20 relative overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920/mP43LZ32R1CBREy3/circuit-board-texture-YyvXQkLq9Ms.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#FF8A00]/10 blur-[150px] pointer-events-none rounded-full"></div>
        <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white relative z-10 mb-8 md:mb-16">{lang === 'es' ? 'TESIS DE INVERSIÓN' : 'INVESTMENT THESIS'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
          {content.deck.thesis.map((t, i) => (
            <div key={i} className="flex flex-col gap-4 items-center md:items-start text-center md:text-left group p-6 rounded-3xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="p-4 rounded-2xl bg-[#FF8A00]/10 text-[#FF8A00] mb-2 group-hover:scale-110 transition-transform duration-500">
                {ThesisIcons[t.icon] ? ThesisIcons[t.icon]() : <div className="w-8 h-8 bg-current rounded-full" />}
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-black uppercase text-white mb-2 tracking-tight">{t.title}</h4>
                <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-tight leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 md:py-32 border-t border-white/10">
        <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 md:mb-16 leading-[0.85] text-balance">
          {lang === 'es' ? '¿LIDERAMOS EL ESTÁNDAR JUNTOS?' : 'LEADING THE STANDARD TOGETHER?'}
        </h2>
        <a 
          href={VAULTBIT_SHARED.roundtableLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FF8A00] text-black font-black px-12 md:px-20 py-5 md:py-7 rounded-2xl text-[12px] md:text-[14px] uppercase tracking-[0.3em] md:tracking-[0.5em] hover:bg-white transition-all duration-500 shadow-[0_30px_100px_rgba(255,138,0,0.3)] hover:scale-105 active:scale-95"
        >
          {lang === 'es' ? 'ACCEDER A ROUNDTABLE' : 'ACCESS ROUNDTABLE'}
        </a>
      </section>
    </div>
  );
};

export default PitchDeck;
