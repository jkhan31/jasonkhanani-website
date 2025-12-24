import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { ARTICLES } from '../constants';
import type { Article } from '../types';

const Writing: React.FC = () => {
  // Filter state (category or series)
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeFilterKind, setActiveFilterKind] = useState<'category' | 'series' | null>(null);
  // Pagination prep (not rendered yet)
  const [articlesPerPage, setArticlesPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset page when active filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, activeFilterKind]);

  // Normalize ARTICLES to guarantee fields needed for filtering, sorting, and tagging.
  const normalizedArticles = useMemo(() => {
    return ARTICLES.map((a, idx) => {
      // Ensure tags is an array
      const tags = Array.isArray(a.tags)
        ? a.tags
        : typeof (a as any).tags === 'string'
        ? (a as any).tags.split(/\s*,\s*/).filter(Boolean)
        : [];

      // Ensure slug and id
      const slug = a.slug || (a.title ? a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : `post-${idx}`);
      const id = (a as any).id || slug;

      // Date normalization: keep original string but also add a Date object for sorting
      const dateStr = a.date || '';
      const dateObj = dateStr ? new Date(dateStr) : new Date(0);

      // Ensure isFeatured boolean
      const isFeatured = (a as any).isFeatured === true;

      return {
        ...a,
        id,
        slug,
        tags,
        isFeatured,
        date: dateStr,
        dateObj,
      } as any;
    }).sort((x: any, y: any) => y.dateObj.getTime() - x.dateObj.getTime());
  }, []);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    normalizedArticles.forEach(a => categories.add(a.category || ''));
    return Array.from(categories).filter(Boolean).sort();
  }, [normalizedArticles]);

  const allSeries = useMemo(() => {
    const series = new Set<string>();
    normalizedArticles.forEach(a => a.series && series.add(a.series));
    return Array.from(series).sort();
  }, [normalizedArticles]);

  const nonFeaturedCount = useMemo(() => normalizedArticles.filter((a: any) => !a.isFeatured).length, [normalizedArticles]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    normalizedArticles.forEach((a: any) => {
      if (a.isFeatured) return;
      const key = a.category || 'Uncategorized';
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [normalizedArticles]);

  const seriesCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    normalizedArticles.forEach((a: any) => {
      if (a.isFeatured) return;
      if (a.series) counts[a.series] = (counts[a.series] || 0) + 1;
    });
    return counts;
  }, [normalizedArticles]);

  // Featured selection with fallback to fill two slots
  const featuredArticlesToDisplay = useMemo(() => {
    const featured = normalizedArticles.filter(a => a.isFeatured).slice();
    featured.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
    const result: any[] = [];
    // Take up to 2 featured
    for (let i = 0; i < Math.min(2, featured.length); i++) result.push(featured[i]);
    if (result.length < 2) {
      // Fill remaining slots with most recent non-featured articles
      const nonFeatured = normalizedArticles.filter(a => !a.isFeatured && !result.find(r => r.slug === a.slug));
      nonFeatured.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
      for (let i = 0; i < nonFeatured.length && result.length < 2; i++) {
        result.push(nonFeatured[i]);
      }
    }
    return result;
  }, [normalizedArticles]);

  // Filtered grid (excludes featured) based on activeFilter/state
  // Step 1: compute the full filtered list
  const filteredArticlesAll = useMemo(() => {
    let articles = normalizedArticles.filter((a: any) => !a.isFeatured);
    if (activeFilter && activeFilterKind === 'category') {
      articles = articles.filter((a: any) => a.category === activeFilter);
    } else if (activeFilter && activeFilterKind === 'series') {
      articles = articles.filter((a: any) => a.series === activeFilter);
    }
    return articles.sort((a: any, b: any) => b.dateObj.getTime() - a.dateObj.getTime());
  }, [activeFilter, activeFilterKind, normalizedArticles]);

  // Step 2: slice for current page (pagination prep)
  const filteredArticlesForDisplay = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    return filteredArticlesAll.slice(start, end);
  }, [filteredArticlesAll, currentPage, articlesPerPage]);

  const totalFilteredPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredArticlesAll.length / articlesPerPage));
  }, [filteredArticlesAll.length, articlesPerPage]);

  // Group non-featured articles by category for the grouped sections view
  const groupedArticles = useMemo(() => {
    const nonFeaturedArticles = normalizedArticles.filter((a: any) => !a.isFeatured);
    const categoryMap = new Map<string, Article[]>();
    nonFeaturedArticles.forEach((article: any) => {
      const key = article.category || 'Uncategorized';
      const list = categoryMap.get(key) || [];
      list.push(article as Article);
      categoryMap.set(key, list);
    });

    const categoryGroups = Array.from(categoryMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([title, articles]) => {
        // within category, group by series
        const seriesMap = new Map<string, Article[]>();
        const noSeries: Article[] = [];
        articles.forEach(a => {
          if (a.series) {
            const list = seriesMap.get(a.series) || [];
            list.push(a);
            seriesMap.set(a.series, list);
          } else {
            noSeries.push(a);
          }
        });

        const seriesGroups = Array.from(seriesMap.entries())
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([title, arts]) => ({
            title,
            articles: arts.sort((x, y) => y.dateObj.getTime() - x.dateObj.getTime()),
          }));

        // sort no-series articles by date desc
        noSeries.sort((x, y) => y.dateObj.getTime() - x.dateObj.getTime());

        return {
          title,
          seriesGroups,
          articles: noSeries,
        };
      });

    return categoryGroups;
  }, [normalizedArticles]);

  return (
    <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in duration-700">
      <SectionHeader eyebrow="Thought Leadership" title="Insights & Strategic Thinking" />
      <p className="text-lg text-sumiInk/60 mb-12 leading-relaxed">
        Occasional essays on Industrial Engineering, operational systems, and the future of AI-augmented management.
      </p>

      {/* Global Filter Bar */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 mb-8 py-2 border-b-0.5 border-sumiInk/10" role="tablist" aria-label="Article filters">
        <button
          role="tab"
          aria-selected={!activeFilter}
          aria-controls="articles-grid"
          aria-label={`Show all insights (${nonFeaturedCount} articles)`}
          onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-foxOrange/50 focus-visible:ring-offset-2 focus:outline-none ${
            !activeFilter ? 'bg-hankoRust text-ricePaper border-hankoRust' : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
          }`}
        >
          <span>All Insights</span>
          <span className={`${!activeFilter ? 'text-ricePaper/80' : 'text-sumiInk/60'}`}>({nonFeaturedCount})</span>
        </button>

        {allCategories.map(cat => {
          const count = categoryCounts[cat] || 0;
          const isActive = activeFilter === cat && activeFilterKind === 'category';
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              aria-controls="articles-grid"
              aria-label={`Filter articles by category: ${cat} (${count})`}
              onClick={() => { setActiveFilter(cat); setActiveFilterKind('category'); }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-foxOrange/50 focus-visible:ring-offset-2 focus:outline-none ${
                isActive ? 'bg-hankoRust text-ricePaper border-hankoRust' : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
              }`}
            >
              <span>{cat}</span>
              <span className={`${isActive ? 'text-ricePaper/80' : 'text-sumiInk/60'}`}>({count})</span>
            </button>
          );
        })}

        {allSeries.map(s => {
          const count = seriesCounts[s] || 0;
          const isActive = activeFilter === s && activeFilterKind === 'series';
          return (
            <button
              key={s}
              role="tab"
              aria-selected={isActive}
              aria-controls="articles-grid"
              aria-label={`Filter articles by series: ${s} (${count})`}
              onClick={() => { setActiveFilter(s); setActiveFilterKind('series'); }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-foxOrange/50 focus-visible:ring-offset-2 focus:outline-none ${
                isActive ? 'bg-foxOrange text-ricePaper border-foxOrange' : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
              }`}
            >
              <span>{s}</span>
              <span className={`${isActive ? 'text-ricePaper/80' : 'text-sumiInk/60'}`}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Featured Insights */}
      {featuredArticlesToDisplay.length > 0 && (
        <div className="mb-12 border-0.5 border-foxOrange/50 bg-foxOrange/5 rounded-lg p-6">
          <SectionHeader title="Featured Insights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticlesToDisplay.map((article: any) => (
              <ArticlePreviewCard key={article.slug} article={article} compact />
            ))}
          </div>
        </div>
      )}

      {/* Conditional main content: filtered grid OR grouped sections */}
      {activeFilter ? (
        <div className="mt-12">
          <h2 className="text-2xl font-serif text-sumiInk mb-8">
            {activeFilterKind === 'category' ? `Category: ${activeFilter}` : `Series: ${activeFilter}`}
          </h2>
          {filteredArticlesForDisplay.length > 0 ? (
            <>
              <div id="articles-grid" className="mt-6 bg-ricePaper rounded-lg shadow-inner p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticlesForDisplay.map((article: any) => (
                  <ArticlePreviewCard key={article.slug} article={article} compact />
                ))}
              </div>

              {/* Pagination controls (only for filtered grid) */}
              {totalFilteredPages > 1 && (
                <div className="mt-6 flex justify-center items-center gap-3">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                      currentPage === 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-hankoRust/50 hover:text-sumiInk'
                    }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalFilteredPages }, (_, i) => i + 1).map(pageNum => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      aria-current={currentPage === pageNum}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                        currentPage === pageNum ? 'bg-hankoRust text-ricePaper border-hankoRust' : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalFilteredPages, p + 1))}
                    disabled={currentPage === totalFilteredPages}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-md transition-all ${
                      currentPage === totalFilteredPages ? 'opacity-40 cursor-not-allowed' : 'hover:border-hankoRust/50 hover:text-sumiInk'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center border-0.5 border-dashed border-sumiInk/20 rounded-lg">
              <p className="text-sumiInk/40 font-serif italic text-lg mb-4">No articles found in the '{activeFilter}' {activeFilterKind}.</p>
              <button
                onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
                className="text-xs font-bold uppercase tracking-widest text-hankoRust border-b border-hankoRust hover:border-foxOrange hover:text-foxOrange transition-all"
              >
                View All Insights
              </button>
            </div>
          )}
        </div>
      ) : (
        <div id="articles-grid" className="mt-12">
          {groupedArticles.map(group => (
            <div key={group.title} className="mb-16 last:mb-0">
              <SectionHeader title={group.title} className="mb-8" />
                    {group.seriesGroups.map(seriesGroup => (
                      <div key={seriesGroup.title} className="mb-6">
                        <h3 className="text-xl font-serif text-sumiInk/80 mb-4">{seriesGroup.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {seriesGroup.articles.map(article => (
                            <ArticlePreviewCard key={article.slug} article={article} compact />
                          ))}
                        </div>
                      </div>
                    ))}

                    {group.articles && group.articles.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-serif text-sumiInk/80 mb-4">Standalone Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {group.articles.map(article => (
                            <ArticlePreviewCard key={article.slug} article={article} compact />
                          ))}
                        </div>
                      </div>
                    )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Writing;