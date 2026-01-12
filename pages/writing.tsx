import React, { useMemo, useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SectionHeader } from '../components/SectionHeader';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { ArticleSearch } from '../components/ArticleSearch';
import { client, urlFor } from '../src/client';
import { Star, ChevronDown, ChevronUp, Filter, Info, BookOpen, Layers, X } from 'lucide-react';
import type { Article } from '../types';

interface WritingProps {
  articles: any[];
  seriesData: any[];
}

const Writing: React.FC<WritingProps> = ({ articles: sanityData, seriesData }) => {
  // Filter State
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeFilterKind, setActiveFilterKind] = useState<'category' | 'series' | 'special' | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(true);
  
  // Pagination
  const [articlesPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, activeFilterKind]);

  // Normalize & Global Sort
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
        readTime: '5 min', // Default read time
      } as any;
    }).sort((a: any, b: any) => {
      // 1. Priority Sort: Featured items ALWAYS first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      // 2. Secondary Sort: Date Descending
      return b.dateObj.getTime() - a.dateObj.getTime();
    });
  }, [sanityData]);

  // Compute Counts
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

  // Get active series description
  const activeSeriesDescription = useMemo(() => {
    if (activeFilterKind === 'series' && activeFilter) {
      const series = seriesData.find(s => s.title === activeFilter);
      return series?.description || null;
    }
    return null;
  }, [activeFilter, activeFilterKind, seriesData]);

  // Helper function to check if a filter is active
  const isActiveFilter = (filter: string | null, kind: 'category' | 'series' | 'special' | null) => {
    return activeFilter === filter && activeFilterKind === kind;
  };

  // Filtering Logic
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

    return articles;
  }, [activeFilter, activeFilterKind, normalizedArticles]);

  // Pagination Slice
  const displayedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    return filteredArticles.slice(start, end);
  }, [filteredArticles, currentPage, articlesPerPage]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / articlesPerPage));

  return (
    <>
      <Head>
        <title>Writing | Jason Kester Hanani</title>
        <meta 
          name="description" 
          content="Essays on systems thinking, operational excellence, and resilient performance. Deep-dives into diagnostics, design, and engineering sustainable velocity." 
        />
        <meta property="og:title" content="Writing & Essays" />
        <meta property="og:description" content="Systems thinking, diagnostics, and operational excellence." />
        <meta property="og:url" content="https://jasonkhanani.com/writing/" />
        <link rel="canonical" href="https://jasonkhanani.com/writing/" />
      </Head>
      
      <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in duration-700">
      <SectionHeader eyebrow="Thought Leadership" title="Insights & Strategic Thinking" />
      <p className="text-lg text-sumiInk/60 mb-8 leading-relaxed max-w-2xl">
        Occasional essays on Industrial Engineering, operational systems, and the future of AI-augmented management.
      </p>

      {/* Search Component */}
      <ArticleSearch />

      {/* Toggle Button and Active Filter Indicator */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sumiInk/80 border border-sumiInk/20 rounded-md hover:border-hankoRust/50 hover:text-sumiInk transition-all"
        >
          <Filter size={14} />
          <span>Show/Hide Filters</span>
          {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {activeFilter && (
          <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest bg-sumiInk/5 border border-sumiInk/20 rounded-md">
            <span className="text-sumiInk/60">Active:</span>
            <span className="text-sumiInk">{activeFilter}</span>
            <button
              onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
              className="ml-2 text-sumiInk/60 hover:text-hankoRust transition-colors"
              aria-label="Clear filter"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Collapsible Filter Section */}
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: showFilters ? '1000px' : '0',
          opacity: showFilters ? 1 : 0
        }}
      >
        <div className="mb-8 pb-6 border-b-0.5 border-sumiInk/10">
          {/* Quick Filters Section */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {/* All Insights Button */}
              <button
                onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                  !activeFilter 
                    ? 'bg-hankoRust text-ricePaper border-hankoRust shadow-md' 
                    : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
                }`}
              >
                <span>All Insights</span>
                <span className="opacity-80">({totalCount})</span>
              </button>

              {/* Featured Filter */}
              {featuredCount > 0 && (
                <button
                  onClick={() => { setActiveFilter('FEATURED'); setActiveFilterKind('special'); }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                    isActiveFilter('FEATURED', 'special')
                      ? 'bg-foxOrange text-ricePaper border-foxOrange shadow-md'
                      : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
                  }`}
                >
                  <Star size={12} className={isActiveFilter('FEATURED', 'special') ? 'fill-ricePaper' : ''} />
                  <span>Featured</span>
                  <span className="opacity-80">({featuredCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* Categories Section */}
          {allCategories.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-sumiInk/60" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-sumiInk/60">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveFilter(cat); setActiveFilterKind('category'); }}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                      isActiveFilter(cat, 'category')
                        ? 'bg-sumiInk text-ricePaper border-sumiInk shadow-md'
                        : 'text-sumiInk/60 border-sumiInk/20 hover:border-sumiInk/50 hover:text-sumiInk'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="opacity-80">({categoryCounts[cat]})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Series Section */}
          {allSeries.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers size={16} className="text-sumiInk/60" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-sumiInk/60">Series</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {allSeries.map(s => (
                  <button
                    key={s}
                    onClick={() => { setActiveFilter(s); setActiveFilterKind('series'); }}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 ${
                      isActiveFilter(s, 'series')
                        ? 'bg-foxOrange text-ricePaper border-foxOrange shadow-md'
                        : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
                    }`}
                  >
                    <span>{s}</span>
                    <span className="opacity-80">({seriesCounts[s]})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Series Description Banner */}
      {activeSeriesDescription && (
        <div className="mb-8 p-4 bg-foxOrange/10 border-l-4 border-foxOrange rounded-r-lg">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-foxOrange flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-sumiInk mb-2">About This Series</h4>
              <p className="text-sm text-sumiInk/80 leading-relaxed">{activeSeriesDescription}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid */}
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
          <p className="text-sumiInk/60 font-serif italic text-lg mb-4">No articles found in this filter.</p>
          <button
            onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
            className="text-xs font-bold uppercase tracking-widest text-hankoRust border-b border-hankoRust hover:border-foxOrange hover:text-foxOrange transition-all"
          >
            Clear Filters
          </button>
        </div>
      )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<WritingProps> = async () => {
  try {
    const query = `*[_type == "article" 
      && (
        !defined(status) || 
        status == "published" || 
        (status == "scheduled" && scheduledPublishDate <= now())
      )
    ] | order(publishedAt desc) {
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
    
    const seriesQuery = `*[_type == "series"] {
      title,
      description
    }`;
    
    const articles = await client.fetch(query);
    const seriesData = await client.fetch(seriesQuery);

    return {
      props: {
        articles: articles || [],
        seriesData: seriesData || [],
      },
      revalidate: 60, // Regenerate page every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
        seriesData: [],
      },
      revalidate: 60, // Still revalidate on error
    };
  }
};

export default Writing;
