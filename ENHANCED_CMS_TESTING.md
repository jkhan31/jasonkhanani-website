# Enhanced CMS Features Testing Guide

This guide explains how to test the four new CMS features added to the website.

## Prerequisites

1. **Set up environment variables** by copying `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. **Configure required environment variables** in `.env`:
   
   ```env
   # Sanity API Token (required for view tracking)
   # Get from: https://sanity.io/manage → Your Project → API → Tokens
   # Create a token with "Editor" permissions
   SANITY_API_TOKEN=your_token_here
   
   # Preview Secret (required for live preview)
   # Generate: openssl rand -base64 32
   SANITY_PREVIEW_SECRET=your_secret_here
   
   # Revalidate Secret (existing)
   REVALIDATE_SECRET=your_secret_here
   
   # Giscus Configuration (required for comments)
   # Get from: https://giscus.app after enabling GitHub Discussions
   NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id_here
   NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id_here
   ```

3. **Install dependencies**:
   ```bash
   npm install
   cd jasonkhanani-website && npm install
   ```

---

## Feature 1: Live Preview with Presentation Tool

### Setup Steps

1. Start both servers:
   ```bash
   # Terminal 1: Next.js frontend
   npm run dev
   
   # Terminal 2: Sanity Studio
   cd jasonkhanani-website
   npm run dev
   ```

2. Open Sanity Studio at `http://localhost:3333`

### Test Cases

#### Test 1.1: Access Presentation Tool
1. In Sanity Studio sidebar, click on "Presentation" (should appear after Structure and Vision)
2. The presentation view should load with a preview of your website

**Expected Result**: ✅ Presentation tool loads successfully with website preview

#### Test 1.2: Live Preview of Article Changes
1. In Presentation tool, select an article to edit
2. Make changes to the article title or body
3. Observe the preview updating in real-time

**Expected Result**: ✅ Changes appear in preview without saving

#### Test 1.3: Preview Unpublished Changes
1. Create a new draft article (status: "draft")
2. Fill in title, body, and other fields
3. Don't publish yet - just save as draft
4. In Presentation tool, navigate to the article preview

**Expected Result**: ✅ Draft article is visible in preview but not on live site

#### Test 1.4: Enter Draft Mode via API
1. Visit: `http://localhost:3000/api/draft?secret=YOUR_SANITY_PREVIEW_SECRET&slug=article-slug`
2. You should be redirected to the article page with draft mode enabled

**Expected Result**: ✅ Draft mode cookie is set, unpublished changes are visible

---

## Feature 2: View Tracking (Analytics)

### Test Cases

#### Test 2.1: Track Article View
1. Ensure Next.js server is running (`npm run dev`)
2. Visit any article page: `http://localhost:3000/writing/article-slug`
3. Check browser console for any errors
4. Wait 2-3 seconds for tracking to complete

**Expected Result**: ✅ No errors in console, view is tracked silently

#### Test 2.2: View Count in Sanity Studio
1. Open Sanity Studio at `http://localhost:3333`
2. Navigate to an article you just viewed
3. Scroll to "SEO & Social Metadata" fieldset
4. Expand the "Analytics (Read-Only)" section

**Expected Result**: ✅ View count displays with total number of views

#### Test 2.3: View Multiple Times
1. Refresh the article page 3-4 times
2. Go back to Sanity Studio
3. Check the analytics section again

**Expected Result**: ✅ View count increases with each visit (not deduplicated)

#### Test 2.4: View Details in Sanity
1. In Sanity Studio, go to "Content" in the sidebar
2. Look for "Article View" document type (may be at the bottom)
3. Click on it to see all tracked views

**Expected Result**: ✅ Each view is recorded with timestamp, user agent, and referrer

---

## Feature 3: Comment System with Moderation

### Setup Steps

1. **Enable GitHub Discussions** in this repository:
   - Go to GitHub repository settings
   - Enable Discussions
   - Create a category called "Article Comments"

2. **Configure Giscus**:
   - Visit https://giscus.app
   - Enter repository: `jkhan31/jasonkhanani-website`
   - Select category: "Article Comments"
   - Copy the repo ID and category ID to `.env`

### Test Cases

#### Test 3.1: Comments Load on Article Page
1. Visit any article: `http://localhost:3000/writing/article-slug`
2. Scroll down to the bottom after "Related Articles"
3. Look for the "Discussion" section

**Expected Result**: ✅ Giscus comments section loads with GitHub login button

#### Test 3.2: Lazy Loading
1. Visit an article page
2. Open browser DevTools → Network tab
3. Scroll down slowly toward the comments section
4. Watch for Giscus script loading

**Expected Result**: ✅ Giscus only loads when you scroll near the comments section (200px before)

#### Test 3.3: Post a Comment
1. Scroll to comments section
2. Click "Sign in with GitHub"
3. Authorize the Giscus app
4. Write a test comment
5. Submit the comment

**Expected Result**: ✅ Comment appears in the discussion section and in GitHub Discussions

#### Test 3.4: Styling Matches Design System
1. Look at the comments section styling
2. Verify it uses ricePaper background and sumiInk text
3. Check that it blends with the rest of the page

**Expected Result**: ✅ Comments section matches the site's design (not default Giscus theme)

---

## Feature 4: Full-Text Search

### Test Cases

#### Test 4.1: Search Input Appears
1. Visit the Writing page: `http://localhost:3000/writing`
2. Look for the search bar at the top of the page

**Expected Result**: ✅ Search input with magnifying glass icon appears

#### Test 4.2: Debounced Search
1. Type slowly in the search box: "o-p-e-r-a-t-i-o-n-s"
2. Watch the search not trigger until you stop typing for 300ms
3. Open browser DevTools → Network tab to confirm

**Expected Result**: ✅ Search only triggers after you stop typing (not on every keystroke)

#### Test 4.3: Search Across Multiple Fields
1. Search for a word that appears in an article title
2. Then search for a word that only appears in the article body
3. Then search for a tag name

**Expected Result**: ✅ All searches return relevant results regardless of where the term appears

#### Test 4.4: Search Results Highlighting
1. Search for "remote"
2. Look at the search results dropdown
3. Check if "remote" is highlighted in yellow

**Expected Result**: ✅ Search term is highlighted in article titles and excerpts

#### Test 4.5: No Results State
1. Search for gibberish: "xyzabc123notfound"
2. Look at the search results dropdown

**Expected Result**: ✅ Shows message: "No articles found matching..." with suggestion to browse all

#### Test 4.6: Click Search Result
1. Search for any term that returns results
2. Click on one of the results
3. Search dropdown should close
4. You should navigate to that article

**Expected Result**: ✅ Clicking a result navigates to the article and clears search

#### Test 4.7: Clear Search
1. Type something in the search box
2. Click the X button on the right side of the input
3. Search should clear and results should disappear

**Expected Result**: ✅ Search clears, results dropdown closes

#### Test 4.8: Special Characters in Search
1. Search for terms with special regex characters: "C++ async*"
2. Should not cause errors

**Expected Result**: ✅ Search handles special characters gracefully without errors

---

## Integration Testing

### Test I.1: All Features Working Together
1. Search for an article
2. Click on a search result to open the article
3. Scroll down to see view tracking trigger (check console)
4. Continue scrolling to see comments lazy load
5. Open Sanity Studio and check view count increased

**Expected Result**: ✅ All features work together without conflicts

### Test I.2: Mobile Responsiveness
1. Open DevTools and switch to mobile view (375px width)
2. Test search on Writing page
3. Navigate to an article
4. Check comments section
5. Verify everything works on mobile

**Expected Result**: ✅ All features are mobile-friendly

---

## Production Build Testing

### Test P.1: Build Success
```bash
npm run build
```

**Expected Result**: ✅ Build completes without errors

### Test P.2: Production Preview
```bash
npm run build
npm start
```

1. Visit `http://localhost:3000`
2. Test all four features in production mode

**Expected Result**: ✅ All features work in production build

---

## Troubleshooting

### Live Preview Not Working
- Verify `SANITY_PREVIEW_SECRET` is set in `.env`
- Check both Next.js and Sanity Studio are running
- Clear browser cache and cookies

### View Tracking Not Working
- Verify `SANITY_API_TOKEN` is set with "Editor" permissions
- Check browser console for API errors
- Verify Sanity client has write access

### Comments Not Loading
- Verify GitHub Discussions is enabled
- Check `NEXT_PUBLIC_GISCUS_REPO_ID` and `NEXT_PUBLIC_GISCUS_CATEGORY_ID` are correct
- Verify the repository is public (Giscus requires public repos)
- Check browser console for Giscus errors

### Search Not Working
- Check browser console for errors
- Verify Sanity client can connect
- Try simpler search terms first

---

## Success Criteria

All features should pass their respective test cases:

- ✅ **Live Preview**: Presentation tool loads and shows real-time updates
- ✅ **View Tracking**: Views are recorded and displayed in Sanity Studio
- ✅ **Comments**: Giscus loads, lazy loads properly, and comments can be posted
- ✅ **Search**: Debounced search returns results with highlighting

---

## Additional Notes

- **Performance**: All features are optimized for performance (lazy loading, debouncing, server-side)
- **Security**: View tracking sanitizes inputs, search escapes regex characters
- **Privacy**: View tracking is server-side only, no client-side analytics cookies
- **Compatibility**: All features work with Netlify deployment
