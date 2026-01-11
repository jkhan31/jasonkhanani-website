# Content Management with Sanity Studio

This comprehensive guide covers all aspects of managing content for the website using Sanity CMS.

## Getting Started

### Accessing Sanity Studio

**Local Development:**
```bash
cd /home/runner/work/jasonkhanani-website/jasonkhanani-website
npm run dev  # Start Next.js (http://localhost:3000)
```

In a separate terminal:
```bash
cd jasonkhanani-website
npm run dev  # Start Sanity Studio (http://localhost:3333)
```

**Production:**
Access the deployed Sanity Studio at your configured production URL.

### Authentication

- Sanity Studio uses Sanity's authentication system
- Log in with your Sanity account credentials
- Contact the project administrator for access if needed

---

## Article Management

### Creating a New Article

#### Step 1: Navigate to Articles
1. Open Sanity Studio (localhost:3333 or production URL)
2. Click "Articles" in the left sidebar
3. Click the "Create" button

#### Step 2: Fill Required Fields

**Title** (Required)
- Article headline that appears in listings and on the article page
- Should be clear, compelling, and descriptive
- Example: "Revenue Forensics: Finding €200k in Lost Transactions"

**Slug** (Required)
- URL-friendly identifier for the article
- Auto-generated from title but can be customized
- Example: `revenue-forensics-finding-200k`
- **Important**: Once published, avoid changing to prevent broken links

**Excerpt** (Required)
- Brief summary (150-200 characters recommended)
- Appears in article cards and search results
- Should entice readers and describe key value

**Published At** (Required)
- Publication date and time
- Controls article ordering (newest first)
- Can be set to future date for scheduled publishing

**Category** (Required)
- Choose from: **Operations**, **Engineering**, or **Analysis**
- Helps readers filter content by topic area
- Aligns with site's dual persona strategy

**Body** (Required)
- Main article content using PortableText editor
- See "PortableText Editor Features" section below

#### Step 3: Add Optional Fields

**Main Image**
- Featured image displayed at top of article
- Upload directly or select from media library
- Recommended: 1200px+ width for high quality

**Image Caption**
- Attribution or description for main image
- Example: "Photo by Jane Doe on Unsplash"

**Tags**
- Array of keywords for the article
- Examples: "SQL", "remote work", "systems thinking", "n8n"
- Improves search and content discovery

**Series**
- Group related articles together
- Example: "Revenue Forensics", "The Weekly Audit"
- Articles in a series show cross-links

**Featured Insight?**
- Toggle ON to display on homepage
- **Maximum 3 articles** can be featured simultaneously
- Validation prevents exceeding limit

#### Step 4: Publish
Click "Publish" button to make the article live on the website.

---

## PortableText Editor Features

The Sanity body editor supports rich content formatting:

### Text Formatting
- **Headings**: H2 and H3 for structure (H1 reserved for article title)
- **Bold**: Highlight important terms
- **Italic**: Emphasis or quotes
- **Underline**: Additional emphasis
- **Links**: Add internal or external hyperlinks

### Code Blocks
- Insert code snippets with syntax highlighting
- Select programming language for proper highlighting
- Supported: JavaScript, Python, SQL, Bash, TypeScript, Go, Java, and more

### Callouts
Special blocks for highlighting key information:
- **Info**: General informational notes
- **Warning**: Cautions or important considerations
- **Success**: Positive outcomes or tips

### Images
- Insert images inline within article body
- Add captions for each image
- Images served via Sanity CDN with automatic optimization

### Lists
- **Bullet lists**: Unordered items
- **Numbered lists**: Sequential steps or rankings

### Block Quotes
- For emphasis or quoting external sources
- Rendered with distinct styling

---

## Featured Articles Management

### Rules
- **Maximum 3 articles** can be featured at once
- Featured articles appear on homepage
- Validation prevents exceeding limit

### Process

1. **View Featured Articles**
   - Look for "Featured Articles (Max 3)" view in Sanity Studio
   - See all currently featured articles with ⭐ indicator

2. **Feature an Article**
   - Open the article you want to feature
   - Toggle "Featured Insight?" to ON
   - Click "Publish"

3. **If Limit Reached**
   - Go to "Featured Articles (Max 3)" view
   - Identify which article to unfeature
   - Open that article
   - Toggle "Featured Insight?" to OFF
   - Click "Publish"
   - Now you can feature a different article

### Best Practices
- Feature your strongest, most impactful articles
- Rotate featured articles regularly (e.g., monthly)
- Balance between Investigator and Architect persona content
- Ensure featured articles align with current portfolio goals

---

## Image Management

### Upload Methods

**1. Direct Upload**
- Click image field in article
- Click "Upload" button
- Select image file from computer
- Image uploads to Sanity media library

**2. Media Library**
- Click "Select" instead of "Upload"
- Browse previously uploaded images
- Reuse existing assets across articles

**3. Unsplash Integration** (if configured)
- Click "Unsplash" tab
- Search for high-quality stock photos
- Import directly with automatic attribution

### Best Practices

- **Resolution**: Upload high-resolution images (1200px+ width)
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Alt Text**: Add descriptive alt text for accessibility
- **Attribution**: Include credits in captions for external images
- **Optimization**: Sanity CDN automatically optimizes for web

### Organization
- Use descriptive filenames before uploading
- Tag images in Sanity for easier discovery
- Delete unused images to keep library clean

---

## Publishing Workflow

### States

**Draft**
- Unpublished content visible only in Sanity Studio
- Use for work-in-progress articles
- Not visible on public website

**Published**
- Content is live and visible to all visitors
- Changes require re-publishing
- Updates propagate via ISR

### Publishing Process

1. **Draft Phase**
   - Write and edit content
   - Review before publishing
   - Share draft URL with reviewers if needed

2. **Review Phase**
   - Preview using Presentation tool
   - Check formatting, images, links
   - Verify all required fields filled

3. **Publish Phase**
   - Click "Publish" button
   - Content available via Sanity API immediately
   - Website pages regenerate automatically

### Update Propagation

**Automatic (60-second ISR)**
- After publishing, changes appear after 60 seconds
- Next visitor after 60s triggers background regeneration
- Stale-while-revalidate strategy
- No manual intervention needed

**On-Demand (Webhook) - Immediate**
Configure Sanity webhook for instant updates:
1. Go to Sanity project settings → Webhooks
2. Create webhook:
   - URL: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
   - Trigger: Document changes
   - Filter: `_type == "article"`
3. Save webhook
4. Updates appear within 1-3 seconds

---

## Advanced Features

### Live Preview (Presentation Tool)

**Features:**
- Side-by-side editing and preview
- Real-time updates as you type
- Click elements to jump to editor field
- Preview unpublished drafts

**Access:**
- Available in Sanity Studio sidebar
- Opens split-pane view
- Shows article as it will appear on live site

### Draft Mode

View unpublished changes on actual website:

**Access:**
```
https://yourdomain.com/api/draft?secret=YOUR_PREVIEW_SECRET&slug=article-slug
```

**Requirements:**
- `SANITY_PREVIEW_SECRET` set in environment variables
- Only for content editors with the secret
- Useful for sharing drafts with reviewers

### View Tracking

Articles automatically track views:
- **Location**: "Analytics" section in Sanity Studio
- **Privacy**: Server-side tracking, no client cookies
- **Data**: Article reference, timestamp, user agent, referrer
- **Access**: Only visible to content editors

No setup required - works automatically.

### Comments (Giscus)

Articles support GitHub Discussions comments:
- **Location**: Below each article
- **Authentication**: GitHub accounts
- **Moderation**: GitHub's native tools
- **Features**: Reactions, threading, notifications

**Setup:**
1. Enable GitHub Discussions in repository
2. Configure at [giscus.app](https://giscus.app)
3. Add repo ID and category ID to environment variables

See [ENHANCED_CMS_TESTING.md](./ENHANCED_CMS_TESTING.md) for details.

---

## Troubleshooting

### Article Not Appearing on Site

**Checklist:**
1. ✅ Article is published (not draft)
2. ✅ Wait 60 seconds for ISR regeneration
3. ✅ Slug is URL-friendly (no spaces/special characters)
4. ✅ All required fields filled
5. ✅ Clear browser cache and refresh

### Featured Article Limit Error

**Error:** "Maximum 3 featured articles allowed"

**Solution:**
1. Go to "Featured Articles (Max 3)" view
2. See which 3 articles are featured
3. Unfeature one article (toggle OFF, publish)
4. Feature new article (toggle ON, publish)

### Images Not Loading

**Checklist:**
1. ✅ Image uploaded successfully in Sanity
2. ✅ Sanity CDN URL is accessible
3. ✅ Image field has valid asset reference
4. ✅ Try re-uploading
5. ✅ Check file format (JPEG, PNG, WebP)
6. ✅ No ad blockers blocking Sanity CDN

### Changes Not Appearing

**Solutions:**
1. Wait 60 seconds for ISR regeneration
2. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Verify you clicked "Publish" (not just "Save")
4. Check webhook configured for instant updates
5. Verify deployment successful

### Sanity Studio Not Loading

**Checklist:**
1. ✅ Both servers running:
   - Main: `npm run dev` (port 3000)
   - Studio: `cd jasonkhanani-website && npm run dev` (port 3333)
2. ✅ Environment variables set (see `.env.example`)
3. ✅ Check browser console for errors
4. ✅ Clear cache and hard refresh
5. ✅ Sanity authentication valid

---

## Content Guidelines

### Writing Style
- **Technical but accessible**: Avoid unexplained jargon
- **Concrete examples**: Use real scenarios and data
- **Quantify impact**: Include metrics (€, %, time saved)
- **Persona alignment**: Investigator or Architect focus

### Article Structure
- **Length**: 1000-2000 words recommended
- **Headings**: Use H2 and H3 for clear structure
- **Paragraphs**: Keep focused (3-5 sentences)
- **Code examples**: Include for technical articles
- **Callouts**: Highlight key insights
- **Images**: Break up text with visuals

### Persona Alignment

**Investigator (Hanko Rust)**
- Focus: Data analysis, SQL forensics, revenue recovery
- Topics: Analytics, troubleshooting, diagnostics
- Tone: Methodical, detail-oriented

**Architect (Fox Orange)**
- Focus: Systems design, workflows, automation
- Topics: Process optimization, scaling, tool selection
- Tone: Strategic, future-focused

### Maintenance Schedule
- **Minimum**: 1 article every 3 weeks (per PRD)
- **Balance**: Mix tactical and strategic content
- **Topics**: Rotate between Operations, Engineering, Analysis
- **Featured**: Update monthly

---

## Resources

### Documentation
- [Sanity Documentation](https://www.sanity.io/docs)
- [PortableText Guide](https://www.sanity.io/docs/presenting-block-text)
- [WORKFLOW.md](./WORKFLOW.md) - Complete workflow guide
- [ENHANCED_CMS_TESTING.md](./ENHANCED_CMS_TESTING.md) - Advanced features
- [MIGRATION.md](./MIGRATION.md) - Next.js migration details

### Support
- Sanity Support: https://www.sanity.io/help
- Project issues: Contact project maintainer
- Bug reports: Create GitHub issue
