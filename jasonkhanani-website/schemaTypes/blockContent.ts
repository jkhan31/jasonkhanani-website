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
    ],
})