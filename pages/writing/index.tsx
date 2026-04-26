import React, { useMemo, useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { SectionHeader } from '../../components/SectionHeader';
import { client } from '../../src/client';
import { SITE_URL } from '../../constants';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  status: string;
  body?: any[];
  tags?: Array<{ _ref: string; title?: string }>;
  _type: 'article';
}

interface WritingIndexProps {
  articles: Article[];
}

// Helper: Calculate reading time
const getReadTime = (body: any[]) => {
  if (!body) return 5;
  const WORDS_PER_MINUTE = 225;
  const text = body
    .map((block) => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => child.text).join('') || '';
      }
      return '';
    })
    .join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / WORDS_PER_MINUTE);
};

// Helper: Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Article Entry Component
const ArticleEntry: React.FC<{
  article: Article;
  readTime: number;
}> = ({ article, readTime }) => {
  return (
    <Link href={`/writing/${article.slug.current}`}>
      <article className="group py-8 border-b-0.5 border-sumiInk/10 hover:border-sumiInk/20 transition-colors cursor-pointer">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-sumiInk mb-3 group-hover:text-hankoRust transition-colors leading-snug">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-lg text-sumiInk/75 mb-4 leading-relaxed max-w-2xl font-sans">
          {article.excerpt}
        </p>

        {/* Metadata: Date, Reading Time, Tags */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-sumiInk/60 font-sans">
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span className="text-sumiInk/40">·</span>
          <span>{readTime} min read</span>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <>
              <span className="text-sumiInk/40">·</span>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag._ref}
                    className="inline-block px-2 py-1 text-xs uppercase tracking-wider rounded-sm border-0.5 border-foxOrange/40 text-foxOrange/80 bg-foxOrange/5"
                  >
                    {tag.title || 'untagged'}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </article>
    </Link>
  );
};

const WritingIndex: React.FC<WritingIndexProps> = ({ articles }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach((article) => {
      article.tags?.forEach((tag) => {
        tagSet.add(tag.title || tag._ref);
      });
    });
    return Array.from(tagSet).sort();
  }, [articles]);

  // Filter articles by selected tag
  const filteredArticles = useMemo(() => {
    if (!selectedTag) return articles;
    return articles.filter((article) =>
      article.tags?.some((tag) => (tag.title || tag._ref) === selectedTag)
    );
  }, [articles, selectedTag]);

  return (
    <>
      <Head>
        <title>Writing | Jason K Hanani</title>
        <meta
          name="description"
          content="Articles, case studies, and insights on systems, data, and operations."
        />
        <meta property="og:title" content="Writing - Jason K Hanani" />
        <meta
          property="og:description"
          content="Thoughts on product operations, data analysis, and systems design."
        />
        <meta property="og:url" content={`${SITE_URL}/writing`} />
        <link rel="canonical" href={`${SITE_URL}/writing`} />
      </Head>

      <div className="min-h-screen bg-ricePaper">
        <div className="px-6 py-16 md:py-24 max-w-4xl mx-auto animate-in fade-in duration-700">
          {/* Header */}
          <div className="mb-12">
            <SectionHeader
              title="Writing"
              className="mb-6"
            />
            <p className="text-lg text-sumiInk/70 leading-relaxed max-w-2xl font-sans">
              Insights on systems, operations, and data-driven thinking. Case studies, methodologies, and the occasional deep dive.
            </p>
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="mb-12 pb-8 border-b-0.5 border-sumiInk/10">
              <p className="text-xs uppercase tracking-widest text-sumiInk/60 mb-4 font-sans font-semibold">
                Filter by tag
              </p>
              <div className="flex flex-wrap gap-2">
                {/* "All" button */}
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 text-sm uppercase tracking-wider rounded-sm border-0.5 transition-all font-sans font-medium ${
                    selectedTag === null
                      ? 'border-hankoRust text-hankoRust bg-hankoRust/10'
                      : 'border-sumiInk/20 text-sumiInk/70 hover:border-sumiInk/40 hover:text-sumiInk/90'
                  }`}
                >
                  All
                </button>

                {/* Tag buttons */}
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 text-sm uppercase tracking-wider rounded-sm border-0.5 transition-all font-sans font-medium ${
                      selectedTag === tag
                        ? 'border-foxOrange text-foxOrange bg-foxOrange/10'
                        : 'border-sumiInk/20 text-sumiInk/70 hover:border-sumiInk/40 hover:text-sumiInk/90'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles List */}
          <div>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleEntry
                  key={article._id}
                  article={article}
                  readTime={getReadTime(article.body || [])}
                />
              ))
            ) : (
              <p className="text-center text-sumiInk/60 py-12 font-sans">
                No articles found with that tag.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<WritingIndexProps> = async () => {
  const query = `
    *[_type == "article" && status == "published"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      status,
      body,
      tags[]->{
        _ref,
        title
      },
      _type
    }
  `;

  try {
    const articles = await client.fetch(query);

    return {
      props: {
        articles: articles || [],
      },
      revalidate: 60, // ISR: revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
      },
      revalidate: 60,
    };
  }
};

export default WritingIndex;
