
import { CaseStudy } from './types';

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
      '**Decision:** Coordinated the Indonesia rollout of an exchange feature that surfaced alternative inventory options before refund processing, aligning marketplace, support, and operations teams.',
      '**Result:** Converted ~15% of returns into exchanges, preserving €695K in revenue.'
    ],
    impact: '€695K Revenue Preserved'
  },
  {
    id: 'network-reengineering',
    title: 'Cost-to-Serve Optimization',
    stealthTitle: 'Unit Economics',
    details: [
      '**Context:** Shipping fees were misaligned with underlying logistics costs, creating margin leakage across transactions.',
      '**Problem:** Flat discount logic failed to account for cost-per-kg structure, eroding unit economics at the SKU and lane level.',
      '**Decision:** Diagnosed logistics subsidy leakage via SKU and lane-level analysis. Redesigned shipping fee models to realign pricing with cost structure within system constraints.',
      '**Result:** Reduced annual costs by €520K without degrading service levels.'
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
      '**Decision:** Integrated a third-party AI chatbot into seller support workflows via Intercom. Defined KPIs, structured the rollout plan, and monitored deflection performance across regions.',
      '**Result:** Achieved 68% ticket deflection and expanded coverage to 24/7 autonomous support without additional headcount.'
    ],
    impact: '68% Ticket Deflection'
  },
  {
    id: 'handling-fee-design',
    title: 'Payment Handling Fee Design',
    stealthTitle: 'Pricing Architecture',
    details: [
      '**Context:** Payment processing costs were fully absorbed by the platform while charging a handling fee had become standard practice across the e-commerce market, creating an unfavorable cost-income ratio.',
      '**Problem:** Introducing a handling fee risked customer churn if rates were misaligned with market norms. The design required balancing cost recovery against customer experience — including whether to differentiate fees by payment method.',
      '**Decision:** Modeled margin sensitivity and benchmarked handling fee structures across major regional platforms. Recommended a tiered structure with differentiated rates for standard and COD payments, staying within market range while recovering meaningful margin.',
      '**Result:** Projected €200K annual revenue uplift. Proposal went live after handover to successor team.'
    ],
    impact: '€200K Projected Revenue Uplift'
  },
  {
    id: 'logistics-optimization',
    title: 'Routing Automation Initiative',
    stealthTitle: 'Systems Design',
    details: [
      '**Context:** Route activation required manual configuration, creating a 5-day lead time and limiting network scalability.',
      '**Problem:** Manual setup dependencies introduced delays and operational bottlenecks across a 130-node logistics network.',
      '**Decision:** Designed the logic-architecture for a new nationwide routing engine, partnering with engineering to implement automated activation rules and remove manual configuration dependencies.',
      '**Result:** Delivered a 60% reduction in activation lead time (5 days → 2 days), enabling faster network expansion.'
    ],
    impact: '60% Faster Activation'
  },
  {
    id: 'pmo-standardization',
    title: 'Global Onboarding Standardization',
    stealthTitle: 'Process Standardization',
    details: [
      '**Context:** Regional seller onboarding workflows were fragmented across 6 markets, creating cross-functional friction and avoidable support ticket volume.',
      '**Problem:** Inconsistent processes between regional and local teams limited scalability and created operational confusion.',
      '**Decision:** Designed and deployed a unified regional operating model, consolidating fragmented workflows into a single global system with clarified ownership boundaries and codified operating procedures.',
      '**Result:** Eliminated back-and-forth tickets between regional and local teams, enabling scalable onboarding across markets.'
    ],
    impact: 'Unified Global Operating Model'
  }
];

