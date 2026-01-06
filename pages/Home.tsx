import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { Logo } from '../components/Logo';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { client, urlFor } from '../src/client';
import { fetchWithRetry } from '../lib/sanityErrorHandler';
import { ArrowRight, Database, Layout } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
      <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      {/* Professional Title Tag */}
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[14px] uppercase mb-2 flex items-center">
        INDUSTRIAL ENGINEER &bull; SYSTEMS ARCHITECT
      </p>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-sumiInk leading-tight mt-2 mb-6 tracking-tight">
        Jason Kester Hanani
      </h2>

      {/* Main Headline */}
      <h1 className="text-6xl md:text-8xl lg:text-7xl font-serif text-sumiInk leading-[0.95] mb-6 tracking-tight">
        Turning Messy Operations into <span className="italic text-foxOrange">Clear Systems</span>.
      </h1>

      {/* The Body Copy */}
      <p className="text-xl md:text-2xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16 mt-2">
        I reverse-engineer bottlenecks. Using deep diagnostics and first-principles thinking, I transform friction into flow.
      </p>

      <div className="flex flex-wrap gap-8">
        <Link
          to="/evidence"
          className="px-10 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          Explore the Evidence
        </Link>
        <Link
          to="/framework"
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
        {/* Point 1 */}
        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">1. Strategic Clarity</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            Growth creates fog. I identify the single structural bottleneck that actually matters to the bottom line, ignoring the noise of "busy work" and vanity metrics.
          </p>
        </div>
        {/* Point 2 */}
        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">2. Contextual Fit</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            A playbook is useless if it doesn't fit the terrain. I reject generic "best practices" in favor of solutions designed specifically for your team's culture and constraints.
          </p>
        </div>
        {/* Point 3 */}
        <div>
          <h3 className="text-xl font-serif text-foxOrange mb-3">3. Sustainable Velocity</h3>
          <p className="text-sm text-ricePaper/60 leading-relaxed">
            Burnout is an expensive system failure. I design workflows that respect human energy cycles, ensuring high performance doesn't accrue technical or cultural debt.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ExecutionTracks: React.FC = () => (
  <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto bg-ricePaper">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-serif text-sumiInk">Diagnostics & Design.</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Engine 1: The Investigator */}
      <div className="p-12 md:p-20 border-0.5 border-hankoRust/20 bg-white relative group hover:border-hankoRust/60 transition-all duration-500 hover:shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-hankoRust transition-opacity opacity-100" />
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Database size={80} /></div>

        <span className="text-hankoRust font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Engine 01</span>
        <h3 className="text-4xl font-serif mb-8 text-sumiInk">The Investigator</h3>
        <p className="text-lg text-sumiInk/70 font-serif leading-relaxed mb-12">
          <strong>"Why is this broken?"</strong><br />
          I bypass surface symptoms to find the root cause. Using data forensics and process mapping, I audit the system to identify the single lever that moves the mountain.
        </p>
        <ul className="space-y-4 mb-12">
          {['Constraint Analysis', 'Data-Level Audits', 'Workflow Mapping'].map((s) => (
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

        <span className="text-foxOrange font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Engine 02</span>
        <h3 className="text-4xl font-serif mb-8 text-sumiInk">The Architect</h3>
        <p className="text-lg text-sumiInk/70 font-serif leading-relaxed mb-12">
          <strong>"How do we scale this?"</strong><br />
          Once the leak is found, I build the pipe. I design the automations, the governance, and the culture codes that allow your team to run without you.
        </p>
        <ul className="space-y-4 mb-12">
          {['Standard Operating Procedures', 'Automation & Tooling', 'Knowledge Management'].map((s) => (
            <li key={s} className="flex items-center text-xs font-bold uppercase tracking-widest text-sumiInk/40">
              <span className="w-4 h-[1px] bg-foxOrange/30 mr-3" /> {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await fetchWithRetry(async () => {
        const query = `*[_type == "article"] | order(publishedAt desc) [0...3] {
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
        return await client.fetch(query);
      });

      if (result) {
        setArticles(result);
      }
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

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
      };
    });
  }, [articles]);

  return (
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
            to="/writing"
            className="text-sm font-bold tracking-wider uppercase text-hankoRust hover:text-foxOrange transition-colors flex items-center gap-2"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-sumiInk/50">Loading articles...</div>
        ) : normalizedArticles.length > 0 ? (
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
  );
}