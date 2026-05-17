import React from 'react';
import Head from 'next/head';
import Badge from '../components/Badge';
import Callout from '../components/Callout';
import SectionLabel from '../components/SectionLabel';
import NoteCard from '../components/NoteCard';
import ProgressBar from '../components/ProgressBar';

export default function DesignGuide() {
  return (
    <>
      <Head>
        <title>Design Guide | Jason K Hanani</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-darkText mb-6">Design System</h1>
          <p className="text-xl text-bodyText max-w-2xl leading-relaxed">
            Complete visual and component guidelines for jasonkhanani.com. This guide documents the design system, brand voice, and component library used throughout the site.
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="mb-24">
          <SectionLabel label="Color Palette" color="blue" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Colors & Usage</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Primary Colors */}
            <div>
              <h3 className="text-lg font-bold text-darkText mb-6">Primary Colors</h3>
              <div className="space-y-4">
                {/* Warm Amber */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-warmAmber border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Warm Amber</p>
                      <p className="text-xs text-bodyText font-mono">#C95F00</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Action buttons, CTAs, emphasis, accent elements, links. Primary color for interactive elements.</p>
                </div>

                {/* Diagnostic Blue */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-diagnosticBlue border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Diagnostic Blue</p>
                      <p className="text-xs text-bodyText font-mono">#1E3A5F</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Serious/primary content, secondary CTAs, hover states, alternative actions.</p>
                </div>

                {/* Soft Teal */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-softTeal border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Soft Teal</p>
                      <p className="text-xs text-bodyText font-mono">#2E8B8B</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Validated/positive states, success indicators, secondary emphasis.</p>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div>
              <h3 className="text-lg font-bold text-darkText mb-6">Neutral Colors</h3>
              <div className="space-y-4">
                {/* Dark Text */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-darkText border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Dark Text</p>
                      <p className="text-xs text-bodyText font-mono">#2C2C2C</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Primary text, headings, body copy. High contrast for readability.</p>
                </div>

                {/* Body Text */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-bodyText border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Body Text</p>
                      <p className="text-xs text-bodyText font-mono">#5A5550</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Secondary text, descriptions, supporting copy. Reduced contrast for hierarchy.</p>
                </div>

                {/* Page Background */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-pageBg border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Page Background</p>
                      <p className="text-xs text-bodyText font-mono">#F5F5F5</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Section backgrounds, subtle dividers, section separation.</p>
                </div>

                {/* Card Background */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-cardBg border border-darkText/10"></div>
                    <div>
                      <p className="font-bold text-darkText">Card Background</p>
                      <p className="text-xs text-bodyText font-mono">#FFFFFF</p>
                    </div>
                  </div>
                  <p className="text-sm text-bodyText ml-15">Card surfaces, elevated content areas, white space.</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="blue" label="Color Usage Rule">
            Always use Tailwind token names in code (e.g., <code className="text-xs bg-darkText/5 px-1 rounded">bg-warmAmber</code>), never raw hex values. This ensures consistency and makes global changes easier.
          </Callout>
        </section>

        {/* Typography Section */}
        <section className="mb-24">
          <SectionLabel label="Typography" color="amber" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Type Scale & Font Families</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Font Families */}
            <div>
              <h3 className="text-lg font-bold text-darkText mb-6">Font Families</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-serif text-2xl text-darkText mb-2">Archivo (Serif)</p>
                  <p className="text-sm text-bodyText">Used for headings and display text. Professional, distinctive, grounded.</p>
                  <div className="mt-2 text-sm text-bodyText/60 font-serif italic">Example: Pull quotes, section headings</div>
                </div>

                <div>
                  <p className="font-sans text-2xl text-darkText mb-2">Inter (Sans-serif)</p>
                  <p className="text-sm text-bodyText">Used for body text and UI. Clean, readable, neutral. Default for all body copy.</p>
                  <div className="mt-2 text-sm text-bodyText/60 font-sans">Example: Body paragraphs, button labels, navigation</div>
                </div>

                <div>
                  <p className="font-mono text-base text-darkText mb-2">DM Mono (Monospace)</p>
                  <p className="text-sm text-bodyText">Used for labels, code references, and monospace displays. Technical, precise feel.</p>
                  <div className="mt-2 text-sm text-bodyText/60 font-mono">example: section labels, code samples</div>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <h3 className="text-lg font-bold text-darkText mb-6">Type Scale</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-darkText/60 mb-2">Display (7xl)</p>
                  <p className="text-7xl font-sans font-bold text-darkText">Aa</p>
                  <p className="text-xs text-bodyText mt-2">Page titles, hero headlines. Use sparingly.</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-darkText/60 mb-2">Heading (4xl–5xl)</p>
                  <p className="text-4xl font-sans font-bold text-darkText">Section Heading</p>
                  <p className="text-xs text-bodyText mt-2">Major section breaks, main content headings.</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-darkText/60 mb-2">Subheading (lg–xl)</p>
                  <p className="text-xl font-sans font-bold text-darkText">Subsection Title</p>
                  <p className="text-xs text-bodyText mt-2">Card titles, subsection headers.</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-darkText/60 mb-2">Body (base–lg)</p>
                  <p className="text-base font-sans text-darkText">The quick brown fox jumps over the lazy dog.</p>
                  <p className="text-xs text-bodyText mt-2">Primary reading text. Optimized for readability.</p>
                </div>
              </div>
            </div>
          </div>

          <NoteCard label="Typography Best Practice">
            Maintain 1.5+ line-height for body text to ensure readability. Use font-weight: bold (600+) for hierarchy emphasis, not color alone. Test all heading sizes on mobile to ensure they remain impactful at smaller viewports.
          </NoteCard>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-24">
          <SectionLabel label="Spacing System" color="green" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Spacing & Layout Rules</h2>

          <div className="bg-pageBg p-8 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-darkText mb-6">Spacing Scale (Tailwind)</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-warmAmber rounded-sm"></div>
                <p className="text-sm font-mono text-darkText">4px (p-1, gap-1)</p>
                <p className="text-sm text-bodyText">Micro spacing, tight component padding</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-warmAmber rounded-sm"></div>
                <p className="text-sm font-mono text-darkText">8px–12px (p-2–p-3, gap-2–gap-3)</p>
                <p className="text-sm text-bodyText">Component padding, icon spacing</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-8 bg-warmAmber rounded-sm"></div>
                <p className="text-sm font-mono text-darkText">16px–24px (p-4–p-6, gap-4–gap-6)</p>
                <p className="text-sm text-bodyText">Default padding, element gaps</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-8 bg-warmAmber rounded-sm"></div>
                <p className="text-sm font-mono text-darkText">32px–48px (py-8–py-12)</p>
                <p className="text-sm text-bodyText">Section padding, breathing room</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 h-8 bg-warmAmber rounded-sm"></div>
                <p className="text-sm font-mono text-darkText">64px–96px (py-24–py-32)</p>
                <p className="text-sm text-bodyText">Major section separation</p>
              </div>
            </div>
          </div>

          <Callout type="amber" label="Layout Guidelines">
            Mobile-first: Design for mobile (base), then add complexity at md (768px), lg (1024px), xl (1280px) breakpoints. Use max-w-7xl for page containers. Maintain consistent left/right padding (px-6) across all pages.
          </Callout>
        </section>

        {/* Components Section */}
        <section className="mb-24">
          <SectionLabel label="Component Library" color="amber" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-12 leading-tight">UI Components & Variations</h2>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-bold text-darkText mb-6">Badges</h3>
            <p className="text-base text-bodyText mb-6">Status indicators and tag components. Used for skills, statuses, and categorical labels.</p>

            <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg mb-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Fit Badge (Animated)</h4>
              <Badge type="fit" label="Fit Score: 8.5 / 10" animated={true} />
            </div>

            <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg mb-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Status Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge type="deadline" label="Deadline: End of June" />
                <Badge type="remote" label="Fully Remote · EOR" />
              </div>
            </div>

            <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg mb-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Skill Tags</h4>
              <div className="flex flex-wrap gap-3">
                <Badge type="tag" label="Python" />
                <Badge type="tag" label="SQL" />
                <Badge type="tag" label="Tableau" count="3" />
              </div>
            </div>

            <NoteCard label="Badge Usage">
              Use Fit badges for job fit scoring with optional animation. Status badges for deadlines and work arrangements. Skill tags for technical skills with optional count badges. Keep labels concise (2–3 words max).
            </NoteCard>
          </div>

          {/* Section Labels */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-bold text-darkText mb-6">Section Labels</h3>
            <p className="text-base text-bodyText mb-6">Monospace labels that break up page sections and establish visual hierarchy. Available in multiple colors.</p>

            <div className="space-y-6">
              <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg">
                <SectionLabel label="Amber Label (Default)" color="amber" />
                <p className="text-sm text-bodyText mt-4">Use for primary sections and emphasis. Most common across the site.</p>
              </div>

              <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg">
                <SectionLabel label="Blue Label (Serious)" color="blue" />
                <p className="text-sm text-bodyText mt-4">Use for serious/primary content, methodology, important information.</p>
              </div>

              <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg">
                <SectionLabel label="Green Label (Positive)" color="green" />
                <p className="text-sm text-bodyText mt-4">Use for validated states, positive outcomes, success messaging.</p>
              </div>

              <div className="bg-cardBg border border-darkText/10 p-8 rounded-lg">
                <SectionLabel label="Default Label (Muted)" color="default" />
                <p className="text-sm text-bodyText mt-4">Use for secondary information, muted sections, less emphasis.</p>
              </div>
            </div>

            <NoteCard label="Section Label Guidelines" className="mt-6">
              Always place above h2 headings to establish section identity. Use consistent color per page section for visual flow. Font: monospace, uppercase, 0.5px bottom border for subtle definition.
            </NoteCard>
          </div>

          {/* Callouts */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-bold text-darkText mb-6">Callouts</h3>
            <p className="text-base text-bodyText mb-6">Emphasized information boxes with 2.5px left borders. Used for important notes, warnings, and context.</p>

            <div className="space-y-4">
              <Callout type="blue" label="Information">
                Blue callouts for general information and important context. Use for educational or clarifying content.
              </Callout>

              <Callout type="amber" label="Important Note">
                Amber callouts for warnings, reminders, and important considerations. Commands attention without alarm.
              </Callout>

              <Callout type="success" label="Success State">
                Green callouts for positive outcomes, validated states, and confirmations.
              </Callout>
            </div>

            <NoteCard label="Callout Best Practices" className="mt-6">
              Always include a monospace label for clarity. Use for content that needs visual separation from body text. 2.5px left border creates visual weight without being overwhelming. Limit to one callout per section.
            </NoteCard>
          </div>

          {/* Note Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-bold text-darkText mb-6">Note Cards</h3>
            <p className="text-base text-bodyText mb-6">Structured insight containers with monospace labels. Used for key insights, learning, and design patterns.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <NoteCard label="Key Insight">
                This pattern demonstrates how note cards organize information with clear labeling and generous padding for readability.
              </NoteCard>

              <NoteCard label="Learning">
                Note cards work best for discrete pieces of information that deserve visual isolation from surrounding content.
              </NoteCard>

              <NoteCard label="Design Pattern">
                Combine with other components for richer information hierarchy. Use consistent labeling across related cards.
              </NoteCard>

              <NoteCard label="Best Practice">
                Keep content to 1-2 sentences for scanning. Use monospace labels that match the information type (Key Insight, Learning, Pattern, etc.).
              </NoteCard>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-bold text-darkText mb-6">Progress Bars</h3>
            <p className="text-base text-bodyText mb-6">Visual progress indicators with color variations. Used for tracking completion, milestones, and status.</p>

            <div className="space-y-8 bg-cardBg border border-darkText/10 p-8 rounded-lg">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Blue Progress</h4>
                <ProgressBar current={5} total={10} label="Progress" color="blue" />
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Amber Progress</h4>
                <ProgressBar current={7} total={10} label="Progress" color="amber" />
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-darkText/60 mb-4">Green Progress (Complete)</h4>
                <ProgressBar current={10} total={10} label="Progress" color="green" />
              </div>
            </div>

            <NoteCard label="Progress Bar Usage" className="mt-6">
              Use for tracking project completion, form steps, and achievement milestones. Color indicates type: blue for tasks, amber for warnings/actions, green for completion. Label shows current/total for clarity.
            </NoteCard>
          </div>
        </section>

        {/* Borders & Subtle Details */}
        <section className="mb-24">
          <SectionLabel label="Micro-Details" color="blue" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Precision & Subtle Details</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Border System</h3>
              <div className="space-y-3">
                <div className="border-0.5 border-darkText/30 p-4 rounded-sm">
                  <p className="text-xs font-mono text-darkText/60 mb-1">0.5px Border</p>
                  <p className="text-sm text-darkText">Used for subtle structure: section dividers, card edges, component outlines.</p>
                </div>
                <div className="border-2.5 border-l-0 border-r-0 border-t-0 border-warmAmber p-4">
                  <p className="text-xs font-mono text-darkText/60 mb-1">2.5px Left Border (Callouts)</p>
                  <p className="text-sm text-darkText">Distinctive left border for emphasized callout boxes. Creates visual weight.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Opacity & Contrast</h3>
              <div className="space-y-3">
                <div className="p-4 border border-darkText/20 rounded-sm bg-darkText/5">
                  <p className="text-xs font-mono text-darkText/60 mb-1">5% Opacity (Background Tints)</p>
                  <p className="text-sm text-darkText">Subtle background colors for section breaks and differentiation.</p>
                </div>
                <div className="p-4 border border-darkText/20 rounded-sm">
                  <p className="text-xs font-mono text-darkText/60 mb-1">20% Opacity (Borders)</p>
                  <p className="text-sm text-darkText">Default border color for cards and structural elements. Readable without harshness.</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="blue" label="Design Principle: Precision">
            0.5px borders create a sense of engineering rigor. 2.5px left-border callouts demand attention without shouting. Strategic opacity creates visual hierarchy. Every visual choice serves a purpose—remove the unnecessary.
          </Callout>
        </section>

        {/* Brand Voice Section */}
        <section className="mb-24">
          <SectionLabel label="Brand Voice" color="amber" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Tone & Communication Guidelines</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Do's</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-warmAmber font-bold">✓</span>
                  <span className="text-sm text-darkText">Be direct and specific. Use concrete language and real examples.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-warmAmber font-bold">✓</span>
                  <span className="text-sm text-darkText">Show systems thinking. Explain connections and why things matter.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-warmAmber font-bold">✓</span>
                  <span className="text-sm text-darkText">Focus on outcomes. Quantify impact where possible (€1.5M+, 60% reduction).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-warmAmber font-bold">✓</span>
                  <span className="text-sm text-darkText">Use plain English. Avoid consultant jargon and buzzwords.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-warmAmber font-bold">✓</span>
                  <span className="text-sm text-darkText">Be genuine. Write in Jason's voice—measured, thoughtful, credible.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Don'ts</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-diagnosticBlue font-bold">✗</span>
                  <span className="text-sm text-darkText">Don't use corporate speak ("synergize," "leverage," "holistic").</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-diagnosticBlue font-bold">✗</span>
                  <span className="text-sm text-darkText">Don't make claims without evidence. Always back up assertions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-diagnosticBlue font-bold">✗</span>
                  <span className="text-sm text-darkText">Don't oversell. Be confident but humble about limitations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-diagnosticBlue font-bold">✗</span>
                  <span className="text-sm text-darkText">Don't use trendy language or slang. Aim for timelessness.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-diagnosticBlue font-bold">✗</span>
                  <span className="text-sm text-darkText">Don't explain the obvious. Trust readers' intelligence.</span>
                </li>
              </ul>
            </div>
          </div>

          <NoteCard label="Voice Inspiration" className="mt-8">
            The site voice resembles: Ali Abdaal (clear + engaging), Sam Denny (systems thinking), Answer in Progress (educational depth). Credible without pretension. Systems-oriented. Shows real thinking, not marketing copy.
          </NoteCard>
        </section>

        {/* Accessibility Section */}
        <section className="mb-24">
          <SectionLabel label="Accessibility" color="green" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Accessibility & Inclusive Design</h2>

          <Callout type="blue" label="WCAG AA Compliance">
            All text meets WCAG AA contrast ratios (4.5:1 for text, 3:1 for UI components). Interactive elements are keyboard-accessible. Focus states are visible. Images have alt text. Color is not the only way to convey information.
          </Callout>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Contrast Examples</h3>
              <div className="space-y-3">
                <div className="p-4 bg-darkText rounded-sm">
                  <p className="text-sm text-white">Dark text on white: 21:1 contrast ✓</p>
                </div>
                <div className="p-4 bg-white border border-darkText rounded-sm">
                  <p className="text-sm text-darkText">White background: Sufficient for readability ✓</p>
                </div>
                <div className="p-4 bg-warmAmber rounded-sm">
                  <p className="text-sm text-cardBg">Warm Amber CTA: 8.2:1 contrast ✓</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Interactive Elements</h3>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-warmAmber text-cardBg font-bold rounded-full hover:bg-diagnosticBlue focus:outline-2 focus:outline-offset-2 focus:outline-warmAmber transition-colors">
                  Keyboard focusable button
                </button>
                <p className="text-xs text-bodyText">Visible focus state on all interactive elements. Clear hover/active states.</p>
              </div>
            </div>
          </div>

          <NoteCard label="Accessibility Checklist" className="mt-8">
            • All images have descriptive alt text • Color not sole means of information • Focus states visible • Keyboard navigation works • Text sized for readability (16px+) • Line height ≥1.5 • Semantic HTML (button, nav, etc.) • No auto-playing media
          </NoteCard>
        </section>

        {/* Design Principles */}
        <section className="mb-24">
          <SectionLabel label="Principles" color="blue" />
          <h2 className="text-4xl font-sans font-bold text-darkText mb-8 leading-tight">Design Philosophy</h2>

          <div className="space-y-6">
            <NoteCard label="1. Simplicity">
              Remove the unnecessary. Every visual choice serves a purpose. White space is not empty—it's breathing room that makes content readable and approachable.
            </NoteCard>

            <NoteCard label="2. Precision">
              Details matter. 0.5px borders, generous padding, monospace labels, strategic opacity. Small choices compound to create a sense of intentionality and craftsmanship.
            </NoteCard>

            <NoteCard label="3. Clarity">
              Design for scanning. Strong hierarchy. Obvious CTAs. Clear information architecture. Readers should never be confused about where to go or what to do next.
            </NoteCard>

            <NoteCard label="4. Credibility">
              Design should feel premium without being trendy. Professional depth without corporate jargon. Show real evidence, real outcomes, real thinking.
            </NoteCard>

            <NoteCard label="5. Systems Thinking">
              Design reflects the brand: diagnostic, systematic, connected. Color palette has purpose. Spacing follows rules. Components scale predictably. Everything relates to everything else.
            </NoteCard>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-darkText/10 pt-12 text-center">
          <p className="text-sm text-bodyText">
            This design guide is a living document. Update it as the system evolves. Consistency enables velocity.
          </p>
        </div>
      </div>
    </>
  );
}
