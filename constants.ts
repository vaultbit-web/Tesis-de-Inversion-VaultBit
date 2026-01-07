
import { Language, VaultBitData, RoadmapItem, ChartData } from './types';

export interface ExtendedVaultBitData extends VaultBitData {
  nav: { overview: string; deck: string };
  roundtableInfo: {
    title: string;
    spv: string;
    instrument: string;
    discount: string;
    cap: string;
    allocation: string;
    industry: string;
    location: string;
    valType: string;
  };
  competition: {
    title: string;
    subtitle: string;
    headers: string[];
    rows: {
      name: string;
      values: boolean[];
    }[];
  };
  ferrimax: {
    title: string;
    subtitle: string;
    features: { title: string; desc: string }[];
    certifications: string[];
  };
  deck: {
    intro: string;
    mission: string;
    vision: string;
    whyNow: {
      title: string;
      reasons: { title: string; desc: string }[];
    };
    unitEconomics: {
      title: string;
      metrics: { label: string; value: string; detail: string }[];
    };
    validation: {
      title: string;
      total: string;
      sectors: string[];
      legal: string[];
    };
    expansion: {
      title: string;
      subtitle: string;
      goal: string;
      steps: { year: string; title: string; desc: string }[];
    };
    risks: {
      title: string;
      items: { category: string; risk: string; mitigation: string }[];
    };
    thesis: string[];
  };
}

export const TRANSLATIONS: Record<Language, ExtendedVaultBitData> = {
  es: {
    nav: { overview: "ANÁLISIS ESTRATÉGICO", deck: "TESIS DE INVERSIÓN" },
    tagline: "El Estándar de Custodia Física Grado VII",
    location: "Barcelona, España",
    round: "PRE-SEED ROUND • ROUNDTABLE EXCLUSIVE",
    opportunity: "VaultBit es el primer operador europeo de infraestructura crítica Grado VII especializado en la custodia de activos digitales bajo estándares de banca central. Resolvemos la vulnerabilidad física mediante un modelo de 'Storage as a Service' (SaaS Físico) inexpugnable.",
    roundtableInfo: {
      title: "Información del Deal",
      spv: "SCSp Luxemburgo",
      instrument: "BSA AIR",
      discount: "20%",
      cap: "6.000.000 €",
      allocation: "1.100.000 €",
      industry: "Blockchain / Crypto / Web3",
      location: "España",
      valType: "Pre-Money"
    },
    competition: {
      title: "Posicionamiento Estratégico",
      subtitle: "Mientras el mercado ofrece soluciones parciales, VaultBit es el único proveedor europeo que combina seguridad física certificada con especialización cripto y un modelo escalable.",
      headers: ["Empresa", "Custodia Física", "Especialización Cripto", "Grado VII", "Privacidad", "Modelo Escalable"],
      rows: [
        { name: "VaultBit", values: [true, true, true, true, true] },
        { name: "Bancos", values: [true, false, true, false, false] },
        { name: "Exchanges", values: [false, true, false, false, true] },
        { name: "Empresas Seguridad", values: [true, false, false, false, false] },
        { name: "Custodios Digitales", values: [false, true, false, false, true] }
      ]
    },
    ferrimax: {
      title: "Pilar Tecnológico: Ferrimax",
      subtitle: "Acuerdo estratégico con el líder europeo en infraestructura de alta seguridad para la construcción de nuestros hubs.",
      features: [
        { title: "Blindaje Grado VII", desc: "Cámaras acorazadas y puertas certificadas EN 1143-1 con composites de altas prestaciones y armaduras térmicas." },
        { title: "Control FMX ACS", desc: "Sistema de gestión electrónica con biometría multicapa (facial, iris, mano) y auditoría total de accesos." },
        { title: "Seguridad Dual", desc: "Protocolo de llave prisionera y anulación manual de emergencia solo accesible bajo jerarquía institucional." }
      ],
      certifications: ["UNE-EN 1143-1 GRADO VII", "UNE-EN 1300 CLASE C", "SISTEMA FMX ACS"]
    },
    problem: [
      { title: "Fragilidad Digital", desc: "El software es hackeable. El hardware aislado es la única defensa real." },
      { title: "Error Humano", desc: "El 23% de Bitcoin está perdido por mala gestión de claves físicas." },
      { title: "Riesgo de Contraparte", desc: "Las instituciones exigen ahora custodia física soberana y desconectada." }
    ],
    solution: [
      { title: "Bóvedas Grado VII", desc: "Infraestructura certificada EN 1143-1 contra ataques térmicos." },
      { title: "Protocolo Air-Gap", desc: "Aislamiento total de la red. Si no está online, no existe riesgo remoto." },
      { title: "Soberanía de Acceso", desc: "El cliente mantiene el control total. Nosotros solo damos el blindaje." }
    ],
    deal: {
      target: "1.100.000 €",
      instrument: "BSA AIR",
      valuationCap: "6.000.000 €",
      allocation: [
        { category: "Infraestructura Crítica", percentage: 80, details: ["Construcción Hub 1 BCN", "Seguridad Activa"] },
        { category: "Escalado Estratégico", percentage: 20, details: ["GTM Institucional", "Licencias MiCA"] }
      ]
    },
    market: [
      { label: "Ocupación Breakeven", value: "40%", description: "Eficiencia operativa extrema." },
      { label: "Facturación por Hub", value: "726k €", description: "Ingreso anual recurrente proyectado." },
      { label: "Margen EBITDA", value: "60%", description: "Rentabilidad neta del SaaS Físico." }
    ],
    financials: [
      { label: "Inversión Total", value: "1.1M €", description: "Capital destinado a infraestructura y expansión." },
      { label: "Payback Proyectado", value: "1.7 Años", description: "Retorno de inversión técnica por sede." },
      { label: "Valuation Cap", value: "6.0M €", description: "Oportunidad Pre-Seed en Roundtable." }
    ],
    partners: [
      { name: "Ferrimax", status: "strategic" },
      { name: "Prosegur Crypto", status: "confirmed" },
      { name: "Roundtable", status: "strategic" },
      { name: "Ecija Crypto", status: "confirmed" }
    ],
    lounge: {
      badge: "COMUNIDAD PRIVADA",
      title: "Capital Lounge",
      description: "Únete a nuestro ecosistema exclusivo de inversores y fundadores en Telegram para recibir updates en tiempo real.",
      button: "UNIRSE AL TELEGRAM"
    },
    deck: {
      intro: "La Institucionalización de la Custodia de Activos Digitales.",
      mission: "Proteger de forma segura y confidencial las llaves privadas y dispositivos de custodia de criptoactivos mediante custodia física profesional.",
      vision: "Convertirnos en el referente europeo en custodia física de criptoactivos, con presencia en los principales hubs financieros.",
      whyNow: {
        title: "CONTEXTO ESTRATÉGICO",
        reasons: [
          { title: "Regulación MiCA", desc: "Exigencia inmediata de estándares bancarios para cripto-activos." },
          { title: "Fragilidad Software", desc: "Hackeos constantes demuestran que el código no es suficiente." },
          { title: "Demanda B2B", desc: "Family Offices e instituciones buscan resguardo físico soberano." }
        ]
      },
      unitEconomics: {
        title: "MODELO DE NEGOCIO",
        metrics: [
          { label: "Suscripción S/M/L", value: "121 €", detail: "Precio medio ponderado mensual por caja." },
          { label: "Ingresos Hub", value: "726.000 €", detail: "Facturación anual recurrente (100% Occ)." },
          { label: "EBITDA Hub", value: "436.000 €", detail: "Margen operativo neto tras estabilización (60%)." }
        ]
      },
      validation: {
        title: "TRACCIÓN Y PIPELINE",
        total: "+40 Entidades Institucionales",
        sectors: ["Banca Privada", "Exchanges Centralizados", "Gestoras de Patrimonio", "Family Offices", "Entidades MiCA-Ready"],
        legal: ["Notarías y Registradores", "Auditoras de Activos Digitales"]
      },
      expansion: {
        title: "PLAN DE EXPANSIÓN",
        subtitle: "ESTRATEGIA DE DESPLIEGUE POR ETAPAS",
        goal: "Objetivo: Red de custodia física líder en España y referencia en Europa.",
        steps: [
          { year: "Año 1-2", title: "Consolidación Sede Inicial", desc: "Barcelona Hub: Optimización de ocupación (objetivo ≥80%) y validación de protocolos operativos Grado VII." },
          { year: "Año 3", title: "Apertura Hub Nacional", desc: "Madrid/Lisboa: Réplica del modelo en mercados estratégicos con alta densidad de perfiles HNWI e institucionales." },
          { year: "Año 4-5", title: "Escalado Europeo", desc: "París/Berlín: Expansión a hubs financieros clave mediante acuerdos marco con proveedores y reducción de CAPEX unitario." },
          { year: "Año 6+", title: "Referencia Continental", desc: "Suiza/Londres: Consolidación como operador europeo de infraestructura crítica para la custodia soberana de activos." }
        ]
      },
      risks: {
        title: "GESTIÓN DE RIESGOS ESTRATÉGICOS",
        items: [
          { category: "Seguridad Física", risk: "Intrusión o Sabotaje", mitigation: "Cámaras Grado VII (EN 1143-1), monitorización 24/7 conectada a CRA y protocolos de respuesta inmediata." },
          { category: "Tecnológico", risk: "Fallo de Sistemas de Acceso", mitigation: "Redundancia multicapa en biometría, SAI/UPS online y protocolo de anulación manual jerárquica física." },
          { category: "Regulatorio", risk: "Cambios en MiCA / Seguridad", mitigation: "Gobernanza activa con asesoría legal especializada y diseño modular que permite adaptaciones técnicas rápidas." },
          { category: "Operativo", risk: "Retrasos en Licencias / Obras", mitigation: "Prevalidación técnica de locales, contratos llave en mano con penalizaciones por demora y localizaciones alternativas." },
          { category: "Financiero", risk: "Ocupación Inferior al Objetivo", mitigation: "Punto de equilibrio bajo (≈40%), estrategia de preventa B2B y reserva de liquidez para 12 meses de runway garantizado." },
          { category: "Mercado", risk: "Desaceleración Adopción Cripto", mitigation: "Posicionamiento como infraestructura defensiva de patrimonio, no dependiente de la volatilidad o ciclos del mercado." }
        ]
      },
      thesis: [
        "Oportunidad de inversión basada en infraestructura real, no en especulación",
        "Moat técnico inexpugnable certificado bajo estándares de banca central",
        "Modelo escalable de SaaS Físico con márgenes operativos del 60%",
        "Negocio de ingresos recurrentes y alta visibilidad en un sector en maduración"
      ]
    },
    dashboard: {
      label: "DATA ROOM",
      title: "Métricas Financieras",
      chartTitle: "Escalabilidad de Ingresos",
      chartSub: "Proyección basada en despliegue de sedes y ocupación.",
      chartRevenue: "Ingresos",
      chartEbitda: "EBITDA",
      chartNote: "Datos proyectados bajo escenario conservador de mercado.",
      capexTitle: "Inversión Estratégica",
      capexSub: "Capital destinado al despliegue de infraestructura crítica."
    },
    footer: {
      confidential: "DOCUMENTO CONFIDENCIAL • SOLO PARA INVERSORES ROUNDTABLE",
      rights: "© 2026 VaultBit Custody S.L. Todos los derechos reservados."
    }
  },
  en: {
    nav: { overview: "STRATEGIC ANALYSIS", deck: "INVESTMENT THESIS" },
    tagline: "The Standard for Grade VII Physical Custody",
    location: "Barcelona, Spain",
    round: "PRE-SEED ROUND • ROUNDTABLE EXCLUSIVE",
    opportunity: "VaultBit is the first European Grade VII critical infrastructure operator specialized in digital asset custody under central bank standards. We solve physical vulnerability through an impregnable €1,100,000 'Storage as a Service' model.",
    roundtableInfo: {
      title: "Deal Information",
      spv: "Luxembourg SCSp",
      instrument: "BSA AIR",
      discount: "20%",
      cap: "€6,000,000",
      allocation: "€1,100,000",
      industry: "Blockchain / Crypto / Web3",
      location: "Spain",
      valType: "Pre-Money"
    },
    competition: {
      title: "Strategic Positioning",
      subtitle: "While the market offers partial solutions, VaultBit is the only European provider combining certified physical security with crypto specialization and a scalable model.",
      headers: ["Company", "Physical Custody", "Crypto Specialized", "Grade VII", "Privacy", "Scalable Model"],
      rows: [
        { name: "VaultBit", values: [true, true, true, true, true] },
        { name: "Banks", values: [true, false, true, false, false] },
        { name: "Exchanges", values: [false, true, false, false, true] },
        { name: "Security Companies", values: [true, false, false, false, false] },
        { name: "Digital Custodians", values: [false, true, false, false, true] }
      ]
    },
    ferrimax: {
      title: "Technological Pillar: Ferrimax",
      subtitle: "Strategic partnership with the European leader in high-security infrastructure for building our hubs.",
      features: [
        { title: "Grade VII Armoring", desc: "Vaults and doors certified EN 1143-1 with high-performance composites and thermal armors." },
        { title: "FMX ACS Control", desc: "Electronic management system with multi-layer biometrics (facial, iris, hand) and full access auditing." },
        { title: "Dual Security", desc: "Prisoner key protocol and manual emergency override accessible only under institutional hierarchy." }
      ],
      certifications: ["UNE-EN 1143-1 GRADE VII", "UNE-EN 1300 CLASS C", "FMX ACS SYSTEM"]
    },
    problem: [
      { title: "Digital Fragility", desc: "Software is hackable. Isolated hardware is the only real defense." },
      { title: "Human Error", desc: "23% of Bitcoin is lost due to physical key mismanagement." },
      { title: "Counterparty Risk", desc: "Institutions now demand sovereign and offline physical custody." }
    ],
    solution: [
      { title: "Grade VII Vaults", desc: "EN 1143-1 certified infrastructure against thermal attacks." },
      { title: "Air-Gap Protocol", desc: "Total network isolation. If not online, no remote risk exists." },
      { title: "Access Sovereignty", desc: "The client maintains total control. We only provide the shielding." }
    ],
    deal: {
      target: "€1,100,000",
      instrument: "BSA AIR",
      valuationCap: "€6,000,000",
      allocation: [
        { category: "Critical Infra", percentage: 80, details: ["Hub 1 BCN Construction", "Active Security"] },
        { category: "Strategic Scaling", percentage: 20, details: ["Institutional GTM", "MiCA Licensing"] }
      ]
    },
    market: [
      { label: "Breakeven Occupancy", value: "40%", description: "Extreme operational efficiency." },
      { label: "Revenue per Hub", value: "€726k", description: "Projected annual recurring income." },
      { label: "EBITDA Margin", value: "60%", description: "Net profitability of Physical SaaS." }
    ],
    financials: [
      { label: "Total Investment", value: "€1.1M", description: "Capital destined for infrastructure and expansion." },
      { label: "Projected Payback", value: "1.7 Years", description: "Technical ROI per site." },
      { label: "Valuation Cap", value: "€6.0M", description: "Pre-Seed opportunity on Roundtable." }
    ],
    partners: [
      { name: "Ferrimax", status: "strategic" },
      { name: "Prosegur Crypto", status: "confirmed" },
      { name: "Roundtable", status: "strategic" },
      { name: "Ecija Crypto", status: "confirmed" }
    ],
    lounge: {
      badge: "PRIVATE COMMUNITY",
      title: "Capital Lounge",
      description: "Join our exclusive ecosystem of investors and founders on Telegram for real-time updates.",
      button: "JOIN TELEGRAM"
    },
    deck: {
      intro: "Institutionalizing Digital Asset Custody.",
      mission: "To securely and confidentially protect private keys and crypto-asset custody devices through professional physical custody.",
      vision: "To become the European reference in physical custody of crypto-assets, with a presence in major financial hubs.",
      whyNow: {
        title: "STRATEGIC CONTEXT",
        reasons: [
          { title: "MiCA Regulation", desc: "Immediate requirement of banking standards for crypto-assets." },
          { title: "Software Fragility", desc: "Constant hacks prove that code alone is not enough." },
          { title: "B2B Demand", desc: "Family Offices and institutions seek sovereign physical protection." }
        ]
      },
      unitEconomics: {
        title: "BUSINESS MODEL",
        metrics: [
          { label: "S/M/L Subscription", value: "€121", detail: "Weighted monthly average price per unit." },
          { label: "Hub Revenue", value: "€726,000", detail: "Annual recurring billing (100% Occ)." },
          { label: "Hub EBITDA", value: "€436,000", detail: "Net operating margin after stabilization (60%)." }
        ]
      },
      validation: {
        title: "TRACTION & PIPELINE",
        total: "+40 Institutional Entities",
        sectors: ["Private Banking", "Centralized Exchanges", "Asset Managers", "Family Offices", "MiCA-Ready Entities"],
        legal: ["Notaries & Registrars", "Digital Asset Auditors"]
      },
      expansion: {
        title: "EXPANSION PLAN",
        subtitle: "STAGED DEPLOYMENT STRATEGY",
        goal: "Goal: Leading physical custody network in Spain and reference in Europe.",
        steps: [
          { year: "Year 1-2", title: "Site Genesis", desc: "Barcelona Hub: Occupancy optimization (≥80% goal) and validation of Grade VII operational protocols." },
          { year: "Year 3", title: "National Activation", desc: "Madrid/Lisboa: Model replication in strategic markets with high HNWI and institutional density." },
          { year: "Year 4-5", title: "European Scaling", desc: "Paris/Berlin: Expansion to key financial hubs via framework agreements and unit CAPEX reduction." },
          { year: "Year 6+", title: "Continental Standard", desc: "Switzerland/London: Consolidation as European critical infrastructure operator for sovereign asset custody." }
        ]
      },
      risks: {
        title: "STRATEGIC RISK MANAGEMENT",
        items: [
          { category: "Physical Security", risk: "Intrusion or Sabotage", mitigation: "Grade VII Vaults (EN 1143-1), 24/7 CMS monitoring, and immediate response protocols." },
          { category: "Technological", risk: "Access System Failure", mitigation: "Multi-layer biometric redundancy, online UPS, and hierarchical physical override protocol." },
          { category: "Regulatory", risk: "Regulatory Framework Changes", mitigation: "Active governance with specialized legal counsel and modular technical design for fast adaptation." },
          { category: "Operational", risk: "License or Build Delays", mitigation: "Technical site pre-validation, turnkey contracts with delay penalties, and alternative locations." },
          { category: "Financial", risk: "Below Target Occupancy", mitigation: "Low breakeven (≈40%), B2B presale strategy, and liquidity reserve for 12 months runway." },
          { category: "Market", risk: "Slowing Crypto Adoption", mitigation: "Positioning as wealth infrastructure, independent of market volatility or specific asset cycles." }
        ]
      },
      thesis: [
        "Real infrastructure-based investment opportunity, not speculation",
        "Impregnable technical moat certified under central bank standards",
        "Scalable Physical SaaS model with 60% operating margins",
        "Recurring revenue business with high visibility in a maturing sector"
      ]
    },
    dashboard: {
      label: "DATA ROOM",
      title: "Financial Metrics",
      chartTitle: "Revenue Scalability",
      chartSub: "Projection based on site deployment and occupancy.",
      chartRevenue: "Revenue",
      chartEbitda: "EBITDA",
      chartNote: "Projected data under conservative market scenario.",
      capexTitle: "Strategic Investment",
      capexSub: "Capital destined for critical infrastructure deployment."
    },
    footer: {
      confidential: "CONFIDENTIAL DOCUMENT • ROUNDTABLE INVESTORS ACCESS ONLY",
      rights: "© 2026 VaultBit Custody S.L. All rights reserved."
    }
  }
};

export const VAULTBIT_SHARED = {
  name: "VaultBit",
  website: "www.vaultbit.es",
  appUrl: "app.vaultbit.es",
  communityLink: "https://t.me/+L0jB1FwdNT5iZGE8",
  roundtableLink: "https://app.roundtable.eu/i/cs4GsSmL", 
  founder: {
    name: "Daniel Brosed Giral",
    role: "Founder & CEO",
    email: "danielbrosed@vaultbit.es",
    phone: "+34 652 04 74 03"
  }
};

export const ROADMAP: Record<Language, RoadmapItem[]> = {
  es: [
    { quarter: "Q1 2026", title: "Cierre Ronda", description: "Financiación Roundtable." },
    { quarter: "Q2 2026", title: "Hub Barcelona", description: "Construcción Grado VII." },
    { quarter: "Q3 2026", title: "Apertura", description: "Certificación y GTM." },
    { quarter: "Q4 2026", title: "Escalado", description: "Expansión nacional." }
  ],
  en: [
    { quarter: "Q1 2026", title: "Round Close", description: "Roundtable financing." },
    { quarter: "Q2 2026", title: "BCN Hub", description: "Grade VII construction." },
    { quarter: "Q3 2026", title: "Opening", description: "Certification and GTM." },
    { quarter: "Q4 2026", title: "Scaling", description: "National expansion." }
  ]
};

export const PROJECTION_DATA: ChartData[] = [
  { name: '2026', revenue: 472000, ebitda: 182000 },
  { name: '2027', revenue: 726000, ebitda: 435000 },
  { name: '2028', revenue: 1450000, ebitda: 870000 },
  { name: '2029', revenue: 2170000, ebitda: 1300000 },
  { name: '2030', revenue: 3200000, ebitda: 1920000 },
];
