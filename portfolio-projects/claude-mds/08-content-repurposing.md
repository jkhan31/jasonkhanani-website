# CLAUDE.md — Content Repurposing Engine

## What This Is
Claude Code skill that reads a published article or case study markdown file and outputs three social-ready drafts: a LinkedIn post, a Twitter/X thread, and a TL;DR summary. Optionally triggered automatically post-publish via n8n SSH.

## Stack
- Primary: Claude Code skill (`.claude/skills/repurpose.md`) — runs locally, no deployment needed
- Optional automation: n8n cron/webhook → SSH Execute → `claude -p "..." < article.md` on VPS
- Output: writes to `social-drafts/{project}/{linkedin,twitter,tldr}.md`
- No web UI — Claude Code native

## Two Modes

### Mode A: Manual (Claude Code skill)
```bash
# From within the article repo, run:
/repurpose portfolio-projects/expedia-case-study/CASE_STUDY.md
```
Skill reads the file, generates all three formats, writes output files.

### Mode B: Automated (n8n SSH trigger)
```
Trigger: n8n webhook (fired post-publish, or on schedule)
  → SSH Execute node
  → cat CASE_STUDY.md | claude -p "Repurpose this article into LinkedIn post, Twitter thread, TL;DR. Output as JSON with keys: linkedin, twitter, tldr."
  → n8n parses JSON → writes to social-drafts/ via git commit on VPS
```

## Output Format
```
social-drafts/
└── {project-name}/
    ├── linkedin.md    # 1200–1500 chars, hook + 3 insights + CTA
    ├── twitter.md     # 5–8 tweet thread, each tweet ≤280 chars
    └── tldr.md        # 3-bullet executive summary, ≤150 words
```

## Skill File Location
`.claude/skills/repurpose.md` in the portfolio repo

## Constraints
- LinkedIn draft must start with a hook (first line is the scroll-stopper)
- Twitter thread must number tweets: "1/ ... 2/ ... n/"
- TL;DR must be exactly 3 bullets
- No hallucinated stats — only use figures that appear in the source article
- Claude Code skill only — no frontend, no API, no database

## Useful Claude Skills
- `/simplify` — after first draft output looks too long
- `/deploy-check` — not applicable (no deployment)
