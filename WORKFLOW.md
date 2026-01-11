# Article Publishing Workflow with Sanity CMS

This document describes the content management workflow using Sanity Studio for creating, editing, and publishing articles on the website.

## 1. Sanity Studio Setup

### Accessing Sanity Studio

**Local Development:**
1. Navigate to the project directory:
   ```bash
   cd /home/runner/work/jasonkhanani-website/jasonkhanani-website
   ```

2. Start the Next.js development server:
   ```bash
   npm run dev
   ```

3. In a separate terminal, start Sanity Studio:
   ```bash
   cd jasonkhanani-website
   npm run dev
   ```

4. Access Sanity Studio at: `http://localhost:3333`

**Production:**
- Access the deployed Sanity Studio at your configured production URL

### Authentication
- Sanity Studio uses Sanity's built-in authentication system
- Log in with your Sanity account credentials
- Contact the project admin for access if you don't have credentials

### Environment Variables
Ensure the following environment variables are configured (see `.env.example`):
- `SANITY_API_TOKEN` - Editor permissions token for content updates and view tracking
- `SANITY_PREVIEW_SECRET` - Secret key for draft/preview mode
- `REVALIDATE_SECRET` - Secret key for on-demand ISR revalidation
- `NEXT_PUBLIC_GISCUS_REPO_ID` - For GitHub Discussions comments
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID` - For GitHub Discussions comments

---

## 2. Creating New Articles

### Step-by-Step Process

1. **Open Sanity Studio**
   - Navigate to Studio (localhost:3333 or production URL)
   - Click "Articles" in the left sidebar

2. **Create New Article**
   - Click the "Create" button (or + icon)
   - Select "Article" from the document types

3. **Fill in Required Fields**

   **Title** (Required)
   - The main headline for your article
   - Appears in article listings and at the top of the article page
   - Example: "Revenue Forensics: Finding €200k in Lost Transactions"

   **Slug** (Required)
   - URL-friendly identifier for the article
   - Auto-generated from the title but can be customized
   - Example: `revenue-forensics-finding-200k`
   - Once published, avoid changing to prevent broken links

   **Excerpt** (Required)
   - Brief summary of the article (150-200 characters recommended)
   - Shows in article cards and search results
   - Should be compelling and describe the key value/insight

   **Published At** (Required)
   - Publication date and time
   - Controls article ordering (newest first)
   - Can be set to a future date for scheduled publishing

   **Category** (Required)
   - Choose from: Operations, Engineering, or Analysis
   - Helps readers filter content by topic area
   - Aligns with site's dual persona strategy

   **Body** (Required)
   - Main article content using PortableText editor
   - See section 3 for PortableText features

4. **Optional Fields**

   **Main Image**
   - Featured image displayed at the top of the article
   - Upload directly or select from media library
   - Recommended: 1200px+ width for high-quality display

   **Image Caption**
   - Attribution or description for the main image
   - Example: "Photo by Jane Doe on Unsplash"

   **Tags**
   - Array of keywords for the article
   - Examples: "SQL", "remote work", "systems thinking", "n8n"
   - Helps with search and content discovery

   **Series**
   - Group related articles together
   - Example: "Revenue Forensics", "The Weekly Audit"
   - Articles in a series will show cross-links

   **Featured Insight?** (Boolean)
   - Toggle ON to display article on the homepage
   - **Maximum 3 articles** can be featured at once
   - Validation prevents exceeding this limit
   - See section 5 for more details

5. **Save and Publish**
   - Click "Publish" button to make the article live
   - Articles are not visible on the site until published
   - Changes to published articles require re-publishing

---

## 3. PortableText Editor Features

The Sanity body editor supports rich content formatting:

### Text Formatting
- **Headings**: Use H2 and H3 for structure (H1 is reserved for article title)
- **Bold**: Highlight important terms
- **Italic**: Emphasis or quotes
- **Underline**: Additional emphasis
- **Links**: Add internal or external hyperlinks

### Code Blocks
- Insert code snippets with syntax highlighting
- Select programming language for proper highlighting
- Supports languages: JavaScript, Python, SQL, Bash, TypeScript, etc.

### Callouts
Special blocks for highlighting key information:
- **Info**: General informational notes
- **Warning**: Cautions or important considerations
- **Success**: Positive outcomes or tips

### Images
- Insert images inline within the article body
- Add captions for each image
- Images are served via Sanity CDN with automatic optimization

### Lists
- **Bullet lists**: For unordered items
- **Numbered lists**: For sequential steps or rankings

### Block Quotes
- Use for emphasis or quoting external sources
- Rendered with distinct styling

---

## 4. Editing Existing Articles

### Finding Articles
1. Go to "Articles" in Sanity Studio sidebar
2. Use the search bar to find specific articles by title
3. Or scroll through the list view

### Making Changes
1. Click on the article to open it
2. Edit any fields (title, body, tags, etc.)
3. Use the Presentation tool for live preview (see section 8)
4. Click "Publish" to save changes

### Publishing Updates
- Changes are not live until you click "Publish"
- After publishing, updates propagate via ISR:
  - **Automatic**: Pages regenerate after 60 seconds
  - **Immediate**: Set up webhook for instant updates (see section 7)

---

## 5. Featured Articles Management

### Rules and Constraints
- **Maximum 3 featured articles** at any time
- Featured articles appear on the homepage in a prominent section
- Validation in Sanity prevents exceeding the limit
- Visual indicator: Articles marked with "⭐ FEATURED" in lists

### Featuring an Article
1. Navigate to "Featured Articles (Max 3)" view in Sanity Studio
   - Look for the ⭐ icon in the sidebar
2. See all currently featured articles
3. To feature a new article:
   - Open the article
   - Toggle "Featured Insight?" to ON
   - Click "Publish"
4. If limit reached:
   - First unfeature another article
   - Then feature the new one

### Best Practices
- Feature your strongest, most impactful articles
- Rotate featured articles regularly (e.g., monthly)
- Ensure featured articles align with current portfolio goals
- Balance between Investigator and Architect persona content

---

## 6. Image Management

### Upload Methods

**1. Direct Upload**
- Click the image field in any article
- Click "Upload" button
- Select image file from your computer
- Image is uploaded to Sanity's media library

**2. Media Library**
- Click "Select" instead of "Upload"
- Browse previously uploaded images
- Reuse existing assets across articles

**3. Unsplash Integration** (if configured)
- Click "Unsplash" tab
- Search for high-quality stock photos
- Import directly into Sanity
- Automatically includes attribution

### Image Best Practices
- **Resolution**: Upload high-resolution images (1200px+ width recommended)
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Alt Text**: Always add descriptive alt text for accessibility
- **Attribution**: Include image credits in captions when using external images
- **Optimization**: Sanity CDN automatically optimizes images for web delivery

### Image Organization
- Use descriptive filenames before uploading
- Tag images in Sanity for easier discovery
- Delete unused images to keep media library clean

---

## 7. Content Publishing Workflow

### Publishing States

**Draft**
- Unpublished content visible only in Sanity Studio
- Use for work-in-progress articles
- Not visible on the public website

**Published**
- Content is live and visible to all visitors
- Changes require re-publishing to go live
- Updates propagate via ISR

### Publishing Process

1. **Draft Phase**
   - Write and edit content in Sanity Studio
   - Use draft status to review before publishing
   - Share draft URL with reviewers if needed

2. **Review Phase**
   - Preview using Presentation tool (see section 8)
   - Check formatting, images, and links
   - Verify all required fields are filled

3. **Publish Phase**
   - Click "Publish" button in Sanity Studio
   - Content becomes immediately available via Sanity API
   - Website pages regenerate automatically

### Update Propagation

**Automatic (60-second ISR)**
- After publishing, changes appear after 60 seconds
- Next visitor after 60s triggers background regeneration
- That visitor sees the current version
- Subsequent visitors see the updated version

**On-Demand (Webhook) - Immediate**
To enable instant updates, configure a Sanity webhook:

1. Go to Sanity project settings
2. Navigate to "Webhooks"
3. Create new webhook:
   - **URL**: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
   - **Trigger**: Document changes
   - **Filter**: `_type == "article"`
4. Save webhook

With webhook configured:
- Publishing triggers immediate page regeneration
- Updates appear within 1-3 seconds
- No manual intervention required

---

## 8. Preview and Testing

### Presentation Tool (Live Preview)

Sanity Studio includes a Presentation tool for live preview:

**Features:**
- Side-by-side editing and preview
- See changes in real-time as you type
- Click elements in preview to jump to the editor field
- Preview unpublished drafts

**Access:**
- Available in Sanity Studio sidebar (after "Structure" and "Vision")
- Opens in a split-pane view
- Shows your article as it will appear on the live site

### Draft Mode

View unpublished changes on the actual website:

**Access URL:**
```
https://yourdomain.com/api/draft?secret=YOUR_PREVIEW_SECRET&slug=article-slug
```

**Requirements:**
- `SANITY_PREVIEW_SECRET` must be set in environment variables
- Only works for content editors with the secret
- Useful for sharing drafts with reviewers

### Testing Before Publishing

1. Fill in all required fields
2. Add at least one paragraph of body content
3. Upload featured image (if applicable)
4. Use Presentation tool to preview
5. Check for:
   - Proper formatting
   - Working links
   - Image display
   - Code block syntax highlighting
6. Publish when satisfied

---

## 9. Advanced Features

### View Tracking (Analytics)

Articles automatically track view counts:
- **Location**: Visible in article's "Analytics" section in Sanity Studio
- **Privacy**: Server-side tracking, no client-side cookies
- **Data Stored**: Article reference, timestamp, user agent, referrer
- **Access**: Only visible to content editors in Sanity Studio

No setup required - works automatically.

### Comment System (Giscus)

Articles support GitHub Discussions-based comments:
- **Location**: Below each article, after related articles section
- **Authentication**: Commenters use GitHub accounts
- **Moderation**: Manage via GitHub's native moderation tools
- **Features**: Reactions, threading, email notifications

**Setup Requirements:**
1. Enable GitHub Discussions in repository
2. Configure at [giscus.app](https://giscus.app)
3. Add repo ID and category ID to environment variables

### Full-Text Search

Readers can search all published articles:
- **Location**: Top of Writing page (`/writing`)
- **Scope**: Searches title, excerpt, body, tags, and categories
- **Performance**: Fast, server-side search using Sanity GROQ queries
- **Features**: Debounced input, highlighted matches, live results

No setup required - works automatically.

---

## 10. Troubleshooting

### Article Not Appearing on Site

**Checklist:**
1. ✅ Is the article published (not in draft)?
2. ✅ Wait 60 seconds after publishing for ISR regeneration
3. ✅ Check slug is URL-friendly (no spaces or special characters)
4. ✅ Verify all required fields are filled:
   - Title
   - Slug
   - Excerpt
   - Published At
   - Category
   - Body (at least one block)
5. ✅ Clear browser cache and refresh
6. ✅ Check browser console for errors

### Featured Article Limit Error

**Error Message:** "Maximum 3 featured articles allowed"

**Solution:**
1. Go to "Featured Articles (Max 3)" view in Sanity Studio
2. See which 3 articles are currently featured
3. Unfeature one article:
   - Open the article
   - Toggle "Featured Insight?" to OFF
   - Click "Publish"
4. Now you can feature a different article

### Images Not Loading

**Checklist:**
1. ✅ Verify image uploaded successfully in Sanity
2. ✅ Check that Sanity CDN URL is accessible
3. ✅ Ensure image field has valid asset reference
4. ✅ Try re-uploading the image
5. ✅ Check image file format (JPEG, PNG, WebP supported)
6. ✅ Verify no ad blockers are blocking Sanity CDN

### Changes Not Appearing After Publishing

**Solutions:**
1. Wait 60 seconds for automatic ISR regeneration
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that you clicked "Publish" (not just "Save")
4. Verify webhook is configured for instant updates (optional)
5. Check deployment status (Next.js build successful?)

### Sanity Studio Not Loading

**Checklist:**
1. ✅ Check that both servers are running:
   - Main site: `npm run dev` (port 3000)
   - Sanity Studio: `cd jasonkhanani-website && npm run dev` (port 3333)
2. ✅ Verify environment variables are set (see `.env.example`)
3. ✅ Check for JavaScript errors in browser console
4. ✅ Try clearing browser cache and hard refresh
5. ✅ Verify Sanity authentication is valid

---

## 11. Content Guidelines

### Writing Style
- **Technical but accessible**: Avoid jargon without explanation
- **Concrete examples**: Use real scenarios and data
- **Quantify impact**: Include metrics (€, %, time saved)
- **Persona alignment**: Tag with Investigator or Architect focus

### Article Structure
- **Length**: Aim for 1000-2000 words
- **Headings**: Use H2 and H3 for clear structure
- **Paragraphs**: Keep paragraphs focused (3-5 sentences)
- **Code examples**: Include where relevant for technical articles
- **Callouts**: Highlight key insights or warnings
- **Images**: Break up text with relevant visuals

### Persona Alignment

**Investigator (Hanko Rust)**
- Focus: Data analysis, SQL forensics, revenue recovery
- Topics: Analytics, troubleshooting, diagnostics
- Tone: Methodical, detail-oriented

**Architect (Fox Orange)**
- Focus: Systems design, workflows, automation
- Topics: Process optimization, tool selection, scaling
- Tone: Strategic, future-focused

### Maintenance Schedule
- **Minimum**: 1 article every 3 weeks (per PRD)
- **Balance**: Mix of tactical and strategic content
- **Topics**: Rotate between Operations, Engineering, and Analysis categories
- **Featured**: Update featured articles monthly

---

## 12. Resources

### Documentation
- [Sanity Documentation](https://www.sanity.io/docs)
- [PortableText Documentation](https://www.sanity.io/docs/presenting-block-text)
- [ENHANCED_CMS_TESTING.md](./ENHANCED_CMS_TESTING.md) - Advanced CMS features
- [MIGRATION.md](./MIGRATION.md) - Next.js migration details

### Support
- Sanity Support: https://www.sanity.io/help
- Project-specific issues: Contact project maintainer
- Bug reports: Create GitHub issue

