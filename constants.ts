
import { CaseStudy, ExperienceItem } from './types';

// Site configuration
export const SITE_DOMAIN = 'jasonkhanani.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-preservation',
    title: 'Revenue Retention Architecture',
    stealthTitle: 'Financial Engineering',
    hook: 'A return isn\'t necessarily a loss; it\'s often just a request for a better fit. The system was designed to reject, when it should have been designed to recover.',
    details: [
      '**The Diagnostic:** Diagnosed a systemic revenue leak caused by high return rates. The existing workflow treated returns as a binary "loss" rather than a retention opportunity.',
      '**The Architecture:** Engineered a "Return-to-Exchange" conversion feature. Redesigned the user flow to frictionlessly offer inventory alternatives before processing refunds.',
      '**The Outcome:** Converted 15% of would-be returns into exchanges, strictly preserving €695K in annual revenue.'
    ],
    impact: '€695K Revenue Preserved'
  },
  {
    id: 'logistics-optimization',
    title: 'Routing Engine Architecture',
    stealthTitle: 'Systems Design',
    hook: 'Velocity is a function of logic. Hard-coding routing rules creates latency; automating them creates flow.',
    details: [
      '**The Diagnostic:** Route activation had a 5-day lead time due to manual setup processes, creating a bottleneck in network scalability.',
      '**The Architecture:** Designed "Planflow v2"—a logic-based routing system. Added an automation layer that programmatically determines package flow and routing permissions without manual intervention.',
      '**The Outcome:** Reduced route activation lead time by 60% (5 days to 2), enabling rapid network elasticity.'
    ],
    impact: '60% Faster Activation'
  },
  {
    id: 'network-reengineering',
    title: 'Cost-to-Serve Engineering',
    stealthTitle: 'DMAIC Protocol',
    hook: 'The "Silent Bleed" of a business is always found in the unit economics. You cannot scale a system with negative gross margins.',
    details: [
      '**The Diagnostic:** Shipping logistics fees were misaligned with actual cost-to-serve, creating a "Silent Bleed" on every unit sold.',
      '**The Architecture:** Executed a full DMAIC (Define, Measure, Analyze, Improve, Control) cycle. Redesigned the fee structure based on granular margin sensitivity analysis.',
      '**The Outcome:** Corrected the unit economics to save €520K annually without degrading service levels.'
    ],
    impact: '€520K Annual Savings'
  },
  {
    id: 'support-automation',
    title: 'Automated Support Layer',
    stealthTitle: 'AI Implementation',
    hook: 'Human empathy is a finite resource. It should be reserved for complex problems, not wasted on reciting FAQs.',
    details: [
      '**The Diagnostic:** The Seller Helpdesk was bottlenecked by human availability, creating SLA breaches outside of business hours.',
      '**The Architecture:** Deployed an AI-driven support automation layer. Mapped the "Ticket Deflection" logic to handle L1 queries autonomously 24/7.',
      '**The Outcome:** Achieved a 60% deflection rate, effectively removing the noise so human agents could focus purely on high-complexity resolution.'
    ],
    impact: '60% Ticket Deflection'
  },
  {
    id: 'pmo-standardization',
    title: 'Global Workflow Unification',
    stealthTitle: 'Process Architecture',
    hook: 'Fragmentation is friction. A distributed team cannot run on local dialects; it needs a global protocol to ensure interoperability.',
    details: [
      '**The Diagnostic:** Regional onboarding workflows were fragmented, leading to high cross-functional friction and a flood of avoidable support tickets.',
      '**The Architecture:** Standardized disparate regional processes into a single Unified Global System. Built and codified the Global SOP (Standard Operating Procedure) to enforce consistency.',
      '**The Outcome:** Drastically reduced cross-functional friction and support ticket volume, creating a scalable onboarding pipeline.'
    ],
    impact: 'Unified Global Protocol'
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
