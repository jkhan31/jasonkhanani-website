import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'articleView',
  title: 'Article View',
  type: 'document',
  fields: [
    defineField({
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: { type: 'article' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
    }),
    defineField({
      name: 'referrer',
      title: 'Referrer',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'article.title',
      timestamp: 'timestamp',
    },
    prepare(selection) {
      const { title, timestamp } = selection
      const date = timestamp ? new Date(timestamp).toLocaleString() : 'Unknown date'
      return {
        title: title || 'Unknown Article',
        subtitle: `Viewed: ${date}`,
      }
    },
  },
})
