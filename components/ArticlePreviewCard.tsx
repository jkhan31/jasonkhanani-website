    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Clock } from 'lucide-react';
    import type { Article } from '../lib/posts';

    interface ArticlePreviewCardProps {
    article: Article;
    compact?: boolean;
    }

    export const ArticlePreviewCard: React.FC<ArticlePreviewCardProps> = ({ article, compact = false }) => {
    return (
        <Link 
        to={`/writing/${article.slug}`} 
        className="group block p-8 md:p-12 border-0.5 border-hankoRust/10 bg-white hover:shadow-2xl hover:border-hankoRust/30 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-foxOrange/50 focus-visible:ring-offset-2 focus:outline-none"
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

        {/* Title */}
        <h4 className={`${compact ? 'text-2xl md:text-2xl' : 'text-2xl md:text-3xl'} font-serif mb-6 text-sumiInk group-hover:text-foxOrange transition-colors leading-tight`}>
            {article.title}
        </h4>

        {/* Excerpt */}
        <p className={`text-sumiInk/60 font-serif mb-8 leading-relaxed ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {article.excerpt}
        </p>

        {/* CTA and Tags */}
        <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-widest text-hankoRust border-b border-hankoRust/20 pb-0.5 group-hover:border-foxOrange group-hover:text-foxOrange transition-all">
            Read Essay
            </span>
            <div className="flex flex-wrap gap-2 justify-end">
            {article.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[8px] uppercase tracking-widest font-bold text-sumiInk/20">
                #{tag}
                </span>
            ))}
            </div>
        </div>
        </Link>
    );
    };
