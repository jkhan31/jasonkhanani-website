import { defineType, defineArrayMember } from 'sanity'

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
            fields: [
                {
                    type: 'string',
                    name: 'alt',
                    title: 'Alt Text',
                    description: 'Unsplash images auto-populate from description. Manual images require alt text for accessibility.',
                    validation: (Rule) => Rule.custom((value, context) => {
                        const parent = context.parent as any;
                        const hasUnsplashSource = parent?.asset?._ref && parent?.asset?.source;
                        // Only require alt text if it's NOT from Unsplash (no source metadata)
                        if (!hasUnsplashSource && !value) {
                            return 'Alt text is required for manually uploaded images for accessibility';
                        }
                        return true;
                    })
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
            ]
        }),
    ],
})