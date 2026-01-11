import { defineField, defineType } from 'sanity'
import { UnsplashPhotographerInput, UnsplashDescriptionInput } from './unsplashComponents'
import { CustomImageInput } from './CustomImageInput'
import { AnalyticsDisplay } from './AnalyticsDisplay'

export default defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    fieldsets: [
        { name: 'taxonomy', title: 'Taxonomy & Organization' },
        { name: 'metadata', title: 'SEO & Social Metadata', options: { collapsible: true, collapsed: true } },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        // --- PUBLISHING STATUS ---
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Draft', value: 'draft' },
                    { title: 'Published', value: 'published' },
                    { title: 'Scheduled', value: 'scheduled' },
                ],
                layout: 'radio',
            },
            initialValue: 'published',
            description: 'Control article visibility. Draft articles won\'t appear on the frontend.',
        }),
        defineField({
            name: 'scheduledPublishDate',
            title: 'Scheduled Publish Date',
            type: 'datetime',
            description: 'Article will only appear on frontend after this date (when status is "scheduled")',
            hidden: ({ document }: any) => document?.status !== 'scheduled',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Select an image from uploads or use the Media Library Unsplash asset source to search Unsplash images.',
            components: {
                input: CustomImageInput,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Unsplash images auto-populate from description. Recommended for manually uploaded images for accessibility.',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Photo Credit',
                    description: 'Photographer name (auto-populated for Unsplash images)',
                },
                {
                    name: 'attributionUrl',
                    type: 'url',
                    title: 'Photographer URL',
                    description: 'Link to photographer profile (auto-populated for Unsplash images)',
                },
                {
                    name: 'unsplashPhotographer',
                    type: 'string',
                    title: '📷 Unsplash Photographer',
                    description: 'Read-only: Auto-populated from Unsplash metadata',
                    readOnly: true,
                    hidden: ({ parent }: any) => !parent?.asset?.source?.name,
                    components: {
                        input: UnsplashPhotographerInput,
                    },
                },
                {
                    name: 'unsplashImageDescription',
                    type: 'text',
                    title: '📝 Unsplash Description',
                    description: 'Read-only: Auto-populated from Unsplash metadata',
                    rows: 2,
                    readOnly: true,
                    hidden: ({ parent }: any) => !parent?.asset?.description,
                    components: {
                        input: UnsplashDescriptionInput,
                    },
                },
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'Displayed on the ArticlePreviewCard.',
            validation: (Rule) => Rule.max(200),
        }),
        // --- TAXONOMY ---
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
            fieldset: 'taxonomy',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'series',
            title: 'Series',
            type: 'reference',
            to: { type: 'series' },
            fieldset: 'taxonomy',
            description: 'Is this part of a larger framework like PWA?',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
            fieldset: 'taxonomy',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured Insight?',
            type: 'boolean',
            initialValue: false,
            fieldset: 'taxonomy',
            description: 'Maximum of 3 articles can be featured. If 3 are already featured, you must unfeature one first.',
            validation: (Rule) => Rule.custom(async (value, context) => {
                // Only validate when trying to set to true
                if (!value) return true;
                
                const { document, getClient } = context;
                const client = getClient({ apiVersion: '2023-05-03' });
                
                // Query to count featured articles excluding current document
                const query = `count(*[_type == "article" && isFeatured == true && _id != $currentId])`;
                const params = { currentId: document?._id || 'new' };
                
                try {
                    const featuredCount = await client.fetch(query, params);
                    
                    if (featuredCount >= 3) {
                        return 'Maximum of 3 featured articles reached. Please unfeature another article first.';
                    }
                    
                    return true;
                } catch (error) {
                    console.error('Error validating featured count:', error);
                    // Allow the operation if validation fails to avoid blocking
                    return true;
                }
            }),
        }),
        // --- CONTENT ---
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'readingTime',
            title: 'Reading Time',
            type: 'number',
            readOnly: true,
            description: 'Auto-calculated based on word count (~200-250 words per minute)',
            hidden: true, // We'll calculate this on the frontend
        }),
        defineField({
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'article' } }],
            validation: (Rule) => Rule.max(3),
            description: 'Manually select up to 3 related articles. If none selected, articles from the same category will be auto-suggested.',
        }),
        // --- SEO ---
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            fieldset: 'metadata',
            description: 'Optional: Override the article title for SEO purposes',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            fieldset: 'metadata',
            description: 'Optional: Override the excerpt for SEO meta description',
        }),
        defineField({
            name: 'metaTitle',
            title: 'Social Share Title',
            type: 'string',
            fieldset: 'metadata',
            description: 'Optional: Override title for Open Graph and Twitter Cards',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Social Share Description',
            type: 'text',
            rows: 3,
            fieldset: 'metadata',
            description: 'Optional: Override excerpt for social media previews',
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Share Image',
            type: 'image',
            fieldset: 'metadata',
            description: 'Optional: Override main image for Open Graph and Twitter Cards (1200x630 recommended)',
            options: { hotspot: true },
        }),
        defineField({
            name: 'keywords',
            title: 'SEO Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            fieldset: 'metadata',
            description: 'Keywords for SEO purposes',
        }),
        defineField({
            name: 'analytics',
            title: 'Analytics (Read-Only)',
            type: 'object',
            fieldset: 'metadata',
            readOnly: true,
            description: 'View statistics (populated by frontend tracking)',
            components: {
                input: AnalyticsDisplay,
            },
            fields: [
                {
                    name: 'views',
                    title: 'Total Views',
                    type: 'number',
                    initialValue: 0,
                },
                {
                    name: 'lastViewed',
                    title: 'Last Viewed',
                    type: 'datetime',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            category: 'category.title',
            isFeatured: 'isFeatured',
            status: 'status',
            scheduledPublishDate: 'scheduledPublishDate',
        },
        prepare(selection) {
            const { category, isFeatured, status, scheduledPublishDate } = selection
            
            let statusIcon = ''
            if (status === 'draft') {
                statusIcon = '📝 DRAFT | '
            } else if (status === 'scheduled') {
                const date = scheduledPublishDate ? new Date(scheduledPublishDate).toLocaleDateString() : 'Date TBD'
                statusIcon = `🕐 SCHEDULED (${date}) | `
            }
            
            const featuredText = isFeatured ? '⭐ FEATURED | ' : ''
            const subtitle = `${statusIcon}${featuredText}${category || 'Uncategorized'}`
            
            return { ...selection, subtitle }
        },
    },
})