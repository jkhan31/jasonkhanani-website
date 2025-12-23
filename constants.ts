
import { CaseStudy, ExperienceItem } from './types';
export { ARTICLES } from './lib/posts';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-preservation',
    title: 'Revenue Preservation',
    stealthTitle: 'Global E-commerce Marketplace',
    hook: 'The Challenge — Returns were bleeding revenue without structured diagnostics.',
    persona: 'Investigator',
    impact: '€700K',
    details: [
      'The Challenge: High return rates were masking underlying friction points in the customer journey, leading to significant revenue loss.',
      'The Diagnostic: Conducted SQL forensics to trace return patterns and identified systematic issues in the exchange process.',
      'Outcome Impact: Engineered an optimized exchange model that preserved €700K in annual revenue.'
    ]
  },
  {
    id: 'logistics-optimization',
    title: 'Logistics Optimization',
    stealthTitle: 'Regional Logistics Network',
    hook: 'The Challenge — Third-party logistics billing discrepancies were creating operational opacity.',
    persona: 'Investigator',
    impact: '€500K',
    details: [
      'The Challenge: Inconsistent 3PL billing created financial uncertainty and operational inefficiency across the distribution network.',
      'The Diagnostic: Applied SQL-based forensics to audit billing records and trace systematic discrepancies in logistics partner invoicing.',
      'Outcome Impact: Recovered and prevented future losses totaling € through data-driven reconciliation.'
    ]
  },
  {
    id: 'network-reengineering',
    title: 'Network Re-Engineering',
    stealthTitle: 'Multi-Node Distribution Network',
    hook: 'The Challenge — Delivery lead times were exceeding competitive benchmarks by 40%.',
    persona: 'Architect',
    impact: '60% Gain',
    details: [
      'The Challenge: Suboptimal hub placement and routing protocols were creating delivery delays and customer dissatisfaction.',
      'The Diagnostic: Analyzed geospatial distribution patterns and applied industrial engineering principles to identify ideal hub locations.',
      'Outcome Impact: Relocated 7 strategic hubs, achieving a 60% reduction in delivery lead time.'
    ]
  },
  {
    id: 'support-automation',
    title: 'Support Automation',
    stealthTitle: 'E-commerce Support Operations',
    hook: 'The Challenge — Support volume was scaling faster than team capacity.',
    persona: 'Architect',
    impact: '40% Reduction',
    details: [
      'The Challenge: Repetitive customer inquiries were consuming agent bandwidth and slowing response times on complex issues.',
      'The Diagnostic: Mapped customer journey touchpoints and classified support ticket patterns to identify automation opportunities.',
      'Outcome Impact: Implemented targeted automation that reduced support volume by 40% while improving response quality.'
    ]
  },
  {
    id: 'pmo-standardization',
    title: 'PMO Standardization',
    stealthTitle: 'Multinational Corporate PMO',
    hook: 'The Challenge — Regional teams operated in silos with no unified project visibility.',
    persona: 'Architect',
    impact: '100% Visibility',
    details: [
      'The Challenge: Fragmented project management practices across regions created misalignment and resource inefficiencies.',
      'The Diagnostic: Audited existing workflows and designed a unified source-of-truth framework for cross-regional priorities.',
      'Outcome Impact: Achieved 100% portfolio visibility across all regional operations, enabling strategic resource allocation.'
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'ZALORA Group',
    stealthCompany: 'Top E-commerce Platform',
    role: 'Operations Analyst',
    period: '2021 - Present',
    tracks: ['Investigator', 'Architect'],
    bullets: [
      'Lead deep-dive diagnostics for revenue leakage (Investigator).',
      'Designed architectural blueprints for marketplace systems (Architect).',
      'Saved €695K in operational revenue through data-driven intervention.'
    ]
  },
  {
    company: 'Paxel',
    stealthCompany: 'Last-mile Logistics Firm',
    role: 'Product Operations Analyst',
    period: '2019 - 2021',
    tracks: ['Architect'],
    bullets: [
      'Engineered routing protocols for high-density delivery zones.',
      'Implemented Six Sigma methodologies to reduce waste by 15%.',
      'Redesigned warehouse layouts for optimized pick-path efficiency.'
    ]
  }
];
