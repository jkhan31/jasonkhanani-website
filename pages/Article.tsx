import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { client, urlFor } from '../src/client'; // Import from src folder

// --- 1. Helper: Estimate Read Time ---
const getReadTime = (body: any[]) => {
  if (!body) return '5 min';
  const text = body
    .map(block => block.children?.map((child: any) => child.text).join('') || '')
    .join(' ');
  const words = text.split(' ').length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
};

// --- 2. Styles for the Rich Text (Tactile Aesthetic) ---
const ptComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-lg text-sumiInk/90 font-sans">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-serif text-sumiInk mt-12 mb-6 font-bold leading-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-serif text-sumiInk/80 mt-10 mb-4 font-semibold">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-foxOrange pl-6 py-2 my-10 italic text-xl text-sumiInk/80 bg-foxOrange/5">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-sumiInk/90">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-8 space-y-3 text-lg text-sumiInk/90">{children}</ol>,
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-10">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Article Illustration'}
            className="w-full h-auto rounded-sm border-0.5 border-sumiInk/10 shadow-sm"
          />
          {value.caption && <p className="text-center text-xs uppercase tracking-widest text-sumiInk/40 mt-3">{value.caption}</p>}
        </div>
      );
    }
  }
  ,
  marks: {
    link: ({ value, children }: any) => {
      const target = (value?.href || '');
      const isInternal = target.startsWith('/') || target.includes('jasonkhanani.com');

      if (isInternal) {
        const relativePath = target.replace('https://jasonkhanani.com', '').replace('/#', '');
        return (
          <Link 
            to={relativePath || '/'} 
            className="text-foxOrange underline decoration-foxOrange/30 hover:decoration-foxOrange transition-all font-medium"
          >
            {children}
          </Link>
        );
      }

      return (
        <a 
          href={target} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sumiInk/80 underline decoration-sumiInk/30 hover:text-foxOrange transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // State: 'current' is the main post, 'allOthers' is for related suggestions
  const [data, setData] = useState<{ current: any; allOthers: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // --- 3. Data Fetching ---
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const query = `{
          "current": *[_type == "article" && slug.current == $slug][0]{
            title,
            excerpt,
            publishedAt,
            mainImage,
            body,
            "slug": slug,
            "category": category->title,
            "tags": tags[]->title
          },
          "allOthers": *[_type == "article" && slug.current != $slug]{
            title,
            "slug": slug.current,
            publishedAt,
            "category": category->title,
            "tags": tags[]->title
          }
        }`;

        const result = await client.fetch(query, { slug });
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Investigation failed:", error);
        setIsLoading(false);
      }
    };

    if (slug) fetchData();
  }, [slug]);

  // --- 4. Related Articles Logic ---
  const relatedArticles = useMemo(() => {
    if (!data?.current || !data?.allOthers) return [];
    const currentTags = data.current.tags || [];

    return data.allOthers
      .sort((a, b) => {
        const aTags = a.tags || [];
        const bTags = b.tags || [];
        const aMatches = aTags.filter((t: string) => currentTags.includes(t)).length;
        const bMatches = bTags.filter((t: string) => currentTags.includes(t)).length;
        
        if (bMatches !== aMatches) return bMatches - aMatches; // Most matches first
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(); // Then newest
      })
      .slice(0, 2);
  }, [data]);

  // Loading State
  if (isLoading) {
    return (
       <div className="min-h-screen flex flex-col items-center justify-center">
         <div className="w-12 h-12 border-2 border-foxOrange border-t-transparent rounded-full animate-spin mb-4"></div>
         <p className="text-xs uppercase tracking-widest text-sumiInk/40">Retrieving Evidence...</p>
       </div>
    );
  }

  // Error/Not Found
  if (!data?.current) return <Navigate to="/writing" replace />;

  const { current } = data;
  const formattedDate = new Date(current.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
  const readTime = getReadTime(current.body);

  // Generate social image URL for Open Graph and Twitter Cards
  const socialImageUrl = current.mainImage 
    ? urlFor(current.mainImage).width(1200).height(630).url() 
    : '';

  return (
    <div className="px-6 py-24 md:py-32 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Helmet>
        <title>{current.title} | Jason K Hanani</title>
        <meta name="description" content={current.excerpt || ''} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={current.title} />
        <meta property="og:description" content={current.excerpt || ''} />
        <meta property="og:url" content={`https://jasonkhanani.com/#/writing/${current.slug.current}`} />
        {socialImageUrl && <meta property="og:image" content={socialImageUrl} />}
        <meta property="og:type" content="article" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={current.title} />
        <meta name="twitter:description" content={current.excerpt || ''} />
        {socialImageUrl && <meta name="twitter:image" content={socialImageUrl} />}
      </Helmet>

      <Link 
        to="/writing" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-hankoRust hover:text-foxOrange transition-colors mb-12 group"
      >
        <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Writing
      </Link>

      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-sumiInk/40 mb-6">
          <span className="flex items-center gap-1.5"><Calendar size={12} /> {formattedDate}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} /> {readTime} Read</span>
          <span className="px-2 py-0.5 border border-foxOrange/20 text-foxOrange">{current.category}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sumiInk leading-[1.1] mb-8">
          {current.title}
        </h1>
        
        {current.excerpt && (
          <p className="text-xl text-hankoRust italic font-serif leading-relaxed border-l-2 border-foxOrange/30 pl-8 mb-10">
            {current.excerpt}
          </p>
        )}

        {current.mainImage && (
           <div className="mb-10">
              <img 
                src={urlFor(current.mainImage).width(1000).height(600).url()} 
                className="w-full object-cover rounded-sm"
                alt={current.title}
              />
           </div>
        )}
        
        {current.tags && current.tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            <span className="w-full text-[10px] uppercase tracking-widest font-bold text-sumiInk/30 mb-1">Methodologies</span>
            {current.tags.map((tag: string) => (
              <span key={tag} className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-hankoRust/60 border border-hankoRust/10 px-2.5 py-1.5 bg-white">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="article-content max-w-none">
        <PortableText value={current.body} components={ptComponents} />
      </article>

      <section className="mt-24 pt-16 border-t-0.5 border-hankoRust/10">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-sumiInk/30 mb-12 text-center md:text-left">Continue Reading</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {relatedArticles.map((related) => (
            <Link key={related.slug} to={`/writing/${related.slug}`} className="group block">
              <span className="text-[10px] uppercase tracking-widest font-bold text-hankoRust mb-3 block">
                {new Date(related.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })} &bull; {related.category}
              </span>
              <h4 className="text-2xl font-serif text-sumiInk group-hover:text-foxOrange transition-colors leading-tight mb-4">
                {related.title}
              </h4>
              <div className="flex items-center text-[10px] tracking-widest uppercase font-bold text-sumiInk group-hover:translate-x-1 transition-transform duration-300">
                Read Full Essay <span className="ml-2 text-foxOrange">→</span>
              </div>
            </Link>
          ))}
          {relatedArticles.length === 0 && (
            <p className="text-sm text-sumiInk/40 italic">More investigations are underway...</p>
          )}
        </div>
      </section>

      {/* Footer / Resume Link */}
      <div className="mt-32 pt-12 border-t-0.5 border-hankoRust/10 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-hankoRust/5 flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-hankoRust animate-pulse" />
          </div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4">The Investigation Continues</h4>
          <p className="text-sumiInk/50 text-sm max-w-sm mb-8">
            Interested in how these principles apply to your specific operational bottlenecks?
          </p>
          <Link to="/resume" className="text-xs font-bold uppercase tracking-widest border-b border-sumiInk hover:text-foxOrange hover:border-foxOrange transition-all pb-1">
            Review my full experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;