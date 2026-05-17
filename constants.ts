
import { CaseStudy } from './types';

// Site configuration
export const SITE_DOMAIN = 'jasonkhanani.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-preservation',
    title: 'Return-to-Exchange Feature Launch',
    stealthTitle: 'Revenue Retention',
    diagnosis: 'Returns were treated as a cost center rather than a retention opportunity. The system made it easier for customers to get refunds than to discover alternative inventory that matched their original intent.',
    details: [
      '**Context:** High return rates were driving revenue erosion and customer dissatisfaction in Indonesia.',
      '**Problem:** The existing workflow treated returns as a loss instead of a retention opportunity.',
      '**Decision:** Coordinated the Indonesia rollout of an exchange feature that surfaced alternative inventory options before refund processing, aligning marketplace, support, and operations teams.',
      '**Result:** Converted ~15% of returns into exchanges, preserving €695K in revenue.'
    ],
    impact: '€695K Revenue Preserved',
    learned: 'The biggest wins come from reframing a problem from cost-cutting to opportunity creation — shifting from "how do we reduce return rates" to "how do we turn returns into retention".'
  },
  {
    id: 'network-reengineering',
    title: 'Cost-to-Serve Optimization',
    stealthTitle: 'Unit Economics',
    diagnosis: 'Flat discount logic was obscuring cost-to-serve variation. The platform was subsidizing unprofitable combinations of SKU weight and delivery distance without visibility into which transactions were destroying margin.',
    details: [
      '**Context:** Shipping fees were misaligned with underlying logistics costs, creating margin leakage across transactions.',
      '**Problem:** Flat discount logic failed to account for cost-per-kg structure, eroding unit economics at the SKU and lane level.',
      '**Decision:** Diagnosed logistics subsidy leakage via SKU and lane-level analysis. Redesigned shipping fee models to realign pricing with cost structure within system constraints.',
      '**Result:** Reduced annual costs by €520K without degrading service levels.'
    ],
    impact: '€520K Annual Savings',
    learned: 'The root cause was invisible in aggregate metrics. Breaking costs down to SKU and lane level revealed where the policy was most misaligned — and where fixing it would have the most impact.'
  },
  {
    id: 'support-automation',
    title: 'AI Support Automation',
    stealthTitle: 'AI Implementation',
    diagnosis: 'Human availability was the constraint, not question quality. The support team could answer seller questions well, but only during business hours. Bottlenecks appeared predictably outside those windows.',
    details: [
      '**Context:** Seller support coverage was limited to business hours, leading to SLA breaches and inefficient L1 handling.',
      '**Problem:** Human availability constrained response times and created backlog during peak periods.',
      '**Decision:** Integrated a third-party AI chatbot into seller support workflows via Intercom. Defined KPIs, structured the rollout plan, and monitored deflection performance across regions.',
      '**Result:** Achieved 68% ticket deflection and expanded coverage to 24/7 autonomous support without additional headcount.'
    ],
    impact: '68% Ticket Deflection',
    learned: 'Automation works best when it replaces a clear constraint (in this case, human availability) rather than trying to improve an already-good process. The 68% deflection came because the AI was solving the right problem.'
  },
  {
    id: 'handling-fee-design',
    title: 'Payment Handling Fee Design',
    stealthTitle: 'Pricing Architecture',
    diagnosis: 'The platform was absorbing payment processing costs while competitors had already shifted that burden to customers. The decision to introduce handling fees was correct, but the design needed to match customer expectations while maximizing margin recovery.',
    details: [
      '**Context:** Payment processing costs were fully absorbed by the platform while charging a handling fee had become standard practice across the e-commerce market, creating an unfavorable cost-income ratio.',
      '**Problem:** Introducing a handling fee risked customer churn if rates were misaligned with market norms. The design required balancing cost recovery against customer experience — including whether to differentiate fees by payment method.',
      '**Decision:** Modeled margin sensitivity and benchmarked handling fee structures across major regional platforms. Recommended a tiered structure with differentiated rates for standard and COD payments, staying within market range while recovering meaningful margin.',
      '**Result:** Projected €200K annual revenue uplift. Proposal went live after handover to successor team.'
    ],
    impact: '€200K Projected Revenue Uplift',
    learned: 'Market benchmarking moves the conversation from "should we charge?" to "what price is defensible?" It transforms a decision that feels arbitrary into one rooted in competitive reality.'
  },
  {
    id: 'logistics-optimization',
    title: 'Routing Automation Initiative',
    stealthTitle: 'Systems Design',
    diagnosis: 'Manual configuration was the bottleneck, not the number of nodes. Operations was handling route setup as a one-off process for each new location, with undocumented logic and interdependencies.',
    details: [
      '**Context:** Route activation required manual configuration, creating a 5-day lead time and limiting network scalability.',
      '**Problem:** Manual setup dependencies introduced delays and operational bottlenecks across a 130-node logistics network.',
      '**Decision:** Designed the logic-architecture for a new nationwide routing engine, partnering with engineering to implement automated activation rules and remove manual configuration dependencies.',
      '**Result:** Delivered a 60% reduction in activation lead time (5 days → 2 days), enabling faster network expansion.'
    ],
    impact: '60% Faster Activation',
    learned: 'The constraint wasn\'t technical complexity — it was undocumented business logic embedded in manual processes. Once we codified the rules, automation became straightforward.'
  },
  {
    id: 'pmo-standardization',
    title: 'Global Onboarding Standardization',
    stealthTitle: 'Process Standardization',
    diagnosis: 'Each market had reinvented onboarding independently, creating duplicate work and unclear ownership boundaries. Regional and local teams were doing overlapping work, resulting in unnecessary handoff friction and support escalations.',
    details: [
      '**Context:** Regional seller onboarding workflows were fragmented across 6 markets, creating cross-functional friction and avoidable support ticket volume.',
      '**Problem:** Inconsistent processes between regional and local teams limited scalability and created operational confusion.',
      '**Decision:** Designed and deployed a unified regional operating model, consolidating fragmented workflows into a single global system with clarified ownership boundaries and codified operating procedures.',
      '**Result:** Eliminated back-and-forth tickets between regional and local teams, enabling scalable onboarding across markets.'
    ],
    impact: 'Unified Global Operating Model',
    learned: 'Standardization doesn\'t kill local nuance — it clarifies where nuance is actually needed. Once you define the core process, regional customization becomes a conscious choice instead of accidental drift.'
  }
];

