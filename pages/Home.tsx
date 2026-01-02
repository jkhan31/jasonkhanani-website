import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { AxisMarker } from '../components/AxisMarker';
import { Logo } from '../components/Logo';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { client, urlFor } from '../src/client';
import { fetchWithRetry } from '../lib/sanityErrorHandler';
import { ArrowRight, Globe, Layers, Database, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[14px] uppercase mb-8 flex items-center">
        INDUSTRIAL ENGINEER &bull; BUSINESS ANALYST
      </p>
      <h1 className="text-6xl md:text-8xl lg:text-7xl font-serif text-sumiInk leading-[0.95] mb-10 tracking-tight">
        Turning Messy Operations into <span className="italic text-foxOrange">Clear Decisions</span>
      </h1>
      <p className="text-sm uppercase text-sumiInk/50 mb-4 font-bold">Operational Clarity. Systemic Resilience.</p>
      
      {/* Enhanced Name Integration */}
      <p className="text-2xl md:text-3xl font-serif text-sumiInk mb-4 font-semibold">
        Jason Kester Hanani
      </p>
      
      <p className="text-xl md:text-2xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16">
        Specialized in deep-dive analysis to streamline complexity, process optimization, and deploying AI-augmented workflows for high-performing systems.  
      </p>
      <div className="flex flex-wrap gap-8">
        <Link 
          to="/evidence" 
          className="px-10 py-5 bg-hankoRust text-ricePaper text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          Explore the Evidence Vault
        </Link>
        <Link 
          to="/framework" 
          className="px-10 py-5 border-0.5 border-hankoRust text-hankoRust text-[10px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          Discover My Framework
        </Link>
      </div>
    </div>
  </section>
);

const RemoteLeverage: React.FC = () => (
  <section className="px-6 py-24 md:py-32 bg-sumiInk text-ricePaper relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-grid pointer-events-none" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
      <div>
        <SectionHeader
          eyebrow="Operational Excellence"
          title="Building Operational Excellence: Strategy to System."
          className="text-ricePaper"
          titleClassName="text-5xl md:text-6xl text-ricePaper"
          eyebrowClassName="text-sm md:text-base"
        />
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
      <RemoteLeverage />
      
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