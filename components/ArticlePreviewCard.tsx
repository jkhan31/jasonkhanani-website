    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Clock } from 'lucide-react';
    import type { Article } from '../types';
    import { ImageAttribution } from './ImageAttribution';

    interface ArticlePreviewCardProps {
    article: Article;
    compact?: boolean;
    }

    export const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({ article, compact = false }) => {
    return (
        <Link 
        to={`/writing/${article.slug}`} 
        className={`group block ${compact ? 'p-6' : 'p-8 md:p-12'} border-0.5 border-hankoRust/10 bg-white hover:shadow-2xl hover:border-hankoRust/30 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-foxOrange/50 focus-visible:ring-offset-2 focus:outline-none flex flex-col h-full`}
        >
        {/* Date, Category, Read Time */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-hankoRust/60">
                {article.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-hankoRust/20" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-sumiInk/40">
                {article.category}
            </span>
            </div>
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-sumiInk/30">
            <Clock size={11} />
            {article.readTime}
            </div>
        </div>

        {/* Image with Attribution */}
        {article.image && (
          <div className="mb-4">
            <img
              src={article.image} // Fallback (already 800px from Writing.tsx)
              srcSet={`
                ${article.image.replace('w=800', 'w=400')} 400w,
                ${article.image} 800w
              `}
              sizes="(max-width: 640px) 400px, 800px"
              alt={article.mainImage?.alt || article.mainImage?.unsplashDescription || article.title}
              className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <ImageAttribution
              attribution={article.mainImage?.attribution || article.mainImage?.unsplashSource?.name}
              attributionUrl={article.mainImage?.attributionUrl || article.mainImage?.unsplashSource?.url}
            />
          </div>
        )}

        {/* Title + Excerpt (growable content area to keep CTA/tags at bottom) */}
        <div className="flex-grow">
            <h4 className={`${compact ? 'text-2xl md:text-2xl' : 'text-2xl md:text-3xl'} font-serif mb-4 text-sumiInk group-hover:text-foxOrange transition-colors ${compact ? 'line-clamp-3' : 'line-clamp-4'}`}>
                {article.title}
            </h4>

            {/* Excerpt */}
            <p className={`text-sumiInk/60 font-serif mb-8 leading-relaxed ${compact ? 'line-clamp-3' : 'line-clamp-4'}`}>
                {article.excerpt}
            </p>
        </div>

        {/* CTA and Tags */}
        <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-hankoRust border-b border-hankoRust/20 pb-0.5 group-hover:border-foxOrange group-hover:text-foxOrange transition-all">
            Read Essay
            </span>
            <div className="flex flex-wrap gap-2 justify-end">
            {article.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-sumiInk/40">
                #{tag}
                </span>
            ))}
            </div>
        </div>
        </Link>
    );
    };
