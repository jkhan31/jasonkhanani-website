# CLAUDE.md — Second Brain OS

## What This Is
Personal knowledge infrastructure. Obsidian vault synced across all devices via Git. n8n workflows for weekly digest, web clipper, meeting formatter, and "ask my vault" AI query endpoint. Zero additional cost.

## Stack
- Obsidian + Obsidian Git plugin (vault + sync)
- GitHub private repo (sync backbone — free)
- n8n self-hosted VPS (automation layer)
- Gemini Flash via Google AI Studio (LLM — free tier: 15 RPM, 1M tokens/day)
- Optional: Google Workspace (Gmail + Calendar via n8n nodes)

## Vault Structure
```
vault/
├── Inbox.md            # all new captures land here first
├── Projects/           # one folder per active project
├── Areas/              # ongoing responsibilities (career, health, finance)
├── Resources/          # reference material and frameworks
├── Archive/            # completed or inactive
├── Daily/              # YYYY-MM-DD.md
└── Templates/          # meeting-note.md, project-brief.md, weekly-review.md
```

## n8n Workflows
```
1. Weekly Digest
   Trigger: cron Sunday 8am
   → read vault files modified in past 7 days (from VPS local clone)
   → Gemini: summarize themes + open questions (200 words)
   → send via email or Telegram

2. Web Clipper
   Trigger: POST /webhook/clip { url }
   → fetch URL → Gemini: 3-bullet summary + tags
   → append to Inbox.md → git commit + push

3. Ask My Vault
   Trigger: POST /webhook/ask { question }
   → read recent vault files → chunk by file
   → Gemini: answer using vault context + cite source files
   → return JSON { answer, sources }

4. Meeting Formatter
   Trigger: POST /webhook/meeting { raw_notes }
   → Gemini: structure into template (attendees, decisions, actions, open questions)
   → git commit + push to Meetings/
```

## Sync Setup
- Desktop: Obsidian Git plugin, auto-commit every 10 min, push on vault close
- iPhone/iPad: Working Copy app → pull before open, push after edit
- VPS: `git clone` to `/home/user/vault`, cron pull every 15 min (for n8n to read latest)

## Constraints
- VPS reads vault from local clone — not GitHub API (lower latency, no rate limits)
- Gemini Flash free tier only — do not use paid models for personal queries
- Plain .md files only — no Obsidian proprietary formats in automation workflows
- Web Clipper must git push immediately after writing — don't batch

## API Connections
- **Gemini API** (Google AI Studio) — all 4 workflows
- **GitHub API** (optional) — only if reading vault remotely; prefer local clone
- **Google Workspace** (optional) — Gmail + Calendar via n8n native nodes

## Key Obsidian Plugins
- Obsidian Git, Dataview, Templater, Calendar, QuickAdd

## Useful Claude Skills
- `/new-article` — when writing a public post about the system design
- `/update-config` — to set up session-start hooks for automation
