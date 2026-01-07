
import React, { useState } from 'react';
import OnePager from './OnePager';
import InteractiveDashboard from './InteractiveDashboard';
import CapitalLoungeCTA from './CapitalLoungeCTA';
import PitchDeck from './PitchDeck';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface Props {
  lang: Language;
}

const InvestorPortal: React.FC<Props> = ({ lang }) => {
  const [view, setView] = useState<'overview' | 'deck'>('overview');
  const content = TRANSLATIONS[lang];

  return (
    <>
      {/* Sub-navigation for Investor Portal */}
      <div className="w-full flex justify-center py-8 bg-[#000000] sticky top-20 z-40 border-b border-white/5">
        <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
          <button 
            onClick={() => setView('overview')}
            className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'overview' ? 'bg-[#FF8A00] text-black shadow-lg shadow-[#FF8A00]/20' : 'text-gray-400 hover:text-white'}`}
          >
            {content.nav.overview}
          </button>
          <button 
            onClick={() => setView('deck')}
            className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === 'deck' ? 'bg-[#FF8A00] text-black shadow-lg shadow-[#FF8A00]/20' : 'text-gray-400 hover:text-white'}`}
          >
            {content.nav.deck}
          </button>
        </div>
      </div>

      <div className="w-full">
        {view === 'overview' ? (
          <>
            <OnePager lang={lang} />

            <section className="w-full max-w-[1400px] mx-auto px-6 py-24 border-t border-white/5">
              <CapitalLoungeCTA lang={lang} />
            </section>

            <section id="dashboard" className="w-full py-32 bg-[#050505] border-t border-white/5">
              <div className="max-w-6xl mx-auto px-6">
                <div className="mb-24 text-center">
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                      {content.dashboard.title}
                  </h2>
                  <p className="text-gray-500 uppercase tracking-widest font-bold text-xs">{content.dashboard.label}</p>
                </div>
                <InteractiveDashboard lang={lang} />
              </div>
            </section>
          </>
        ) : (
          <PitchDeck lang={lang} />
        )}
      </div>
    </>
  );
};

export default InvestorPortal;
