
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, VAULTBIT_SHARED } from '../constants';

interface Props {
  lang: Language;
}

const PitchDeck: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  
  const competitionData = [
    { name: 'VaultBit', stats: [true, true, true, true, true] },
    { name: lang === 'es' ? 'Bancos' : 'Banks', stats: [true, false, true, false, false] },
    { name: 'Exchanges', stats: [false, true, false, false, true] },
    { name: lang === 'es' ? 'Seguridad Física' : 'Physical Security', stats: [true, false, false, false, false] },
    { name: lang === 'es' ? 'Custodios Digitales' : 'Digital Custodians', stats: [false, true, false, false, true] },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-32 py-20 px-6 font-host text-white">
      
      {/* Slide 1: Intro / Hero Inmersivo */}
      <section className="text-center py-32 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[3.5rem] border border-white/5 relative overflow-hidden group shadow-2xl">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent"></div>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-20 mx-auto mb-16 filter drop-shadow-[0_0_20px_rgba(255,138,0,0.3)]" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto">
          {content.deck.intro}
        </h1>
        <div className="h-1.5 w-32 bg-[#FF8A00] mx-auto mb-12 rounded-full shadow-[0_0_15px_#FF8A00]"></div>
        <p className="text-gray-500 uppercase tracking-[0.5em] text-[11px] font-black opacity-60">Pitch Deck • Barcelona 2026 • Confidential</p>
      </section>

      {/* Slide: Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[2.5rem] hover:border-[#FF8A00]/20 transition-all">
          <h3 className="text-[#FF8A00] font-black uppercase tracking-[0.3em] text-[11px] mb-8">{lang === 'es' ? 'MISIÓN' : 'MISSION'}</h3>
          <p className="text-2xl font-bold leading-snug">{content.deck.mission}</p>
        </div>
        <div className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[2.5rem] hover:border-[#FF8A00]/20 transition-all">
          <h3 className="text-[#FF8A00] font-black uppercase tracking-[0.3em] text-[11px] mb-8">{lang === 'es' ? 'VISIÓN' : 'VISION'}</h3>
          <p className="text-2xl font-bold leading-snug">{content.deck.vision}</p>
        </div>
      </section>

      {/* Slide: El Problema con impacto visual */}
      <section>
        <div className="mb-16">
          <h2 className="text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.5em] mb-4">
            01 {lang === 'es' ? 'EL PROBLEMA' : 'THE PROBLEM'}
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1]">
            {lang === 'es' ? 'La tecnología blockchain es segura. La custodia, no.' : 'Blockchain technology is secure. Custody is not.'}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {content.problem.map((p, i) => (
            <div key={i} className="bg-[#FF8A00] p-12 rounded-[3rem] text-black group hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">
                {i === 0 ? '🏠' : i === 1 ? '🔥' : '💔'}
              </div>
              <h4 className="font-black text-xl mb-4 uppercase leading-none tracking-tight">{p.title}</h4>
              <p className="text-sm font-bold opacity-80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center p-16 border border-white/5 rounded-[3.5rem] bg-gradient-to-br from-white/[0.03] to-transparent">
          <p className="text-xl md:text-3xl font-extrabold leading-tight">
            {lang === 'es' ? 'Más del ' : 'More than '}
            <span className="text-[#FF8A00] text-6xl md:text-8xl block my-4 glow-orange italic">23%</span>
            {lang === 'es' ? ' de todo el Bitcoin está perdido para siempre por fallos de custodia.' : ' of all Bitcoin is lost forever due to custody failures.'}
          </p>
        </div>
      </section>

      {/* Slide: Por Qué Ahora (Inverso) */}
      <section className="bg-[#0D0D0D] p-16 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF8A00] opacity-[0.03] blur-[100px] rounded-full group-hover:opacity-[0.07] transition-opacity"></div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-20 uppercase tracking-tight">{content.deck.whyNow.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {content.deck.whyNow.reasons.map((r, i) => (
            <div key={i} className="space-y-6">
              <div className="text-3xl font-black text-[#FF8A00]/20">0{i+1}</div>
              <h4 className="font-black text-lg uppercase leading-tight tracking-tight">{r.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide: Competencia (Tabla Estilizada) */}
      <section>
        <div className="text-center mb-16">
           <h2 className="text-[11px] text-[#FF8A00] font-black uppercase tracking-[0.5em] mb-4">
            02 {lang === 'es' ? 'COMPETENCIA' : 'COMPETITION'}
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            {content.deck.competition.title}
          </h3>
        </div>
        <div className="overflow-x-auto glass-panel rounded-[3rem] border border-white/5 p-8">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-8 text-[11px] font-black text-gray-500 uppercase tracking-widest">{lang === 'es' ? 'Empresa' : 'Company'}</th>
                {content.deck.competition.labels.map((l, i) => (
                  <th key={i} className="py-8 text-[11px] font-black text-gray-500 uppercase tracking-widest text-center">{l}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitionData.map((row, i) => (
                <tr key={i} className={`border-b border-white/5 group transition-all duration-300 ${i === 0 ? 'bg-[#FF8A00]/10' : 'hover:bg-white/[0.03]'}`}>
                  <td className={`py-10 font-black uppercase text-base ${i === 0 ? 'text-[#FF8A00]' : 'text-white'}`}>{row.name}</td>
                  {row.stats.map((stat, j) => (
                    <td key={j} className="py-10 text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${stat ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {stat ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12"></path></svg>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Slide: Modelo de Negocio & Cajas */}
      <section>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">{content.deck.pricing.title}</h2>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.4em] opacity-60">{content.deck.pricing.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.deck.pricing.tiers.map((t, i) => (
            <div key={i} className="bg-[#0D0D0D] border border-white/5 p-16 rounded-[3.5rem] group hover:border-[#FF8A00] transition-all duration-700 text-center relative shadow-xl">
              {i === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF8A00] text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(255,138,0,0.5)]">Most Popular</div>}
              <h4 className="text-gray-500 text-[11px] font-black uppercase tracking-[0.5em] mb-12">{t.name}</h4>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-7xl font-black text-white tracking-tighter">{t.price.replace('€', '')}</span>
                <span className="text-2xl font-black text-[#FF8A00] mb-2">€</span>
              </div>
              <p className="text-[11px] text-gray-600 font-black uppercase tracking-widest">{t.period}</p>
              <div className="mt-12 h-px w-full bg-white/5"></div>
              <ul className="mt-12 space-y-5 text-[10px] text-gray-400 font-black uppercase tracking-widest text-left inline-block">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                  {lang === 'es' ? 'Contrato Anual' : 'Annual Contract'}
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                  {lang === 'es' ? 'Seguro Grado VII' : 'Grade VII Insurance'}
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                  {lang === 'es' ? 'Acceso 24/7' : '24/7 Access'}
                </li>
              </ul>
            </div>
          ))}
        </div>
        {/* Financial Highlights Mini-Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 glass-panel rounded-[3rem] border border-white/5">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">{lang === 'es' ? 'Ingresos Potenciales' : 'Potential Revenue'}</p>
            <p className="text-3xl font-black">{content.deck.financialModel.revenue}</p>
          </div>
          <div className="text-center border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">{lang === 'es' ? 'Breakeven' : 'Break-even'}</p>
            <p className="text-3xl font-black">{content.deck.financialModel.occupancy}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">{lang === 'es' ? 'Precio Medio' : 'Average Price'}</p>
            <p className="text-3xl font-black">{content.deck.financialModel.avgPrice}</p>
          </div>
        </div>
      </section>

      {/* Slide: Plan de Expansión (Timeline Visual) */}
      <section className="relative">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-24 uppercase tracking-tight text-center">{content.deck.expansion.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
          {content.deck.expansion.steps.map((step, i) => (
            <div key={i} className="relative z-10 bg-[#050505] p-8 border border-white/5 rounded-3xl hover:border-[#FF8A00] transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center mb-8 group-hover:bg-[#FF8A00] group-hover:text-black transition-all">
                <span className="font-black">0{i+1}</span>
              </div>
              <h4 className="text-[#FF8A00] font-black text-[11px] uppercase tracking-[0.3em] mb-4">{step.year}</h4>
              <h5 className="text-xl font-black mb-4 uppercase leading-none">{step.title}</h5>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide: Riesgos & Mitigación */}
      <section>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 uppercase tracking-tight text-center">{content.deck.risks.title}</h2>
        <div className="grid grid-cols-1 gap-4">
          {content.deck.risks.items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all">
              <div className="w-full md:w-1/4">
                <p className="text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.category}</p>
                <p className="text-xl font-black uppercase leading-none">{item.risk}</p>
              </div>
              <div className="flex-1 md:pl-12 md:border-l border-white/10">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{lang === 'es' ? 'MITIGACIÓN' : 'MITIGATION'}</p>
                <p className="text-lg font-bold text-gray-300">{item.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 12: Tesis de Inversión (White Premium) */}
      <section className="bg-white p-16 md:p-24 rounded-[4rem] text-black shadow-3xl relative overflow-hidden group">
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF8A00] opacity-10 blur-[80px] rounded-full"></div>
        <h2 className="text-3xl md:text-6xl font-black mb-16 uppercase tracking-tighter leading-none">
          {lang === 'es' ? 'Tesis de Inversión' : 'Investment Thesis'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {content.deck.thesis.map((t, i) => (
            <div key={i} className="flex gap-8 items-start group/item">
              <div className="w-14 h-14 rounded-[1.25rem] bg-black flex items-center justify-center text-[#FF8A00] font-black text-2xl shrink-0 transition-all group-hover/item:scale-110 shadow-lg">
                {i + 1}
              </div>
              <p className="text-xl font-black leading-tight tracking-tight uppercase">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide 13: Cierre & CTA Final */}
      <section className="text-center py-32 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-20 uppercase tracking-tighter leading-none">
            {lang === 'es' ? '¿Construimos juntos el estándar europeo?' : 'Building the European standard together?'}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-24">
            <div className="text-center">
              <p className="text-[11px] text-gray-600 font-black uppercase tracking-[0.5em] mb-4">Founder & CEO</p>
              <p className="text-2xl font-black text-white">{VAULTBIT_SHARED.founder.name}</p>
              <p className="text-[#FF8A00] font-bold text-sm tracking-widest">{VAULTBIT_SHARED.founder.email}</p>
            </div>
            <div className="w-px h-20 bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-[11px] text-gray-600 font-black uppercase tracking-[0.5em] mb-4">Contact</p>
              <p className="text-2xl font-black text-white">{VAULTBIT_SHARED.founder.phone}</p>
              <p className="text-gray-500 font-bold text-sm tracking-widest">Barcelona, Spain</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10">
            <a 
              href={VAULTBIT_SHARED.roundtableLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-[#FF8A00] text-black font-black px-20 py-8 rounded-full text-sm uppercase tracking-[0.3em] hover:bg-white transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(255,138,0,0.4)] hover:scale-105"
            >
              {lang === 'es' ? 'ACCEDER A ROUNDTABLE' : 'ACCESS ROUNDTABLE'}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <p className="text-gray-600 text-[11px] font-black uppercase tracking-[0.4em] opacity-40">
              {lang === 'es' ? 'SPV Profesional Gestionado por Roundtable.eu' : 'Professional SPV Managed by Roundtable.eu'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PitchDeck;
