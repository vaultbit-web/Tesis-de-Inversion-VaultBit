
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
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 md:space-y-12 pb-20 font-inter">
      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.market.map((m, idx) => (
          <div key={idx} className="bg-[#0D0D0D] border border-gray-800 p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-[#FF8A00] transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8A00] opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity"></div>
            <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">{m.label}</p>
            <p className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{m.value}</p>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projections Expansion 5 Years */}
        <div className="bg-[#0A0A0A] border border-gray-800 p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent opacity-50"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">{content.dashboard.chartTitle}</h3>
              <p className="text-xs md:text-sm text-gray-500 font-medium">{content.dashboard.chartSub}</p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-[9px] md:text-[11px] font-bold uppercase tracking-widest border-b border-gray-800 pb-2">
              <div className="flex items-center gap-2"><span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#FF8A00] shadow-[0_0_10px_rgba(255,138,0,0.5)]"></span> {content.dashboard.chartRevenue}</div>
              <div className="flex items-center gap-2"><span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-white opacity-20"></span> {content.dashboard.chartEbitda}</div>
            </div>
          </div>
          <div className="h-[300px] md:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROJECTION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF8A00" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FF8A00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="name" stroke="#444" fontSize={10} tickLine={false} axisLine={false} tick={{fill: '#666', fontWeight: 600}} />
                <YAxis stroke="#444" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `€${v/1000}k`} tick={{fill: '#666'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050505', border: '1px solid #333', borderRadius: '12px', padding: '8px' }} 
                  itemStyle={{ fontSize: '11px', fontWeight: 600 }}
                  cursor={{stroke: '#FF8A00', strokeWidth: 1}}
                  labelStyle={{ color: '#FF8A00', fontWeight: 'bold', marginBottom: '4px', fontSize: '11px' }}
                />
                <Area name={content.dashboard.chartRevenue} type="monotone" dataKey="revenue" stroke="#FF8A00" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                <Area name={content.dashboard.chartEbitda} type="monotone" dataKey="ebitda" stroke="#FFFFFF" fill="#FFFFFF" fillOpacity={0.03} strokeWidth={2} strokeDasharray="8 8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[10px] md:text-[11px] text-gray-400 font-medium italic">{content.dashboard.chartNote}</p>
            <span className="text-[9px] md:text-[10px] bg-[#FF8A00]/20 text-[#FF8A00] px-3 py-1 rounded-full font-bold uppercase tracking-widest shrink-0">High Scalability</span>
          </div>
        </div>

        {/* Detailed CAPEX breakdown */}
        <div className="bg-[#0A0A0A] border border-gray-800 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col">
          <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">{content.dashboard.capexTitle}</h3>
          <p className="text-xs md:text-sm text-gray-500 mb-10 font-medium">{content.dashboard.capexSub}</p>
          <div className="space-y-6 md:space-y-8 flex-1">
            {content.deal.allocation.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-6 md:w-8 h-6 md:h-8 rounded-lg bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00] font-black text-[10px] md:text-xs">{idx + 1}</span>
                    <span className="text-xs md:text-base font-bold text-gray-200 uppercase tracking-widest">{item.category}</span>
                  </div>
                  <span className="text-[#FF8A00] font-black text-xl md:text-2xl tracking-tighter">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 md:h-3 bg-gray-900 rounded-full overflow-hidden border border-gray-800 shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-[#FF8A00] shadow-[0_0_20px_rgba(255,138,0,0.5)] transition-all duration-1000 ease-out" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
                  {item.details.map((detail, dIdx) => (
                    <span key={dIdx} className="text-[9px] md:text-[11px] bg-white/5 border border-white/10 px-2 md:px-3 py-1 rounded-full text-gray-400 font-medium hover:border-[#FF8A00]/50 transition-colors cursor-default">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-800">
             <div className="flex flex-col sm:flex-row items-center gap-4">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="Ferrimax" className="h-6 md:h-8 opacity-40 grayscale" />
                <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed font-medium text-center sm:text-left">
                  {lang === 'es' 
                    ? <>Partnership estratégico con <strong>Ferrimax</strong> asegura la mejor relación CAPEX/Calidad en infraestructura blindada EN 1143-1.</>
                    : <>Strategic partnership with <strong>Ferrimax</strong> ensures the best CAPEX/Quality ratio in EN 1143-1 armored infrastructure.</>
                  }
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
