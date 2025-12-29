
export interface CaseStudy {
  id: string;
  title: string;
  stealthTitle: string;
  hook: string;
  persona: 'Investigator' | 'Architect' | 'Future';
  details: string[];
  impact: string;
}

export interface ExperienceItem {
  company: string;
  stealthCompany: string;
  role: string;
  period: string;
  tracks: ('Investigator' | 'Architect')[];
  bullets: string[];
}

export type ContentBlock = 
  | { type: 'paragraph'; value: string }
  | { type: 'heading'; value: string }
  | { type: 'callout'; value: string; label?: string }
  | { type: 'image'; url: string; caption?: string; alt?: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Article {
  // Guaranteed fields after normalization
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  series: string | null;
  tags: string[];
  date: string; // original date string (YYYY-MM-DD)
  dateObj: Date; // normalized Date instance for sorting
  isFeatured: boolean;

  // Image field with attribution
  mainImage?: {
    asset: any;
    alt?: string;
    caption?: string;
    attribution?: string;
    attributionUrl?: string;
  };

  // Preserve any existing content representation (markdown string from .md or structured blocks)
  content: string | ContentBlock[];
}
