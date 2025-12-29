# Implementation Architecture

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     SANITY STUDIO                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  User selects Unsplash image via image picker                   │
│         │                                                         │
│         ▼                                                         │
│  ┌──────────────────────────────────────┐                       │
│  │   CustomImageInput Component         │                       │
│  │   (wraps ObjectInput)                │                       │
│  └──────────────────────────────────────┘                       │
│         │                                                         │
│         │ Detects asset._ref change                             │
│         ▼                                                         │
│  ┌──────────────────────────────────────┐                       │
│  │   Fetch Asset Metadata               │                       │
│  │   GROQ: *[_id == $assetId][0]{       │                       │
│  │     source, description               │                       │
│  │   }                                   │                       │
│  └──────────────────────────────────────┘                       │
│         │                                                         │
│         │ Returns asset metadata                                 │
│         ▼                                                         │
│  ┌──────────────────────────────────────┐                       │
│  │   Extract Unsplash Metadata          │                       │
│  │   - source.name → attribution        │                       │
│  │   - source.url → attributionUrl      │                       │
│  │   - description → alt                │                       │
│  └──────────────────────────────────────┘                       │
│         │                                                         │
│         │ Apply patches if fields empty                          │
│         ▼                                                         │
│  ┌──────────────────────────────────────┐                       │
│  │   Save to Document Fields            │                       │
│  │   onChange([                          │                       │
│  │     set(name, ['attribution']),      │                       │
│  │     set(url, ['attributionUrl']),    │                       │
│  │     set(desc, ['alt'])               │                       │
│  │   ])                                  │                       │
│  └──────────────────────────────────────┘                       │
│         │                                                         │
│         ▼                                                         │
│  Fields are populated and saved                                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                         │
                         │ Sanity API
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SANITY DATASET                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Article Document                                                │
│  {                                                                │
│    mainImage: {                                                  │
│      asset: { _ref: "image-..." },                              │
│      attribution: "John Doe",          ← Auto-populated         │
│      attributionUrl: "https://...",    ← Auto-populated         │
│      alt: "Beautiful landscape"        ← Auto-populated         │
│    }                                                             │
│  }                                                                │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                         │
                         │ GROQ Query
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                     FRONTEND APPLICATION                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Queries attribution fields directly:                            │
│  {                                                                │
│    mainImage {                                                   │
│      attribution,           ← Used directly                      │
│      attributionUrl         ← Used directly                      │
│    }                                                             │
│  }                                                                │
│                                                                   │
│  ┌──────────────────────────────────────┐                       │
│  │   ImageAttribution Component         │                       │
│  │   Displays: "Photo by [name]"        │                       │
│  │   with link to photographer          │                       │
│  └──────────────────────────────────────┘                       │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

## Component Structure

```
article.ts / blockContent.ts
    │
    ├─ type: 'image'
    ├─ components: { input: CustomImageInput }  ← Uses custom component
    │
    └─ fields:
        ├─ attribution (string)      ← Auto-populated
        ├─ attributionUrl (url)      ← Auto-populated
        ├─ alt (string)              ← Auto-populated
        ├─ caption (string)          (manual)
        └─ unsplashPhotographer      (read-only display)
```

## Key Implementation Details

### CustomImageInput.tsx

**Hooks Used:**
- `useClient()` - Sanity client for querying asset metadata
- `useEffect()` - Monitor asset reference changes
- `useState()` - Track last processed asset to avoid re-processing

**Type Safety:**
- `ImageValue` interface - Defines structure of image field value
- `AssetSource` interface - Defines Unsplash source metadata structure
- `AssetMetadata` interface - Defines fetched asset data structure

**Logic Flow:**
1. Component receives `value` and `onChange` props from Sanity
2. Extract `asset._ref` from value
3. If ref is new (different from lastAssetRef):
   - Fetch asset metadata using GROQ query
   - Check if asset has `source` property (Unsplash indicator)
   - Build array of patches for empty fields
   - Call `onChange(patches)` to update document
4. Render default `<ObjectInput>` with all default functionality

**Error Handling:**
- Try-catch around asset fetch
- Detailed error logging with asset reference
- Graceful failure (doesn't break form if fetch fails)

**Performance:**
- Only fetches metadata when asset changes (not on every render)
- Uses state to track last processed asset
- Patches only applied if fields are empty (no unnecessary updates)

## Before vs After

### Before (Problem)
```
User selects Unsplash image
    ↓
Image saved with asset reference only
    ↓
attribution field: EMPTY ❌
attributionUrl field: EMPTY ❌
    ↓
Frontend must dereference asset->source (unreliable)
```

### After (Solution)
```
User selects Unsplash image
    ↓
CustomImageInput detects selection
    ↓
Fetches Unsplash metadata
    ↓
Auto-populates fields
    ↓
attribution field: "John Doe" ✅
attributionUrl field: "https://unsplash.com/@johndoe" ✅
    ↓
Frontend uses fields directly (reliable)
```

## Benefits

1. **Data Integrity**: Attribution data saved directly in document
2. **Performance**: Frontend doesn't need to dereference asset->source
3. **Reliability**: Data persists even if asset metadata changes
4. **User Experience**: No manual copying of photographer info
5. **Compliance**: Ensures proper Unsplash attribution per their guidelines
