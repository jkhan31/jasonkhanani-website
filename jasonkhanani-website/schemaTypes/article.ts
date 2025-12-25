import { defineField, defineType } from 'sanity'

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
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule) => Rule.required(),
                }
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
        },
        prepare(selection) {
            const { category } = selection
            return { ...selection, subtitle: category }
        },
    },
})