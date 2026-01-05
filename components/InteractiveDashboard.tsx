
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PROJECTION_DATA, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const InteractiveDashboard: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-12 pb-32 font-host">
      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.market.map((m, idx) => (
          <div key={idx} className="bg-[#0D0D0D] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group hover:border-[#FF8A00] transition-all duration-500">
            <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.3em] mb-6">{m.label}</p>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{m.value}</p>
            <p className="text-[10px] text-gray-500 font-normal leading-relaxed uppercase tracking-wider">{m.description}</p>
          </div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Card */}
        <div className="bg-[#0D0D0D] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">{content.dashboard.chartTitle}</h3>
              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">{content.dashboard.chartSub}</p>
            </div>
            <div className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]"></span> {content.dashboard.chartRevenue}</div>
              <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-white opacity-20"></span> {content.dashboard.chartEbitda}</div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROJECTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF8A00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF8A00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#333" fontSize={9} tickLine={false} axisLine={false} tick={{fill: '#444', fontWeight: 700}} />
                <YAxis stroke="#333" fontSize={9} tickLine={false} axisLine={false} tickFormatter={(v) => `€${v/1000}k`} tick={{fill: '#444', fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '12px' }} 
                  itemStyle={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}
                  cursor={{stroke: '#FF8A00', strokeWidth: 1}}
                />
                <Area name={content.dashboard.chartRevenue} type="monotone" dataKey="revenue" stroke="#FF8A00" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                <Area name={content.dashboard.chartEbitda} type="monotone" dataKey="ebitda" stroke="#FFFFFF" fill="#FFFFFF" fillOpacity={0.02} strokeWidth={1.5} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 flex justify-between items-center bg-white/[0.02] p-4 rounded-2xl border border-white/5">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">{content.dashboard.chartNote}</p>
            <span className="text-[9px] bg-white/5 text-gray-400 px-3 py-1 rounded-full uppercase tracking-tighter">
              {lang === 'es' ? 'Fuente: Plan 2026' : 'Source: 2026 Plan'}
            </span>
          </div>
        </div>

        {/* CAPEX Card */}
        <div className="bg-[#0D0D0D] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-xl flex flex-col">
          <h3 className="text-xl font-extrabold text-white mb-2 uppercase tracking-tight">{content.dashboard.capexTitle}</h3>
          <p className="text-[9px] text-gray-600 mb-12 font-bold uppercase tracking-widest">{content.dashboard.capexSub}</p>
          <div className="space-y-10 flex-1">
            {content.deal.allocation.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category}</span>
                  <span className="text-[#FF8A00] font-extrabold text-2xl tracking-tighter">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-[#FF8A00] transition-all duration-1000 ease-out" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[8px] bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-lg text-gray-500 font-bold uppercase tracking-widest">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center sm:text-left">
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
              {lang === 'es' ? 'Basado en estándares de seguridad bancaria europea Grado VII.' : 'Based on Grade VII European banking security standards.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
