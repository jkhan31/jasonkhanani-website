import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Jason Khanani Website',

  projectId: 'lrta5lyp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Featured Articles view
            S.listItem()
              .title('Featured Articles (Max 3)')
              .icon(() => '⭐')
              .child(
                S.documentList()
                  .title('Featured Articles')
                  .filter('_type == "article" && isFeatured == true')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.divider(),
            // All Articles
            S.listItem()
              .title('All Articles')
              .schemaType('article')
              .child(S.documentTypeList('article').title('All Articles')),
            S.divider(),
            // Other document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['article'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
    unsplashImageAsset(),
  ].filter(Boolean),

  schema: {
    types: schemaTypes,
  },
})