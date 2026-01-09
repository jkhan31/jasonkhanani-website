import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'lrta5lyp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Add token for write operations
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export default client