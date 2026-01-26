import React, { useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { SectionHeader } from '../components/SectionHeader';
import { Logo } from '../components/Logo';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { client, urlFor } from '../src/client';
import { ArrowRight, Database, Layout } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
      <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      {/* Professional Title Tag */}
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[14px] uppercase mb-2 flex items-center">
        Product Analytics &amp; Operations Lead
      </p>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-sumiInk leading-tight mt-2 mb-6 tracking-tight">
        Jason Kester Hanani
      </h2>

      {/* The Body Copy */}
      <p className="text-xl md:text-2xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16 mt-2">
        6+ years across product analytics, operations, and systems design — delivering €1.5M+ in quantified impact across e-commerce and logistics.
        Designing data-driven systems that turn operational complexity into measurable business outcomes.
      </p>

      <div className="flex flex-wrap gap-8">
        <Link
          href="/evidence"
          className="px-10 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          Explore the Evidence
        </Link>
        <Link
          href="/framework"
          className="px-10 py-5 border-0.5 border-hankoRust text-hankoRust text-[10px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          View The Blueprint
        </Link>
      </div>
    </div>
  </section>
);

const SystemicResilience: React.FC = () => (
  <section className="bg-sumiInk text-ricePaper py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-hankoRust/5 skew-x-12 transform origin-top-right pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="text-5xl font-serif mb-8 leading-tight">
          <span className="italic text-foxOrange">Reality</span> over <br />
          <span className="text-ricePaper/50">Theory.</span>
        </h2>
        <p className="text-lg text-ricePaper/70 leading-relaxed mb-8 max-w-md">
          You cannot optimize what you do not understand. Most teams burn cash fixing the wrong problems. I prioritize <strong>Operational Truth</strong>—mapping the territory before engineering the cure.
        </p>
        
        <div className="bg-hankoRust/20 border border-hankoRust/30 p-6 inline-block backdrop-blur-sm">
          <span className="block text-4xl font-serif font-bold text-foxOrange mb-1">€1.5M+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Quantified Impact Recovered</span>
        </div>
      </div>

      <div className="space-y-12 border-l border-ricePaper/10 pl-12">
        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">Inventory and fee structure redesign</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            €520K annual cost savings
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">Exchange and return flow redesign</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            €695K revenue preserved
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">Cross-border assortment and delivery alignment</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            sell-through improvement across markets
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">Routing and sorting system redesign</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            60% reduction in route activation lead time
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ExecutionTracks: React.FC = () => (
  <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto bg-ricePaper">
    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Engine 1: The Investigator */}
      <div className="p-12 md:p-20 border-0.5 border-hankoRust/20 bg-white relative group hover:border-hankoRust/60 transition-all duration-500 hover:shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-hankoRust transition-opacity opacity-100" />
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Database size={80} /></div>

        <h3 className="text-4xl font-serif mb-8 text-sumiInk">How I Work</h3>
        <p className="text-lg text-sumiInk/70 font-serif leading-relaxed mb-12">
          I operate at the intersection of data analysis, systems design, and cross-functional execution.
        </p>
        <ul className="space-y-4 mb-12">
          {['Designing how systems and processes should work', 'Translating requirements into decision-ready solutions', 'Aligning stakeholders around constraints and trade-offs', 'Optimizing for durability, not short-term output'].map((s) => (
            <li key={s} className="flex items-center text-xs font-bold uppercase tracking-widest text-sumiInk/40">
              <span className="w-4 h-[1px] bg-hankoRust/30 mr-3" /> {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Engine 2: The Architect */}
      <div className="p-12 md:p-20 border-0.5 border-hankoRust/20 bg-white relative group hover:border-hankoRust/60 transition-all duration-500 hover:shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-foxOrange transition-opacity opacity-100" />
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Layout size={80} /></div>

        <h3 className="text-4xl font-serif mb-8 text-sumiInk">Focus Areas</h3>
        <p className="text-lg text-sumiInk/70 font-serif leading-relaxed mb-12">
          {/* Intentionally concise to keep focus on list below */}
        </p>
        <ul className="space-y-4 mb-12">
          {['Product and operational analytics', 'Process and system-level solution design', 'Cross-functional execution in high-ambiguity environments', 'Multi-market and platform-scale operations'].map((s) => (
            <li key={s} className="flex items-center text-xs font-bold uppercase tracking-widest text-sumiInk/40">
              <span className="w-4 h-[1px] bg-foxOrange/30 mr-3" /> {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

interface Article {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: any;
  isFeatured?: boolean;
  category?: string;
  series?: string;
  tags?: string[];
}

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  const normalizedArticles = useMemo(() => {
    return articles.map((a, idx) => {
      const dateStr = a.publishedAt || new Date().toISOString();
      const dateObj = new Date(dateStr);

      return {
        ...a,
        id: a.slug || `post-${idx}`,
        slug: a.slug || `post-${idx}`,
        tags: Array.isArray(a.tags) ? a.tags : [],
        category: a.category || 'Uncategorized',
        series: a.series || null,
        isFeatured: a.isFeatured === true,
        date: dateObj.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
        dateObj,
        image: a.mainImage ? urlFor(a.mainImage).width(800).url() : null,
        readTime: '5 min', // Default read time since we don't have body content at this level
      };
    });
  }, [articles]);

  return (
    <>
      <Head>
        <title>Jason Kester Hanani | Industrial Engineer & Systems Architect</title>
        <meta 
          name="description" 
          content="Industrial Engineer & Systems Architect. Reverse-engineering bottlenecks with deep diagnostics and first-principles thinking. €1.5M+ quantified impact." 
        />
        <meta property="og:title" content="Jason Kester Hanani - Systems Architect" />
        <meta property="og:description" content="Turning messy operations into clear systems." />
        <meta property="og:url" content="https://jasonkhanani.com/" />
        <link rel="canonical" href="https://jasonkhanani.com/" />
      </Head>
      
      <div className="animate-in fade-in duration-1000">
        <Hero />
        <SystemicResilience />
        <ExecutionTracks />

      {/* Recent Writing Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <SectionHeader
            eyebrow="Recent Writing"
            title="Latest Insights"
          />
          <Link
            href="/writing"
            className="text-sm font-bold tracking-wider uppercase text-hankoRust hover:text-foxOrange transition-colors flex items-center gap-2"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {normalizedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {normalizedArticles.map((article) => (
              <ArticlePreviewCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-sumiInk/50">No articles available yet.</div>
        )}
      </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const query = `*[_type == "article"
      && (
        !defined(status) || 
        status == "published" || 
        (status == "scheduled" && scheduledPublishDate <= now())
      )
    ] | order(publishedAt desc) [0...3] {
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage {
        asset,
        alt,
        caption,
        attribution,
        attributionUrl,
        "unsplashSource": asset->source,
        "unsplashDescription": asset->description
      },
      isFeatured,
      "category": category->title,
      "series": series->title,
      "tags": tags[]->title
    }`;

    const articles = await client.fetch(query);

    return {
      props: {
        articles: articles || [],
      },
      revalidate: 60, // Regenerate page every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
      },
      revalidate: 60, // Still revalidate on error
    };
  }
};
