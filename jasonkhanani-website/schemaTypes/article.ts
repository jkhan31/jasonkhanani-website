import { defineField, defineType } from 'sanity'
import { UnsplashPhotographerInput, UnsplashDescriptionInput } from './unsplashComponents'
import { CustomImageInput } from './CustomImageInput'

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
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
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
        // --- SEO ---
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            fieldset: 'metadata',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            fieldset: 'metadata',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            category: 'category.title',
            isFeatured: 'isFeatured',
        },
        prepare(selection) {
            const { category, isFeatured } = selection
            const subtitle = isFeatured 
                ? `⭐ FEATURED | ${category || 'Uncategorized'}`
                : category || 'Uncategorized'
            return { ...selection, subtitle }
        },
    },
})