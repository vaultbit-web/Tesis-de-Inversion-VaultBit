
import { Language, VaultBitData, RoadmapItem, ChartData } from './types';

export const TRANSLATIONS: Record<Language, VaultBitData> = {
  es: {
    tagline: "Infraestructura Crítica para la Custodia de Activos Digitales",
    location: "Barcelona, España",
    round: "Pre-Seed Round",
    opportunity: "VaultBit se posiciona como el primer operador europeo de infraestructura física Grado VII especializado en la custodia de llaves privadas y activos digitales. Resolvemos el 'Trilema de la Custodia' mediante un modelo de SaaS Físico ('Storage-as-a-Service') escalable, con márgenes operativos del 60% y barreras de entrada inexpugnables, diseñado para liderar la era post-MiCA.",
    problem: [
      { title: "Vulnerabilidad Física", desc: "El 23% de todo el Bitcoin está perdido para siempre. Robos en domicilios y pérdida de hardware wallets." },
      { title: "Riesgo Sistémico", desc: "Hacks a exchanges (FTX) y phishing avanzado que comprometen la custodia digital." },
      { title: "Herencia Bloqueada", desc: "Inexistencia de protocolos legales efectivos para la transmisión de patrimonio digital." }
    ],
    solution: [
      { title: "Grado VII (EN 1143-1)", desc: "Estándar de Banco Central. Resistencia extrema a lanza térmica y explosivos." },
      { title: "Total Air-Gap", desc: "Aislamiento físico absoluto de internet. Inmune a hackeos remotos y exploits." },
      { title: "Partner: Ferrimax", desc: "Alianza con el líder mundial en seguridad física bancaria para el despliegue técnico." }
    ],
    deal: {
      target: "€1,100,000",
      instrument: "BSA AIR",
      valuationCap: "€6,000,000",
      allocation: [
        { category: "CAPEX Técnico", percentage: 70, details: ["Bóveda Grado VII", "Módulos Cajas", "Blindaje", "Biometría"] },
        { category: "Runway Operativo", percentage: 20, details: ["OPEX 12 meses", "Seguridad", "Staff"] },
        { category: "GTM & Marketing", percentage: 10, details: ["Marketing B2B", "Reserva MiCA"] }
      ]
    },
    market: [
      { label: "Usuarios Cripto España", value: "4M+", description: "Mercado SAM impulsado por la regulación MiCA." },
      { label: "Usuarios Cripto EU", value: "96M", description: "Base total de usuarios potenciales en Europa." },
      { label: "TAM Estimado", value: "€1.4B", description: "Valor total del mercado de custodia premium." }
    ],
    financials: [
      { label: "Margen EBITDA", value: "60%", description: "Alta rentabilidad operativa recurrente." },
      { label: "Ingresos Anuales", value: "€726k", description: "Proyección por sede (Sede Barcelona al 100%)." },
      { label: "Breakeven", value: "40%", description: "Punto de equilibrio bajo por sede." }
    ],
    partners: [
      { name: "Mitjans Advocats", status: "confirmed" },
      { name: "BitBase", status: "interest" },
      { name: "Ecija Crypto", status: "confirmed" },
      { name: "Prosegur Crypto", status: "interest" },
      { name: "Ferrimax", status: "strategic" }
    ],
    lounge: {
      badge: "Acceso Exclusivo para Inversores",
      title: "Comunidad Privada VaultBit",
      description: "Accede a nuestra comunidad exclusiva en Telegram donde compartimos actualizaciones semanales, análisis del mercado MiCA e información privilegiada sobre el despliegue de infraestructura física.",
      button: "Entrar en la Comunidad"
    },
    dashboard: {
      label: "Solo Datos Internos",
      title: "Dashboard de Inversión Profunda",
      chartTitle: "Crecimiento Multisede",
      chartSub: "Escalabilidad operativa proyectada 2026 - 2030.",
      chartRevenue: "Ingresos",
      chartEbitda: "EBITDA",
      chartNote: "Modelo validado para apertura anual de sedes estratégicas post-Sede Barcelona.",
      capexTitle: "Desglose Técnico CAPEX",
      capexSub: "Asignación de capital para infraestructura Grado VII (Sede 1)."
    },
    footer: {
      confidential: "DOCUMENTO ESTRICTAMENTE CONFIDENCIAL • PLAN DE NEGOCIO 2026 • BARCELONA • PROHIBIDA SU DISTRIBUCIÓN",
      rights: "© 2026 VaultBit Custody S.L. Todos los derechos reservados."
    }
  },
  en: {
    tagline: "Critical Infrastructure for Digital Asset Custody",
    location: "Barcelona, Spain",
    round: "Pre-Seed Round",
    opportunity: "VaultBit is positioned as the first European Tier VII physical infrastructure operator specialized in the custody of private keys and digital assets. We solve the 'Custody Trilemma' through a scalable Physical SaaS ('Storage-as-a-Service') model, with 60% operating margins and impregnable entry barriers, designed to lead the post-MiCA era.",
    problem: [
      { title: "Physical Vulnerability", desc: "23% of all Bitcoin is lost forever. Home thefts and hardware wallet losses." },
      { title: "Systemic Risk", desc: "Exchange hacks (FTX) and advanced phishing compromising digital custody." },
      { title: "Locked Inheritance", desc: "Lack of effective legal protocols for digital wealth transmission." }
    ],
    solution: [
      { title: "Grade VII (EN 1143-1)", desc: "Central Bank Standard. Extreme resistance to thermal lances and explosives." },
      { title: "Total Air-Gap", desc: "Absolute physical isolation from internet. Immune to remote hacks and exploits." },
      { title: "Partner: Ferrimax", desc: "Alliance with the global leader in physical bank security for technical deployment." }
    ],
    deal: {
      target: "€1,100,000",
      instrument: "BSA AIR",
      valuationCap: "€6,000,000",
      allocation: [
        { category: "Technical CAPEX", percentage: 70, details: ["Grade VII Vault", "Module Units", "Armoring", "Biometrics"] },
        { category: "Operating Runway", percentage: 20, details: ["OPEX 12 months", "Security", "Staff"] },
        { category: "GTM & Marketing", percentage: 10, details: ["B2B Marketing", "MiCA Reserve"] }
      ]
    },
    market: [
      { label: "Spain Crypto Users", value: "4M+", description: "SAM Market driven by MiCA regulation." },
      { label: "EU Crypto Users", value: "96M", description: "Total potential user base in Europe." },
      { label: "Estimated TAM", value: "€1.4B", description: "Total addressable market for premium custody." }
    ],
    financials: [
      { label: "EBITDA Margin", value: "60%", description: "High recurring operating profitability." },
      { label: "Annual Revenue", value: "€726k", description: "Projection per branch (Barcelona at 100%)." },
      { label: "Breakeven", value: "40%", description: "Low break-even point per branch." }
    ],
    partners: [
      { name: "Mitjans Advocats", status: "confirmed" },
      { name: "BitBase", status: "interest" },
      { name: "Ecija Crypto", status: "confirmed" },
      { name: "Prosegur Crypto", status: "interest" },
      { name: "Ferrimax", status: "strategic" }
    ],
    lounge: {
      badge: "Exclusive Investor Access",
      title: "VaultBit Private Community",
      description: "Access our exclusive Telegram community where we share weekly updates, MiCA market analysis, and insider information on physical infrastructure deployment.",
      button: "Enter Community"
    },
    dashboard: {
      label: "Internal Data Only",
      title: "Deep Dive Investor Dashboard",
      chartTitle: "Multi-Location Growth",
      chartSub: "Projected operational scalability 2026 - 2030.",
      chartRevenue: "Revenue",
      chartEbitda: "EBITDA",
      chartNote: "Validated model for annual strategic branch openings post-Barcelona.",
      capexTitle: "Technical CAPEX Breakdown",
      capexSub: "Capital allocation for Grade VII infrastructure (Branch 1)."
    },
    footer: {
      confidential: "STRICTLY CONFIDENTIAL DOCUMENT • BUSINESS PLAN 2026 • BARCELONA • DISTRIBUTION PROHIBITED",
      rights: "© 2026 VaultBit Custody S.L. All rights reserved."
    }
  }
};

export const VAULTBIT_SHARED = {
  name: "VaultBit",
  website: "www.vaultbit.es",
  communityLink: "https://t.me/+L0jB1FwdNT5iZGE8",
  founder: {
    name: "Daniel Brosed Giral",
    role: "Founder & CEO",
    email: "danielbrosed@vaultbit.es",
    phone: "+34 652 04 74 03"
  }
};

export const ROADMAP: Record<Language, RoadmapItem[]> = {
  es: [
    { quarter: "Q1 2026", title: "Cierre Ronda", description: "Finalización de financiación y licencias regulatorias." },
    { quarter: "Q2 2026", title: "Obra Civil", description: "Construcción de bóveda y adecuación del local." },
    { quarter: "Q3 2026", title: "Certificación", description: "Inspección Grado VII y Launch oficial." },
    { quarter: "Q4 2026", title: "Breakeven", description: "Alcance del equilibrio operativo en Sede 1." }
  ],
  en: [
    { quarter: "Q1 2026", title: "Round Closure", description: "Financing completion and regulatory licenses." },
    { quarter: "Q2 2026", title: "Civil Works", description: "Vault construction and premises adaptation." },
    { quarter: "Q3 2026", title: "Certification", description: "Grade VII inspection and official Launch." },
    { quarter: "Q4 2026", title: "Breakeven", description: "Reaching operating break-even in Sede 1." }
  ]
};

export const PROJECTION_DATA: ChartData[] = [
  { name: '2026', revenue: 472000, ebitda: 182000 },
  { name: '2027', revenue: 726000, ebitda: 435000 },
  { name: '2028', revenue: 1450000, ebitda: 870000 },
  { name: '2029', revenue: 2170000, ebitda: 1300000 },
  { name: '2030', revenue: 3200000, ebitda: 1920000 },
];
