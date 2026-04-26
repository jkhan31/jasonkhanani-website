import { defineField, defineType } from 'sanity'
import { CustomImageInput } from './CustomImageInput'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
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
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Draft', value: 'draft' },
                    { title: 'Published', value: 'published' },
                ],
                layout: 'radio',
            },
            initialValue: 'published',
            description: 'Control case study visibility. Draft case studies won\'t appear on the frontend.',
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Main image for the case study showcase',
            components: {
                input: CustomImageInput,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
            ],
        }),
        defineField({
            name: 'excerpt',
            title: 'Lead / Summary',
            type: 'text',
            rows: 3,
            description: 'Brief summary displayed in case study preview cards',
            validation: (Rule) => Rule.max(300),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            description: 'Rich content: text, images, code blocks, callouts, videos, and more',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
            description: 'Tag this as "case-study" and add project type (e.g., "marketplace", "operations", "technical")',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            status: 'status',
        },
        prepare(selection) {
            const { status } = selection
            const statusIcon = status === 'draft' ? '📝 DRAFT | ' : ''
            const subtitle = `${statusIcon}Case Study`

            return { ...selection, subtitle }
        },
    },
})
