import { defineType, defineArrayMember } from 'sanity'
import { UnsplashPhotographerInput, UnsplashDescriptionInput } from './unsplashComponents'
import { CustomImageInput } from './CustomImageInput'

export default defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
            components: {
                input: CustomImageInput,
            },
            fields: [
                {
                    type: 'string',
                    name: 'alt',
                    title: 'Alt Text',
                    description: 'Unsplash images auto-populate from description. Recommended for manually uploaded images for accessibility.',
                },
                {
                    type: 'string',
                    name: 'caption',
                    title: 'Caption',
                    description: 'Optional caption displayed below the image'
                },
                {
                    type: 'string',
                    name: 'attribution',
                    title: 'Photo Credit',
                    description: 'Photographer name (auto-populated for Unsplash images)',
                },
                {
                    type: 'url',
                    name: 'attributionUrl',
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
            ]
        }),
        // Custom Code Block
        defineArrayMember({
            name: 'codeBlock',
            type: 'object',
            title: 'Code Block',
            icon: () => '💻',
            fields: [
                {
                    name: 'code',
                    type: 'text',
                    title: 'Code',
                    rows: 10,
                },
                {
                    name: 'language',
                    type: 'string',
                    title: 'Language',
                    options: {
                        list: [
                            { title: 'JavaScript', value: 'javascript' },
                            { title: 'TypeScript', value: 'typescript' },
                            { title: 'Python', value: 'python' },
                            { title: 'Java', value: 'java' },
                            { title: 'C++', value: 'cpp' },
                            { title: 'C#', value: 'csharp' },
                            { title: 'Go', value: 'go' },
                            { title: 'Rust', value: 'rust' },
                            { title: 'HTML', value: 'html' },
                            { title: 'CSS', value: 'css' },
                            { title: 'SQL', value: 'sql' },
                            { title: 'Bash', value: 'bash' },
                            { title: 'JSON', value: 'json' },
                            { title: 'YAML', value: 'yaml' },
                        ],
                    },
                    initialValue: 'javascript',
                },
                {
                    name: 'filename',
                    type: 'string',
                    title: 'Filename (optional)',
                    description: 'Display a filename above the code block',
                },
            ],
            preview: {
                select: {
                    language: 'language',
                    code: 'code',
                    filename: 'filename',
                },
                prepare({ language, code, filename }) {
                    const title = filename || `Code (${language})`
                    const codePreview = code ? code.substring(0, 50) + '...' : ''
                    return {
                        title,
                        subtitle: codePreview,
                    }
                },
            },
        }),
        // Custom Callout/Alert Box
        defineArrayMember({
            name: 'callout',
            type: 'object',
            title: 'Callout Box',
            icon: () => '💡',
            fields: [
                {
                    name: 'type',
                    type: 'string',
                    title: 'Type',
                    options: {
                        list: [
                            { title: 'ℹ️ Info', value: 'info' },
                            { title: '⚠️ Warning', value: 'warning' },
                            { title: '✅ Success', value: 'success' },
                            { title: '❌ Error', value: 'error' },
                        ],
                        layout: 'radio',
                    },
                    initialValue: 'info',
                },
                {
                    name: 'content',
                    type: 'text',
                    title: 'Content',
                    rows: 3,
                },
            ],
            preview: {
                select: {
                    type: 'type',
                    content: 'content',
                },
                prepare({ type, content }) {
                    const icons = {
                        info: 'ℹ️',
                        warning: '⚠️',
                        success: '✅',
                        error: '❌',
                    }
                    return {
                        title: `${icons[type as keyof typeof icons] || '💡'} ${type.toUpperCase()} Callout`,
                        subtitle: content,
                    }
                },
            },
        }),
        // YouTube Embed
        defineArrayMember({
            name: 'youtube',
            type: 'object',
            title: 'YouTube Video',
            icon: () => '📺',
            fields: [
                {
                    name: 'url',
                    type: 'url',
                    title: 'YouTube URL',
                    validation: (Rule) =>
                        Rule.required().custom((url: string) => {
                            if (!url) return true
                            const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
                            return youtubeRegex.test(url) || 'Please enter a valid YouTube URL'
                        }),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption (optional)',
                },
            ],
            preview: {
                select: {
                    url: 'url',
                    caption: 'caption',
                },
                prepare({ url, caption }) {
                    return {
                        title: caption || 'YouTube Video',
                        subtitle: url,
                    }
                },
            },
        }),
        // Quote with Attribution
        defineArrayMember({
            name: 'quoteBlock',
            type: 'object',
            title: 'Quote with Attribution',
            icon: () => '💬',
            fields: [
                {
                    name: 'quote',
                    type: 'text',
                    title: 'Quote',
                    rows: 3,
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'author',
                    type: 'string',
                    title: 'Author',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'source',
                    type: 'string',
                    title: 'Source (optional)',
                    description: 'e.g., Book title, Company name',
                },
                {
                    name: 'sourceUrl',
                    type: 'url',
                    title: 'Source URL (optional)',
                },
            ],
            preview: {
                select: {
                    quote: 'quote',
                    author: 'author',
                },
                prepare({ quote, author }) {
                    return {
                        title: `"${quote.substring(0, 50)}..."`,
                        subtitle: `— ${author}`,
                    }
                },
            },
        }),
    ],
})