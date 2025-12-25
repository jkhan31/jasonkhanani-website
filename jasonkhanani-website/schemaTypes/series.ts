import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'series',
    title: 'Series',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Series Title',
            type: 'string',
            description: 'e.g., The Purpose-Wellbeing Axis',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief explanation of this framework.',
        }),
    ],
})