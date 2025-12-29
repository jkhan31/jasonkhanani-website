import { defineField, defineType } from 'sanity'
import React from 'react'

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
                        input: (props: any) => {
                            const photographerName = props.parent?.asset?.source?.name;
                            return photographerName ? React.createElement('div', { 
                                style: { padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem', fontSize: '0.875rem' } 
                            }, photographerName) : null;
                        }
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
                        input: (props: any) => {
                            const description = props.parent?.asset?.description;
                            return description ? React.createElement('div', { 
                                style: { padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem', fontSize: '0.875rem' } 
                            }, description) : null;
                        }
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