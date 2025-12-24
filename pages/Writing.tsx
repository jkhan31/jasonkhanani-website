import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ArticlePreviewCard } from '../components/ArticlePreviewCard';
import { ARTICLES } from '../constants';
import type { Article } from '../types';

const Writing: React.FC = () => {
  // Filter state (category or series)
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeFilterKind, setActiveFilterKind] = useState<'category' | 'series' | null>(null);

  // Normalize ARTICLES to guarantee fields needed for filtering, sorting, and tagging.
  const normalizedArticles = useMemo(() => {
    return ARTICLES.map((a, idx) => {
      // Ensure tags is an array
      const tags = Array.isArray(a.tags)
        ? a.tags
        : typeof a.tags === 'string'
        ? a.tags.split(/\s*,\s*/).filter(Boolean)
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
  const filteredArticlesForDisplay = useMemo(() => {
    let articles = normalizedArticles.filter((a: any) => !a.isFeatured);
    if (activeFilter && activeFilterKind === 'category') {
      articles = articles.filter((a: any) => a.category === activeFilter);
    } else if (activeFilter && activeFilterKind === 'series') {
      articles = articles.filter((a: any) => a.series === activeFilter);
    }
    return articles.sort((a: any, b: any) => b.dateObj.getTime() - a.dateObj.getTime());
  }, [activeFilter, activeFilterKind, normalizedArticles]);

  // Group non-featured articles by category for the grouped sections view
  const groupedArticles = useMemo(() => {
    const nonFeaturedArticles = normalizedArticles.filter((a: any) => !a.isFeatured);
    const groups: Record<string, Article[]> = {};
    nonFeaturedArticles.forEach((article: any) => {
      const key = article.category || 'Uncategorized';
      if (!groups[key]) groups[key] = [];
      groups[key].push(article as Article);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([title, articles]) => ({
        title,
        articles: articles.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime()),
      }));
  }, [normalizedArticles]);

  return (
    <div className="px-6 py-24 md:py-32 max-w-4xl mx-auto animate-in fade-in duration-700">
      <SectionHeader eyebrow="Thought Leadership" title="Insights & Strategic Thinking" />
      <p className="text-lg text-sumiInk/60 mb-12 leading-relaxed">
        Occasional essays on Industrial Engineering, operational systems, and the future of AI-augmented management.
      </p>

      {/* Global Filter Bar */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 mb-8 py-2 border-b-0.5 border-sumiInk/10">
        <button
          onClick={() => { setActiveFilter(null); setActiveFilterKind(null); }}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all ${
            !activeFilter ? 'bg-hankoRust text-ricePaper border-hankoRust' : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
          }`}
        >
          All Insights
        </button>

        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveFilter(cat); setActiveFilterKind('category'); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all ${
              activeFilter === cat && activeFilterKind === 'category'
                ? 'bg-hankoRust text-ricePaper border-hankoRust'
                : 'text-sumiInk/60 border-sumiInk/20 hover:border-hankoRust/50 hover:text-sumiInk'
            }`}
          >
            {cat}
          </button>
        ))}

        {allSeries.map(s => (
          <button
            key={s}
            onClick={() => { setActiveFilter(s); setActiveFilterKind('series'); }}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-full transition-all ${
              activeFilter === s && activeFilterKind === 'series'
                ? 'bg-foxOrange text-ricePaper border-foxOrange'
                : 'text-sumiInk/60 border-sumiInk/20 hover:border-foxOrange/50 hover:text-sumiInk'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Featured Insights */}
      {featuredArticlesToDisplay.length > 0 && (
        <div className="mb-12 border-0.5 border-foxOrange/50 bg-foxOrange/5 rounded-lg p-6">
          <SectionHeader title="Featured Insights" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticlesToDisplay.map((article: any) => (
              <ArticlePreviewCard key={article.slug} article={article} compact={false} />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticlesForDisplay.map((article: any) => (
                <ArticlePreviewCard key={article.slug} article={article} compact={true} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border-0.5 border-dashed border-sumiInk/20 rounded-lg">
              <p className="text-sumiInk/40 font-serif italic text-lg mb-4">No articles found for this selection.</p>
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
        <div className="mt-12">
          {groupedArticles.map(group => (
            <div key={group.title} className="mb-16 last:mb-0">
              <SectionHeader title={group.title} className="mb-8" />
              <div className="flex overflow-x-auto whitespace-nowrap gap-6 pb-4 md:pb-8">
                {group.articles.map(article => (
                  <div key={article.slug} className="w-80 flex-shrink-0">
                    <ArticlePreviewCard article={article} compact={true} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Writing;