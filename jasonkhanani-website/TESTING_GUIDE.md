# Unsplash Attribution Auto-Population Testing Guide

This guide explains how to test the new Unsplash attribution auto-population feature.

## Prerequisites

1. Ensure you have an Unsplash API key configured in your `.env` file:
   ```env
   UNSPLASH_ACCESS_KEY=your_access_key_here
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Sanity Studio dev server:
   ```bash
   npm run dev
   ```

## Test Case 1: Auto-populate Main Image Attribution

1. Open Sanity Studio in your browser (usually http://localhost:3333)
2. Create a new article or edit an existing one
3. Click on the "Main Image" field
4. Select "Unsplash" as the image source
5. Choose any Unsplash image
6. After the image is selected, observe the following fields:
   - **Photo Credit** (`attribution`) should be automatically populated with the photographer's name
   - **Photographer URL** (`attributionUrl`) should be automatically populated with the Unsplash profile URL
   - **Alternative Text** (`alt`) should be automatically populated with the image description (if available)

### Expected Behavior

- The fields should populate automatically within 1-2 seconds after selecting the image
- The read-only "📷 Unsplash Photographer" field should also appear below, displaying the photographer name
- If the read-only "📝 Unsplash Description" field appears, it shows the image description

### What to Verify

✅ `attribution` field contains the photographer's name (e.g., "John Doe")
✅ `attributionUrl` field contains a valid Unsplash URL (e.g., "https://unsplash.com/@johndoe")
✅ `alt` field contains the image description (if available from Unsplash)
✅ The auto-populated values persist after saving the document
✅ The auto-populated values appear in the published document

## Test Case 2: Auto-populate Body Image Attribution

1. In the same article, scroll down to the "Body" field
2. Add a new block by clicking the "+" button
3. Select "Image" from the block types
4. Click on the image field
5. Select "Unsplash" as the image source
6. Choose any Unsplash image
7. After the image is selected, observe the same fields as in Test Case 1

### Expected Behavior

Same as Test Case 1 - all attribution fields should auto-populate.

## Test Case 3: Manual Override

1. Select an Unsplash image (fields should auto-populate)
2. Manually edit the `attribution` or `attributionUrl` fields
3. Save the document
4. The manually edited values should be preserved

### Expected Behavior

✅ Manual edits override the auto-populated values
✅ Manual edits persist after saving

## Test Case 4: Non-Unsplash Images

1. Upload a manual image (not from Unsplash)
2. The attribution fields should remain empty
3. You can manually fill them if needed

### Expected Behavior

✅ No automatic population occurs for non-Unsplash images
✅ Fields remain editable for manual input

## Test Case 5: Frontend Display

1. After saving an article with an Unsplash image
2. View the article on the frontend website
3. The image attribution should be displayed properly

### Expected Behavior

✅ "Photo by [Photographer Name]" appears below the image
✅ The photographer name is a clickable link to their Unsplash profile
✅ "on Unsplash" link appears after the photographer name

## Troubleshooting

### Attribution fields are not auto-populating

1. Check that the Unsplash plugin is properly configured
2. Verify your Unsplash API key is valid
3. Check the browser console for any errors
4. Ensure you're using the Unsplash source (not uploading directly)

### Fields populate but don't save

1. Try saving the document after the fields populate
2. Check for any validation errors in the Studio
3. Verify you have write permissions to the dataset

## Technical Notes

- The auto-population happens client-side in the Sanity Studio
- The `CustomImageInput` component fetches asset metadata when an image is selected
- Only empty fields are auto-populated (existing values are preserved)
- The feature uses Sanity's built-in patch system to update fields

## Success Criteria

All test cases should pass:
- ✅ Main image attribution auto-populates
- ✅ Body image attribution auto-populates  
- ✅ Manual overrides work correctly
- ✅ Non-Unsplash images are not affected
- ✅ Frontend displays attribution properly
