import React, { useMemo, useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { client, urlFor } from '../src/client';
import { fetchWithRetry } from '../lib/sanityErrorHandler';
import { Star } from 'lucide-react'; // Icon for the Featured filter
import type { Article } from '../types';

const Writing: React.FC = () => {
  // --- 1. Sanity Data State ---
  const [sanityData, setSanityData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter State
  // activeFilter: 'featured', 'CategoryName', 'SeriesName', or null (All)
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeFilterKind, setActiveFilterKind] = useState<'category' | 'series' | 'special' | null>(null);
  
  // Pagination
  const [articlesPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // --- 2. Fetch Data ---
  useEffect(() => {
    const fetchArticles = async () => {
      const result = await fetchWithRetry(async () => {
        const query = `*[_type == "article"] | order(publishedAt desc) {
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
        setSanityData(result);
      } else {
        console.warn('Using fallback article data due to Sanity fetch failure');
        setSanityData([]);
      }
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, activeFilterKind]);

  // --- 3. Normalize & Global Sort ---
  const normalizedArticles = useMemo(() => {
    if (!sanityData.length) return [];

    return sanityData.map((a, idx) => {
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
      } as any;
    }).sort((a: any, b: any) => {
      // 1. Priority Sort: Featured items ALWAYS first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      // 2. Secondary Sort: Date Descending
      return b.dateObj.getTime() - a.dateObj.getTime();
    });
  }, [sanityData]);

  // --- 4. Compute Counts (Including Featured in totals now) ---
  
  const totalCount = normalizedArticles.length;
  
  const featuredCount = useMemo(() => 
    normalizedArticles.filter((a: any) => a.isFeatured).length, 
  [normalizedArticles]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    normalizedArticles.forEach((a: any) => categories.add(a.category || ''));
    return Array.from(categories).filter(Boolean).sort();
  }, [normalizedArticles]);

  const allSeries = useMemo(() => {
    const series = new Set<string>();
    normalizedArticles.forEach((a: any) => a.series && series.add(a.series));
    return Array.from(series).sort();
  }, [normalizedArticles]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    normalizedArticles.forEach((a: any) => {
      const key = a.category || 'Uncategorized';
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [normalizedArticles]);

  const seriesCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    normalizedArticles.forEach((a: any) => {
      if (a.series) counts[a.series] = (counts[a.series] || 0) + 1;
    });
    return counts;
  }, [normalizedArticles]);

  // --- 5. Filtering Logic ---
  const filteredArticles = useMemo(() => {
    let articles = normalizedArticles;

    if (activeFilter) {
      if (activeFilterKind === 'special' && activeFilter === 'FEATURED') {
        articles = articles.filter((a: any) => a.isFeatured);
      } else if (activeFilterKind === 'category') {
        articles = articles.filter((a: any) => a.category === activeFilter);
      } else if (activeFilterKind === 'series') {
        articles = articles.filter((a: any) => a.series === activeFilter);
      }
    }

    // Re-sort is not strictly needed because normalizedArticles is already sorted,
    // but good for safety if filters disturb order (they shouldn't here).
    return articles;
  }, [activeFilter, activeFilterKind, normalizedArticles]);

  // --- 6. Pagination Slice ---
  const displayedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    return filteredArticles.slice(start, end);
  }, [filteredArticles, currentPage, articlesPerPage]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / articlesPerPage));

  // --- Render ---

  if (isLoading) {
    return (
      <div className="px-6 py-32 md:py-48 max-w-7xl mx-auto text-center animate-pulse">
         <div className="inline-block w-12 h-12 border-2 border-foxOrange border-t-transparent rounded-full animate-spin mb-4"></div>
         <p className="text-sumiInk/60 font-serif">Investigating Archives...</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in duration-700">
      <SectionHeader eyebrow="Thought Leadership" title="Insights & Strategic Thinking" />
      <p className="text-lg text-sumiInk/60 mb-12 leading-relaxed max-w-2xl">
        Occasional essays on Industrial Engineering, operational systems, and the future of AI-augmented management.
      </p>

      {/* --- Filter Bar --- */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-3 mb-12 py-2 border-b-0.5 border-sumiInk/10 pb-6" role="tablist">
        
        {/* 1. All Insights Button */}
        <button
          onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
            !activeFilter 
              ? 'bg-hankoRust text-ricePaper border-hankoRust shadow-md' 
              : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
          }`}
        >
          <span>All Insights</span>
          <span className="opacity-60">({totalCount})</span>
        </button>

        {/* 2. Featured Filter (New) */}
        {featuredCount > 0 && (
          <button
            onClick={() => { setActiveFilter('FEATURED'); setActiveFilterKind('special'); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
              activeFilter === 'FEATURED'
                ? 'bg-foxOrange text-ricePaper border-foxOrange shadow-md'
                : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
            }`}
          >
            <Star size={12} className={activeFilter === 'FEATURED' ? 'fill-ricePaper' : ''} />
            <span>Featured</span>
            <span className="opacity-60">({featuredCount})</span>
          </button>
        )}

        {/* 3. Category Filters */}
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveFilter(cat); setActiveFilterKind('category'); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
              activeFilter === cat
                ? 'bg-sumiInk text-ricePaper border-sumiInk shadow-md'
                : 'text-sumiInk/60 border-sumiInk/20 hover:border-sumiInk/50 hover:text-sumiInk'
            }`}
          >
            <span>{cat}</span>
            <span className="opacity-60">({categoryCounts[cat]})</span>
          </button>
        ))}

        {/* 4. Series Filters */}
        {allSeries.map(s => (
          <button
            key={s}
            onClick={() => { setActiveFilter(s); setActiveFilterKind('series'); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
              activeFilter === s
                ? 'bg-foxOrange text-ricePaper border-foxOrange shadow-md'
                : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
            }`}
          >
            <span>{s}</span>
            <span className="opacity-60">({seriesCounts[s]})</span>
          </button>
        ))}
      </div>

      {/* --- Main Grid (Unified) --- */}
      {displayedArticles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedArticles.map((article: any) => (
              <ArticlePreviewCard 
                key={article.slug} 
                article={article} 
                compact={false} 
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-3">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                  currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-hankoRust/50 hover:text-sumiInk'
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                    currentPage === pageNum 
                      ? 'bg-hankoRust text-ricePaper border-hankoRust' 
                      : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                  currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:border-hankoRust/50 hover:text-sumiInk'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="py-20 text-center border-0.5 border-dashed border-sumiInk/20 rounded-lg">
          <p className="text-sumiInk/40 font-serif italic text-lg mb-4">No articles found in this filter.</p>
          <button
            onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
            className="text-xs font-bold uppercase tracking-widest text-hankoRust border-b border-hankoRust hover:border-foxOrange hover:text-foxOrange transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Writing;