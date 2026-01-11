import React, { useEffect, useState } from 'react'
import { set, useClient, ImageInput, PatchEvent } from 'sanity'

// Quick runtime traces to verify Studio loads this module/component
// Look for lines that start with "[CustomImageInput]" in the browser console.
console.log('[CustomImageInput] module loaded')

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
export function CustomImageInput(props: any) {
  const { value, onChange } = props
  // Render-time trace to confirm the custom input is actually mounted for the field
  console.log('[CustomImageInput] rendered with value:', value)
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
        // Fetch the full asset document to inspect possible metadata fields
        // Use getDocument for a direct fetch by id (more reliable than a GROQ query here)
        let asset: any = null
        try {
          if (typeof client.getDocument === 'function') {
            asset = await client.getDocument(assetRef)
          } else {
            asset = await client.fetch(`*[_id == $assetId][0]`, { assetId: assetRef })
          }
        } catch (err) {
          console.warn('[CustomImageInput] getDocument/fetch failed', err)
          asset = await client.fetch(`*[_id == $assetId][0]`, { assetId: assetRef })
        }
        // Serialize the asset to make sure browser console prints full shape
        let assetSerialized = null
        try {
          assetSerialized = JSON.stringify(asset, null, 2)
        } catch (e) {
          // Fallback if circular or too large
          assetSerialized = String(asset)
        }
        console.log('[CustomImageInput] fetched asset for', assetRef, assetSerialized)
        if (!asset) return

        // Try several places for photographer/name and url
        const sourceName = asset?.source?.name
        const sourceUrl = asset?.source?.url
        const userName = asset?.user?.name || asset?.user?.username
        const userLink = asset?.user?.links?.html || (asset?.user?.username ? `https://unsplash.com/@${asset.user.username}` : undefined)
        const description = asset?.description || asset?.alt_description || asset?.metadata?.description || asset?.metadata?.caption || asset?.caption || null

        // Use creditLine if present (e.g. "Dan Begel by Unsplash") to extract photographer
        const creditLine = asset?.creditLine || asset?.metadata?.creditLine || null
        const creditPhotographer = creditLine ? String(creditLine).split(' by ')[0] : null

        // Prefer photographer name from asset.source if it contains a real name; otherwise fallback to user.name or creditLine
        const photographerName = sourceName && sourceName.toLowerCase() !== 'unsplash' ? sourceName : (userName || null)
        const finalPhotographerName = photographerName || creditPhotographer || null
        const photographerUrl = sourceUrl || userLink || null

        // Debug: log computed metadata so we can see why certain fields may not be set
        console.log('[CustomImageInput] computed metadata:', {
          finalPhotographerName,
          photographerUrl,
          creditLine,
          creditPhotographer,
          description,
        })

        // Only auto-populate if we have meaningful data
        if (!finalPhotographerName && !photographerUrl && !description && !creditLine) return

        const patches: any[] = []
        const rawPatches: any[] = []
        const currentAttribution = imageValue?.attribution
        const currentAttributionUrl = imageValue?.attributionUrl
        console.log('[CustomImageInput] currentAttribution (before):', currentAttribution)

        // Attribution (photographer)
        const shouldReplaceAttribution = !currentAttribution || String(currentAttribution).trim().toLowerCase() === 'unsplash'
        if (shouldReplaceAttribution && finalPhotographerName) {
          patches.push(set(finalPhotographerName, ['attribution']))
          rawPatches.push({ op: 'set', path: ['attribution'], value: finalPhotographerName })
        }
        if (!currentAttributionUrl && photographerUrl) {
          patches.push(set(photographerUrl, ['attributionUrl']))
          rawPatches.push({ op: 'set', path: ['attributionUrl'], value: photographerUrl })
        }

        // Caption: prefer creditLine, then description
        const captionValue = creditLine || description || null
        const currentCaption = (imageValue as any)?.caption
        const shouldSetCaption = !currentCaption || (typeof currentCaption === 'string' && currentCaption.trim() === '')
        if (shouldSetCaption && captionValue) {
          patches.push(set(captionValue, ['caption']))
          rawPatches.push({ op: 'set', path: ['caption'], value: captionValue })
        }

        // Alt text / Unsplash description: prefer explicit description, then caption, then a short photographer fallback
        const currentAlt = (imageValue as any)?.alt
        const photographerFallback = finalPhotographerName ? `Photo by ${finalPhotographerName}` : null

        // Try to derive a useful alt text from the Unsplash URL slug (e.g. "vendor-hands-lamb-skewers-...")
        let slugFromUrl: string | null = null
        try {
          if (sourceUrl) {
            const u = new URL(sourceUrl)
            const parts = u.pathname.split('/').filter(Boolean)
            // look for the segment after "photos" or fall back to final segment
            const photosIndex = parts.indexOf('photos')
            const rawSlug = (photosIndex >= 0 && parts[photosIndex + 1]) ? parts[photosIndex + 1] : parts[parts.length - 1]
            if (rawSlug) {
              const tokens = rawSlug.split('-')
              const last = tokens[tokens.length - 1]
              // strip trailing id-like token (alphanumeric, >=6 chars)
              if (/^[A-Za-z0-9]{6,}$/.test(last)) tokens.pop()
              slugFromUrl = tokens.join(' ').replace(/_/g, ' ').trim()
              if (!slugFromUrl) slugFromUrl = null
            }
          }
        } catch (e) {
          slugFromUrl = null
        }
        console.log('[CustomImageInput] derived slugFromUrl:', slugFromUrl)

        // Prefer a real description, then caption (or credit), then slug-derived text, then photographer fallback
        const altValue = description || captionValue || slugFromUrl || photographerFallback
        console.log('[CustomImageInput] chosen alt value:', { currentAlt, altValue })
        const shouldSetAlt = (!currentAlt || (typeof currentAlt === 'string' && currentAlt.trim() === '')) && altValue
        if (shouldSetAlt) {
          patches.push(set(altValue, ['alt']))
          rawPatches.push({ op: 'set', path: ['alt'], value: altValue })
        }

        // Populate read-only helper fields used by the Studio UI
        // Populate read-only helper fields used by the Studio UI (only if missing)
        const currentUnsplashPhotographer = (imageValue as any)?.unsplashPhotographer
        const currentUnsplashDesc = (imageValue as any)?.unsplashImageDescription
        if ((!currentUnsplashPhotographer || String(currentUnsplashPhotographer).trim() === '') && finalPhotographerName) {
          patches.push(set(finalPhotographerName, ['unsplashPhotographer']))
          rawPatches.push({ op: 'set', path: ['unsplashPhotographer'], value: finalPhotographerName })
        }
        if ((!currentUnsplashDesc || String(currentUnsplashDesc).trim() === '') && description) {
          patches.push(set(description, ['unsplashImageDescription']))
          rawPatches.push({ op: 'set', path: ['unsplashImageDescription'], value: description })
        }

        if (patches.length > 0 && onChange) {
          try {
            console.log('[CustomImageInput] applying patches (sanity PatchEvent):', patches)
            console.log('[CustomImageInput] raw patch preview:', rawPatches)
            onChange(PatchEvent.from(patches))
            console.log('[CustomImageInput] onChange called with PatchEvent')
          } catch (err) {
            // Fallback for older Studio versions that accept raw patch arrays
            console.warn('[CustomImageInput] PatchEvent.from failed, falling back to raw patches', err)
            try {
              onChange(patches as any)
            } catch (err2) {
              console.error('[CustomImageInput] onChange failed for both PatchEvent and raw patches', err2)
            }
          }
        }

      } catch (error) {
        console.error(`Error fetching asset metadata for ${assetRef}:`, error)
      }
    }

    processAsset()
  }, [value, onChange, client, lastAssetRef])

  // Use createElement instead of JSX to avoid TSX parsing issues in some environments
  return React.createElement(ImageInput, props)
}

export default CustomImageInput;
