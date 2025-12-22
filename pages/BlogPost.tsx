import React, { useMemo, useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { ContentBlock } from '../types';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/writing" replace />;
  }

  const relatedArticles = useMemo(() => {
    return ARTICLES
      .filter(a => a.slug !== slug)
      .sort((a, b) => {
        const aMatches = a.tags.filter(t => article.tags.includes(t)).length;
        const bMatches = b.tags.filter(t => article.tags.includes(t)).length;
        return bMatches - aMatches;
      })
      .slice(0, 2);
  }, [slug, article.tags]);

  return (
    <div className="px-6 py-24 md:py-32 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        to="/writing" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-hankoRust hover:text-foxOrange transition-colors mb-12 group"
      >
        <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Writing
      </Link>

      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-sumiInk/40 mb-6">
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} Read</span>
          <span className="px-2 py-0.5 border border-foxOrange/20 text-foxOrange">{article.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sumiInk leading-[1.1] mb-8">
          {article.title}
        </h1>
        <p className="text-xl text-hankoRust italic font-serif leading-relaxed border-l-2 border-foxOrange/30 pl-8 mb-10">
          {article.excerpt}
        </p>
        
        {/* Navigation Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="w-full text-[10px] uppercase tracking-widest font-bold text-sumiInk/30 mb-1">Methodologies</span>
          {article.tags.map(tag => (
            <Link 
              key={tag} 
              to={`/writing?tag=${encodeURIComponent(tag)}`}
              className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-hankoRust/60 hover:text-foxOrange transition-all border border-hankoRust/10 px-2.5 py-1.5 bg-white hover:border-foxOrange/30 hover:shadow-md active:scale-95"
            >
              <Tag size={10} /> {tag}
            </Link>
          ))}
        </div>
      </header>

      <div className="article-content prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {article.content}
        </ReactMarkdown>
      </div>

      <section className="mt-24 pt-16 border-t-0.5 border-hankoRust/10">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sumiInk/30 mb-12 text-center md:text-left">Continue Reading</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {relatedArticles.map((related) => (
            <Link key={related.slug} to={`/writing/${related.slug}`} className="group block">
              <span className="text-[10px] uppercase tracking-widest font-bold text-hankoRust mb-3 block">
                {related.date} &bull; {related.category}
              </span>
              <h4 className="text-2xl font-serif text-sumiInk group-hover:text-foxOrange transition-colors leading-tight mb-4">
                {related.title}
              </h4>
              <div className="flex items-center text-[10px] tracking-widest uppercase font-bold text-sumiInk group-hover:translate-x-1 transition-transform duration-300">
                Read Full Essay <span className="ml-2 text-foxOrange">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-32 pt-12 border-t-0.5 border-hankoRust/10 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-hankoRust/5 flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-hankoRust animate-pulse" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">The Investigation Continues</h4>
          <p className="text-sumiInk/50 text-sm max-w-sm mb-8">
            Interested in how these principles apply to your specific operational bottlenecks?
          </p>
          <Link 
            to="/resume" 
            className="text-xs font-bold uppercase tracking-widest border-b border-sumiInk hover:text-foxOrange hover:border-foxOrange transition-all pb-1"
          >
            Review my full experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;