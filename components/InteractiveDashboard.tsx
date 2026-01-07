
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
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-24 font-host w-full">
      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {content.market.map((m, idx) => (
          <div key={idx} className="glass-card border border-white/10 p-8 md:p-10 rounded-2xl md:rounded-3xl relative overflow-hidden group hover:border-[#FF8A00] transition-all duration-500">
            <p className="text-gray-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6">{m.label}</p>
            <p className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tighter">{m.value}</p>
            <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">{m.description}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-black border border-white/10 p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-4xl font-black text-white mb-2 md:mb-3 uppercase tracking-tighter">{content.dashboard.chartTitle}</h3>
            <p className="text-[9px] md:text-[10px] text-gray-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{content.dashboard.chartSub}</p>
          </div>
          <div className="flex gap-4 md:gap-8 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] bg-white/[0.03] px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-white/5">
            <div className="flex items-center gap-1.5 md:gap-2"><span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF8A00]"></span> {content.dashboard.chartRevenue}</div>
            <div className="flex items-center gap-1.5 md:gap-2"><span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white opacity-30"></span> {content.dashboard.chartEbitda}</div>
          </div>
        </div>
        <div className="h-[250px] sm:h-[350px] md:h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PROJECTION_DATA} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8A00" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#FF8A00" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#111" vertical={false} />
              <XAxis dataKey="name" stroke="#333" fontSize={8} tickLine={false} axisLine={false} tick={{fill: '#444', fontWeight: 900}} />
              <YAxis stroke="#333" fontSize={8} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} tick={{fill: '#444', fontWeight: 900}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #FF8A00', borderRadius: '8px', color: '#fff' }} 
                itemStyle={{ fontSize: '9px', fontWeight: 900, textTransform: 'uppercase' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#FF8A00" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
              <Area type="monotone" dataKey="ebitda" stroke="#FFFFFF" fill="#FFFFFF" fillOpacity={0.01} strokeWidth={1} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* simplified investment */}
      <div className="bg-white/5 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/10 text-center space-y-6 md:space-y-8">
        <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter">{content.dashboard.capexTitle}</h3>
        <p className="text-gray-400 text-xs md:text-lg font-bold uppercase tracking-widest leading-relaxed max-w-4xl mx-auto">
          {lang === 'es' 
            ? 'La inversión total de 1.100.000 € garantiza la creación de infraestructura crítica certificada Grado VII.' 
            : 'The total €1,100,000 investment ensures the creation of Grade VII certified critical infrastructure.'}
        </p>
        <div className="inline-block px-8 md:px-12 py-3 md:py-5 bg-[#FF8A00] text-black rounded-xl md:rounded-2xl font-black text-base md:text-2xl uppercase tracking-widest shadow-lg shadow-[#FF8A00]/20">
           1.1M €
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
