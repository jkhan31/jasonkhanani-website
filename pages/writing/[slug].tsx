import React, { useMemo, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { client, urlFor } from '../../src/client'; // Import from src folder
import { ImageAttribution } from '../../components/ImageAttribution';
import TableOfContents from '../../components/TableOfContents';
import RelatedArticles from '../../components/RelatedArticles';
import CodeBlock from '../../components/CodeBlock';
import Callout from '../../components/Callout';
import GiscusComments from '../../components/GiscusComments';
import { SITE_DOMAIN, SITE_URL } from '../../constants';

// --- Constants ---
const WORDS_PER_MINUTE = 225;

// --- TOC Placement Configuration ---
// Options: 'sidebar' (sticky sidebar, hidden on mobile) or 'inline' (at beginning, collapsible on mobile)
const TOC_PLACEMENT = 'sidebar' as 'sidebar' | 'inline';

// --- TOC Sidebar Position Configuration ---
// Options: 'left' or 'right' (only applies when TOC_PLACEMENT is 'sidebar')
const TOC_SIDEBAR_POSITION = 'right' as 'left' | 'right';

// --- 1. Helper: Estimate Read Time ---
const getReadTime = (body: any[]) => {
  if (!body) return '5 min';
  const text = body
    .map(block => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => child.text).join('') || '';
      }
      return '';
    })
    .join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return `${minutes} min`;
};

// Helper to extract YouTube video ID
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// --- 2. Styles for the Rich Text (Tactile Aesthetic) ---
// Helper to generate heading IDs from text content
const generateHeadingId = (children: any, prefix: string = ''): string => {
  const text = React.Children.toArray(children)
    .map(child => typeof child === 'string' ? child : '')
    .join('');
  return `${prefix}${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
};

const ptComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-lg text-sumiInk/90 font-sans">{children}</p>,
    h2: ({ children, value }: any) => {
      const id = generateHeadingId(children, 'heading-');
      return (
        <h2 id={id} className="text-3xl md:text-4xl font-serif text-sumiInk mt-12 mb-6 font-bold leading-tight scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const id = generateHeadingId(children, 'heading-');
      return (
        <h3 id={id} className="text-2xl font-serif text-sumiInk/80 mt-10 mb-4 font-semibold scroll-mt-24">
          {children}
        </h3>
      );
    },
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
      
      // Extract Unsplash metadata if available
      const unsplashSource = value.unsplashSource;
      const unsplashDescription = value.unsplashDescription;
      
      // Use manual fields if provided, otherwise fall back to Unsplash metadata
      const alt = value.alt || unsplashDescription || 'Article Illustration';
      const attribution = value.attribution || unsplashSource?.name;
      const attributionUrl = value.attributionUrl || unsplashSource?.url;
      
      return (
        <div className="my-10">
          <img
            src={urlFor(value).width(1200).url()} // Fallback
            srcSet={`
              ${urlFor(value).width(400).url()} 400w,
              ${urlFor(value).width(800).url()} 800w,
              ${urlFor(value).width(1200).url()} 1200w
            `}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
            alt={alt}
            loading="lazy"
            className="w-full h-auto rounded-sm border-0.5 border-sumiInk/10 shadow-sm"
          />
          {value.caption && <p className="text-center text-xs uppercase tracking-widest text-sumiInk/60 mt-3">{value.caption}</p>}
          <ImageAttribution
            attribution={attribution}
            attributionUrl={attributionUrl}
            className="text-center"
          />
        </div>
      );
    },
    codeBlock: ({ value }: any) => (
      <CodeBlock 
        code={value.code} 
        language={value.language} 
        filename={value.filename} 
      />
    ),
    callout: ({ value }: any) => (
      <Callout type={value.type} content={value.content} />
    ),
    youtube: ({ value }: any) => {
      const videoId = getYouTubeId(value.url);
      if (!videoId) return null;
      
      return (
        <div className="my-10">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-sm"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value.caption && (
            <p className="text-center text-xs uppercase tracking-widest text-sumiInk/60 mt-3">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    quoteBlock: ({ value }: any) => (
      <div className="my-12 px-8 py-6 border-l-4 border-foxOrange bg-foxOrange/5">
        <p className="text-xl italic text-sumiInk/90 leading-relaxed mb-4">
          "{value.quote}"
        </p>
        <div className="text-sm text-sumiInk/70">
          <span className="font-semibold">— {value.author}</span>
          {value.source && (
            <>
              {value.sourceUrl ? (
                <>, <a href={value.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-foxOrange hover:underline">{value.source}</a></>
              ) : (
                <>, {value.source}</>
              )}
            </>
          )}
        </div>
      </div>
    ),
  }
  ,
    marks: {
    link: ({ value, children }: any) => {
      const target = (value?.href || '');
      const isInternal = target.startsWith('/') || target.includes(SITE_DOMAIN);

      // Wrap children in a deterministic inline element to avoid
      // server/client hydration mismatches when children contain
      // variable or block-level nodes coming from Portable Text.
      const inlineChildren = <span className="inline">{children}</span>;

      if (isInternal) {
        // Remove domain and any hash fragments for clean internal routing
        const relativePath = target
          .replace(`https://${SITE_DOMAIN}`, '')
          .replace(`http://${SITE_DOMAIN}`, '')
          .replace('/#', '');

        return (
          <Link 
            href={relativePath || '/'} 
            className="text-foxOrange underline decoration-foxOrange/30 hover:decoration-foxOrange transition-all font-medium"
          >
            {inlineChildren}
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
          {inlineChildren}
        </a>
      );
    },
  },
};

interface ArticleProps {
  data: { current: any; allOthers: any[] };
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  if (!data?.current) {
    return null;
  }

  // Track article view on mount
  useEffect(() => {
    const trackView = async () => {
      try {
        await fetch('/api/track-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            slug: data.current.slug.current,
          }),
        });
      } catch (error) {
        // Silently fail - we don't want to disrupt user experience
        console.error('Failed to track view:', error);
      }
    };

    trackView();
  }, [data.current.slug.current]);

  // --- 4. Related Articles Logic ---
  const relatedArticles = useMemo(() => {
    if (!data?.current) return [];
    
    // If manual related articles are selected, use those
    if (data.current.relatedArticles && data.current.relatedArticles.length > 0) {
      return data.current.relatedArticles.slice(0, 3);
    }
    
    // Otherwise, auto-suggest based on same category and tags
    if (!data?.allOthers) return [];
    
    const currentTags = data.current.tags || [];
    const currentCategory = data.current.category;

    return data.allOthers
      .sort((a, b) => {
        const aTags = a.tags || [];
        const bTags = b.tags || [];
        
        // Prioritize same category
        const aSameCategory = a.category === currentCategory ? 1 : 0;
        const bSameCategory = b.category === currentCategory ? 1 : 0;
        if (bSameCategory !== aSameCategory) return bSameCategory - aSameCategory;
        
        // Then by tag matches
        const aMatches = aTags.filter((t: string) => currentTags.includes(t)).length;
        const bMatches = bTags.filter((t: string) => currentTags.includes(t)).length;
        if (bMatches !== aMatches) return bMatches - aMatches;
        
        // Finally by date (newest first)
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      })
      .slice(0, 3);
  }, [data]);  // Data is pre-fetched
  // Error/Not Found
  

  const { current } = data;
  const formattedDate = new Date(current.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
  const readTime = getReadTime(current.body);

  // Page title shown in browser tabs: prefer the canonical `title` field
  // Use SEO/meta fields for description and social tags, but avoid using them
  // as the primary page title to prevent accidental overrides from CMS meta fields.
  const pageTitle = current.title || current.seoTitle || current.metaTitle || current.slug?.current || 'Untitled Article';
  const pageDescription = current.seoDescription || current.metaDescription || current.excerpt || '';
  const socialTitle = current.metaTitle || current.seoTitle || current.title || current.slug?.current || 'Jason K Hanani';
  const socialDescription = current.metaDescription || current.seoDescription || current.excerpt || '';
  
  // Generate social image URL for Open Graph and Twitter Cards
  const socialImageUrl = current.ogImage 
    ? urlFor(current.ogImage).width(1200).height(630).url()
    : current.mainImage 
    ? urlFor(current.mainImage).width(1200).height(630).url() 
    : '';

  return (
    <div className={`${TOC_PLACEMENT === 'sidebar' ? 'flex gap-12' : ''} px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700`}>
      {/* Table of Contents - Left Sidebar (if configured) */}
      {TOC_PLACEMENT === 'sidebar' && TOC_SIDEBAR_POSITION === 'left' && (
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents content={current.body} placement="sidebar" />
        </aside>
      )}
      
      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
          <Head>
            <title>{`${pageTitle} | Jason K Hanani`}</title>
            <meta name="description" content={pageDescription} />
            <link rel="canonical" href={`${SITE_URL}/writing/${current.slug.current}`} />

            {/* Keywords */}
            {current.keywords && current.keywords.length > 0 && (
              <meta name="keywords" content={current.keywords.join(', ')} />
            )}

            {/* Open Graph tags */}
            <meta property="og:title" content={socialTitle} />
            <meta property="og:description" content={socialDescription} />
            <meta property="og:url" content={`${SITE_URL}/writing/${current.slug.current}`} />
            {socialImageUrl && <meta property="og:image" content={socialImageUrl} />}
            <meta property="og:type" content="article" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={socialTitle} />
            <meta name="twitter:description" content={socialDescription} />
            {socialImageUrl && <meta name="twitter:image" content={socialImageUrl} />}
        </Head>

      <Link 
        href="/writing" 
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-hankoRust hover:text-foxOrange transition-colors mb-12 group"
      >
        <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Writing
      </Link>

      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-sumiInk/60 mb-6">
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
                src={urlFor(current.mainImage).width(1000).url()} // Fallback
                srcSet={`
                  ${urlFor(current.mainImage).width(400).url()} 400w,
                  ${urlFor(current.mainImage).width(800).url()} 800w,
                  ${urlFor(current.mainImage).width(1000).url()} 1000w
                `}
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1000px"
                alt={current.mainImage.alt || current.mainImage.unsplashDescription || current.title}
                loading="eager"
                className="w-full object-cover rounded-sm"
              />
              <ImageAttribution
                attribution={current.mainImage.attribution || current.mainImage.unsplashSource?.name}
                attributionUrl={current.mainImage.attributionUrl || current.mainImage.unsplashSource?.url}
                className="text-center"
              />
           </div>
        )}
        
        {current.tags && current.tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            <span className="w-full text-[10px] uppercase tracking-widest font-bold text-sumiInk/50 mb-1">Methodologies</span>
            {current.tags.map((tag: string) => (
              <span key={tag} className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-hankoRust/80 border border-hankoRust/10 px-2.5 py-1.5 bg-white">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Table of Contents - Inline placement (if selected) */}
      {TOC_PLACEMENT === 'inline' && <TableOfContents content={current.body} placement="inline" />}

      <article className="article-content max-w-none">
        <PortableText value={current.body} components={ptComponents} />
      </article>

      {/* Related Articles Component */}
      <RelatedArticles articles={relatedArticles} />

      {/* Comments Section */}
      <GiscusComments 
        articleTitle={current.title}
        articleSlug={current.slug.current}
      />

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
          <Link href="/resume" className="text-xs font-bold uppercase tracking-widest border-b border-sumiInk hover:text-foxOrange hover:border-foxOrange transition-all pb-1">
            Review my full experience
          </Link>
        </div>
      </div>
    </div>
    
    {/* Table of Contents - Right Sidebar (if configured) */}
    {TOC_PLACEMENT === 'sidebar' && TOC_SIDEBAR_POSITION === 'right' && (
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <TableOfContents content={current.body} placement="sidebar" />
      </aside>
    )}
  </div>
  );
};

export default Article;
// Next.js Static Generation
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const query = `*[_type == "article" 
      && (
        !defined(status) || 
        status == "published" || 
        (status == "scheduled" && scheduledPublishDate <= now())
      )
    ]{ "slug": slug.current }`;
    
    const articles = await client.fetch(query);
    
    const paths = articles.map((article: any) => ({
      params: { slug: article.slug },
    }));

    return {
      paths,
      fallback: 'blocking', // Generate pages on-demand for new slugs
    };
  } catch (error) {
    console.error('Error fetching article slugs:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    
    const query = `{
      "current": *[_type == "article" 
        && slug.current == $slug
        && (
          !defined(status) || 
          status == "published" || 
          (status == "scheduled" && scheduledPublishDate <= now())
        )
      ][0]{
        title,
        excerpt,
        publishedAt,
        status,
        scheduledPublishDate,
        mainImage {
          asset,
          alt,
          caption,
          attribution,
          attributionUrl,
          "unsplashSource": asset->source,
          "unsplashDescription": asset->description
        },
        body[]{
          ...,
          _type == "image" => {
            ...,
            "unsplashSource": asset->source,
            "unsplashDescription": asset->description,
            caption,
            attribution,
            attributionUrl
          }
        },
        "slug": slug,
        "category": category->title,
        "categorySlug": category->slug.current,
        "tags": tags[]->title,
        relatedArticles[]->{
          title,
          "slug": slug.current,
          excerpt,
          publishedAt,
          "category": category->title,
          mainImage {
            asset,
            "unsplashDescription": asset->description
          }
        },
        seoTitle,
        seoDescription,
        metaTitle,
        metaDescription,
        ogImage {
          asset,
          "unsplashDescription": asset->description
        },
        keywords
      },
      "allOthers": *[_type == "article" 
        && slug.current != $slug
        && (
          !defined(status) || 
          status == "published" || 
          (status == "scheduled" && scheduledPublishDate <= now())
        )
      ]{
        title,
        "slug": slug.current,
        publishedAt,
        "category": category->title,
        "tags": tags[]->title
      }
    }`;

    const data = await client.fetch(query, { slug });

    if (!data?.current) {
      return {
        notFound: true,
        revalidate: 60, // Revalidate even when not found
      };
    }

    return {
      props: {
        data,
      },
      revalidate: 60, // Regenerate page every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
      revalidate: 60, // Revalidate on error
    };
  }
};
