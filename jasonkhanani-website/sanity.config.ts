import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' // Note: 'deskTool' is renamed to 'structureTool' in v3/v4 clean templates
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { schemaTypes } from './schemaTypes' // <--- ENSURE THIS MATCHES YOUR FOLDER NAME

export default defineConfig({
  name: 'default',
  title: 'Jason Khanani Website',

  projectId: 'lrta5lyp',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), unsplashImageAsset()].filter(Boolean),

  schema: {
    types: schemaTypes,
  },
})