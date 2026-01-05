
export type Language = 'es' | 'en';

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
}

export interface FinancialMetric {
  label: string;
  value: string;
  description: string;
}

export interface ChartData {
  name: string;
  revenue: number;
  ebitda: number;
}

export interface FundAllocation {
  category: string;
  percentage: number;
  details: string[];
}

export interface MarketMetric {
  label: string;
  value: string;
  description: string;
}

export interface VaultBitData {
  tagline: string;
  location: string;
  round: string;
  opportunity: string;
  problem: { title: string; desc: string }[];
  solution: { title: string; desc: string }[];
  deal: {
    target: string;
    instrument: string;
    valuationCap: string;
    allocation: FundAllocation[];
  };
  market: MarketMetric[];
  financials: FinancialMetric[];
  partners: { name: string; status: string }[];
  lounge: {
    badge: string;
    title: string;
    description: string;
    button: string;
  };
  dashboard: {
    label: string;
    title: string;
    chartTitle: string;
    chartSub: string;
    chartRevenue: string;
    chartEbitda: string;
    chartNote: string;
    capexTitle: string;
    capexSub: string;
  };
  footer: {
    confidential: string;
    rights: string;
  };
}
