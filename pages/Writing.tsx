import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ARTICLES } from '../constants';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const Writing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    ARTICLES.forEach(a => a.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredArticles = useMemo(() => {
    if (!activeTag) return ARTICLES;
    return ARTICLES.filter(a => a.tags.includes(activeTag));
  }, [activeTag]);

  const handleTagToggle = (tag: string | null) => {
    if (tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="px-6 py-24 md:py-32 max-w-4xl mx-auto animate-in fade-in duration-700">
      <SectionHeader eyebrow="Thought Leadership" title="Decision Rigor" />
      <p className="text-lg text-sumiInk/60 mb-12 leading-relaxed">
        Occasional essays on Industrial Engineering, operational systems, and the future of AI-augmented management.
      </p>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-20">
        <button
          onClick={() => handleTagToggle(null)}
          className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${
            activeTag === null 
              ? 'bg-sumiInk text-ricePaper border-sumiInk shadow-md' 
              : 'text-sumiInk/40 border-hankoRust/10 hover:border-hankoRust/30'
          }`}
        >
          All Posts
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all flex items-center gap-2 ${
              activeTag === tag 
                ? 'bg-foxOrange text-ricePaper border-foxOrange shadow-md' 
                : 'text-sumiInk/40 border-hankoRust/10 hover:border-hankoRust/30'
            }`}
          >
            <Tag size={10} />
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, idx) => (
            <Link to={`/writing/${article.slug}`} key={idx} className="group block">
              <article className="border-b border-hankoRust/5 pb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-hankoRust">
                      {article.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-hankoRust/20" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/40">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-sumiInk/30 mt-2 md:mt-0">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-sumiInk group-hover:text-foxOrange transition-colors mb-6 leading-tight">
                  {article.title}
                </h3>
                <p className="text-lg text-sumiInk/60 leading-relaxed mb-8 max-w-2xl">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-hankoRust border-b border-hankoRust/20 pb-1 group-hover:border-foxOrange group-hover:text-foxOrange transition-all flex items-center">
                    Read Essay <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-widest font-bold text-sumiInk/20">#{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="py-20 text-center border-0.5 border-dashed border-hankoRust/20">
            <p className="text-sumiInk/40 font-serif italic text-lg mb-4">No matching articles found for this specialization.</p>
            <button 
              onClick={() => handleTagToggle(null)}
              className="text-xs font-bold uppercase tracking-widest text-hankoRust border-b border-hankoRust"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Writing;