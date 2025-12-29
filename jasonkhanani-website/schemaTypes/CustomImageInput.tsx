import React, { useEffect, useState } from 'react'
import { ObjectInputProps, set, useClient } from 'sanity'
import { ObjectInput } from 'sanity'

// Sanity API version constant
const SANITY_API_VERSION = '2024-01-01'

// Type definitions for better type safety
interface ImageValue {
  asset?: {
    _ref?: string
  }
  attribution?: string
  attributionUrl?: string
  alt?: string
}

interface AssetSource {
  name?: string
  url?: string
}

interface AssetMetadata {
  source?: AssetSource
  description?: string
}

/**
 * Custom Image Field Component that auto-populates attribution fields from Unsplash metadata
 * 
 * This component wraps the default Sanity ObjectInput for image fields and adds functionality 
 * to automatically populate the 'attribution' and 'attributionUrl' fields when an Unsplash 
 * image is selected.
 * 
 * How it works:
 * 1. Monitors changes to the image asset reference
 * 2. Fetches the asset document to check for Unsplash source metadata
 * 3. When Unsplash metadata is found (asset.source)
 * 4. Automatically patches attribution = asset.source.name
 * 5. Automatically patches attributionUrl = asset.source.url
 */
export function CustomImageInput(props: ObjectInputProps) {
  const { value, onChange } = props
  const client = useClient({ apiVersion: SANITY_API_VERSION })
  const [lastAssetRef, setLastAssetRef] = useState<string | null>(null)

  // Monitor for changes to the asset and auto-populate attribution fields
  useEffect(() => {
    const processAsset = async () => {
      if (!value || !onChange) return

      const imageValue = value as ImageValue
      const assetRef = imageValue?.asset?._ref

      // Only process if we have a new asset reference
      if (!assetRef || assetRef === lastAssetRef) return
      
      setLastAssetRef(assetRef)

      try {
        // Fetch the asset document to get source metadata
        const asset = await client.fetch<AssetMetadata>(
          `*[_id == $assetId][0]{ source, description }`,
          { assetId: assetRef }
        )

        if (!asset || !asset.source) return

        // Check if this is an Unsplash image (has source.name and source.url)
        const { name, url } = asset.source
        if (!name || !url) return

        // Only auto-populate if the fields are currently empty
        const currentAttribution = imageValue?.attribution
        const currentAttributionUrl = imageValue?.attributionUrl

        const patches = []

        // Set attribution if empty
        if (!currentAttribution) {
          patches.push(set(name, ['attribution']))
        }

        // Set attributionUrl if empty
        if (!currentAttributionUrl) {
          patches.push(set(url, ['attributionUrl']))
        }

        // Also populate alt text from Unsplash description if empty
        if (!imageValue?.alt && asset.description) {
          patches.push(set(asset.description, ['alt']))
        }

        // Apply all patches
        if (patches.length > 0) {
          onChange(patches)
        }

      } catch (error) {
        console.error(`Error fetching asset metadata for ${assetRef}:`, error)
      }
    }

    processAsset()
  }, [value, onChange, client, lastAssetRef])

  return <ObjectInput {...props} />
}
