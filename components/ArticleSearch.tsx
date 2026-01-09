import React, { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { client } from '../src/client';

interface SearchResult {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
}

interface ArticleSearchProps {
  onResultsChange?: (hasResults: boolean) => void;
}

export const ArticleSearch: React.FC<ArticleSearchProps> = ({ onResultsChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        performSearch(searchQuery);
      } else {
        setSearchResults([]);
        setShowResults(false);
        onResultsChange?.(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const performSearch = useCallback(async (query: string) => {
    setIsSearching(true);
    try {
      // GROQ query to search across multiple fields
      const groqQuery = `*[_type == "article" 
        && (
          !defined(status) || 
          status == "published" || 
          (status == "scheduled" && scheduledPublishDate <= now())
        )
        && (
          title match $query
          || excerpt match $query
          || pt::text(body) match $query
          || category->title match $query
          || tags[]->title match $query
        )
      ] | order(publishedAt desc) [0...10] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        "category": category->title,
        publishedAt
      }`;

      const results = await client.fetch<SearchResult[]>(groqQuery, { query: `*${query}*` } as any);
      setSearchResults(results);
      setShowResults(true);
      onResultsChange?.(results.length > 0);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, [onResultsChange]);

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
    onResultsChange?.(false);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-foxOrange/20 text-sumiInk font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative mb-12">
      {/* Search Input */}
      <div className="relative">
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-sumiInk/40" 
          size={20} 
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles by title, content, tags, or category..."
          className="w-full pl-12 pr-12 py-4 text-base border border-sumiInk/20 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-foxOrange/50 focus:border-foxOrange
                     bg-white text-sumiInk placeholder-sumiInk/40"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sumiInk/40 
                       hover:text-sumiInk transition-colors"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-sumiInk/20 
                        rounded-md shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-8 text-center text-sumiInk/60">
              Searching...
            </div>
          ) : searchResults.length > 0 ? (
            <div>
              <div className="px-4 py-3 border-b border-sumiInk/10 text-xs uppercase 
                              tracking-widest font-bold text-sumiInk/50">
                {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
              </div>
              {searchResults.map((result) => (
                <a
                  key={result._id}
                  href={`/writing/${result.slug}`}
                  className="block px-4 py-4 hover:bg-foxOrange/5 border-b border-sumiInk/5 
                             last:border-b-0 transition-colors"
                  onClick={clearSearch}
                >
                  <h3 className="font-serif text-lg text-sumiInk mb-1">
                    {highlightMatch(result.title, searchQuery)}
                  </h3>
                  {result.excerpt && (
                    <p className="text-sm text-sumiInk/70 mb-2 line-clamp-2">
                      {highlightMatch(result.excerpt, searchQuery)}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-sumiInk/50">
                    <span className="px-2 py-0.5 border border-foxOrange/20 text-foxOrange">
                      {result.category}
                    </span>
                    <span>
                      {new Date(result.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sumiInk/60 font-serif italic mb-2">
                No articles found matching "{searchQuery}"
              </p>
              <p className="text-xs text-sumiInk/50">
                Try different keywords or browse all articles below
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
