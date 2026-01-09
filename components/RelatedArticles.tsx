import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedArticle {
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  category?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-24 pt-16 border-t-0.5 border-hankoRust/10">
      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sumiInk/50 mb-12 text-center md:text-left">
        Continue Reading
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((related) => (
          <Link 
            key={related.slug} 
            to={`/writing/${related.slug}`} 
            className="group block"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-hankoRust mb-3 block">
              {new Date(related.publishedAt).toLocaleDateString("en-US", { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} {related.category && `• ${related.category}`}
            </span>
            <h4 className="text-2xl font-serif text-sumiInk group-hover:text-foxOrange transition-colors leading-tight mb-4">
              {related.title}
            </h4>
            {related.excerpt && (
              <p className="text-sumiInk/70 text-sm mb-4 line-clamp-2">
                {related.excerpt}
              </p>
            )}
            <div className="flex items-center text-[10px] tracking-widest uppercase font-bold text-sumiInk group-hover:translate-x-1 transition-transform duration-300">
              Read Full Essay <span className="ml-2 text-foxOrange">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
