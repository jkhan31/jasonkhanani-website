
import { CaseStudy, ExperienceItem } from './types';
export { ARTICLES } from './content/posts';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-recovery',
    title: 'ZALORA Marketplace Exchange',
    stealthTitle: 'Leading SE Asian E-commerce Platform',
    hook: 'Recovering €690K+ in leakage via SQL forensics and automated reconciliation.',
    persona: 'Investigator',
    impact: '€690K+ Recovered',
    details: [
      'Identified systematic reconciliation errors in marketplace exchange processes.',
      'Developed SQL-based forensic tools to trace transaction anomalies.',
      'Automated reconciliation workflows to prevent future leakage.'
    ]
  },
  {
    id: 'logistics-routing',
    title: 'Paxel Routing Engine',
    stealthTitle: 'Regional Logistics Startup',
    hook: 'Reducing fleet lead time by 60% through hub relocation and process re-engineering.',
    persona: 'Architect',
    impact: '60% Lead Time Reduction',
    details: [
      'Applied Industrial Engineering principles to redesign hub locations.',
      'Optimized routing algorithms to maximize fleet utilization.',
      'Reduced annual logistics operational costs by €520K.'
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Inkkeeper AI Pipeline',
    stealthTitle: 'AI Workflow Prototyping',
    hook: 'Architecting an AI-driven helpdesk to achieve 24/7 coverage with zero increase in headcount.',
    persona: 'Future',
    impact: '24/7 Operational Coverage',
    details: [
      'Integrated LLMs into existing customer support ticket flows.',
      'Designed automated classification and triage systems.',
      'Empowered agents to focus on complex diagnostics while AI handled repetitive tasks.'
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
