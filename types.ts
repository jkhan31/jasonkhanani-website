
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
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  content: ContentBlock[];
}
