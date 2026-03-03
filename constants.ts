
import { CaseStudy, ExperienceItem } from './types';

// Site configuration
export const SITE_DOMAIN = 'jasonkhanani.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-preservation',
    title: 'Return-to-Exchange Feature Launch',
    stealthTitle: 'Revenue Retention',
    details: [
      '**Context:** High return rates were driving revenue erosion and customer dissatisfaction in Indonesia.',
      '**Problem:** The existing workflow treated returns as a loss instead of a retention opportunity.',
      '**Decision:** Launched an exchange feature that surfaced alternative inventory options before refund processing. Coordinated rollout across marketplace, support, and operations teams.',
      '**Result:** Converted ~15% of returns into exchanges, preserving €695K in annual revenue.'
    ],
    impact: '€695K Revenue Preserved'
  },
  {
    id: 'network-reengineering',
    title: 'Cost-to-Serve Optimization',
    stealthTitle: 'Unit Economics',
    details: [
      '**Context:** Shipping fees were misaligned with underlying logistics costs, creating margin leakage across transactions.',
      '**Problem:** Flat discount logic failed to account for cost-per-kg structure, eroding unit economics.',
      '**Decision:** Executed a full cost diagnostic and margin sensitivity analysis. Redesigned shipping fee logic within system constraints to realign pricing with cost structure.',
      '**Result:** Delivered €520K in annual cost savings without degrading service levels.'
    ],
    impact: '€520K Annual Savings'
  },
  {
    id: 'support-automation',
    title: 'AI Support Automation',
    stealthTitle: 'AI Implementation',
    details: [
      '**Context:** Seller support coverage was limited to business hours, leading to SLA breaches and inefficient L1 handling.',
      '**Problem:** Human availability constrained response times and created backlog during peak periods.',
      '**Decision:** Led regional pilot of AI-powered chatbot integration. Defined KPIs, structured rollout plan, and monitored deflection performance.',
      '**Result:** Expanded support to 24/7 self-service coverage and achieved ~65% ticket deflection without additional headcount.'
    ],
    impact: '65% Ticket Deflection'
  },
  {
    id: 'logistics-optimization',
    title: 'Routing Automation Initiative',
    stealthTitle: 'Systems Design',
    details: [
      '**Context:** Route activation required manual configuration, creating a 5-day lead time and limiting network scalability.',
      '**Problem:** Manual setup dependencies introduced delays and operational bottlenecks.',
      '**Decision:** Designed and implemented a logic-based routing system with automated activation rules, removing manual configuration dependencies.',
      '**Result:** Reduced route activation lead time by 60% (5 days → 2 days), enabling faster network expansion.'
    ],
    impact: '60% Faster Activation'
  },
  {
    id: 'pmo-standardization',
    title: 'Global Onboarding Standardization',
    stealthTitle: 'Process Standardization',
    details: [
      '**Context:** Regional seller onboarding workflows were fragmented, creating cross-functional friction and avoidable support volume.',
      '**Problem:** Inconsistent processes across markets limited scalability and created operational confusion.',
      '**Decision:** Standardized regional onboarding into a unified global model. Clarified ownership boundaries and codified shared operating procedures.',
      '**Result:** Reduced cross-functional friction and support ticket volume, enabling scalable onboarding across markets.'
    ],
    impact: 'Unified Global Operating Model'
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
