# 06. Second Brain OS

> A personal knowledge system built on Obsidian — synced across all devices via Git, automated with n8n workflows, and queryable through an AI synthesis layer.

---

## Overview

| Field | Value |
|-------|-------|
| Status | Planned |
| Persona | The Architect (personal infrastructure) |
| Key Skills | Knowledge architecture, workflow automation, n8n, AI integration, Git |
| Stack | Obsidian, Obsidian Git plugin, GitHub (private repo), n8n (self-hosted VPS), OpenRouter / Gemini API |
| Dataset | Personal knowledge vault — no public dataset |
| Cost | Zero additional cost (uses existing VPS, GitHub free tier, Gemini free tier) |
| Repo | Private GitHub repo for vault sync |

---

## The Problem

Knowledge accumulates in the wrong places. Meeting notes in one app. Project ideas in another. Research links in browser bookmarks. Useful frameworks in email threads. Reflections in a notes app that doesn't sync properly between phone and laptop.

The result: valuable thinking is effectively lost. You wrote it down — but you can't find it, connect it to anything else, or build on it. When you need a framework you developed 6 months ago, you start from scratch.

A second brain solves this by creating **one system where all knowledge lives, connects, and compounds over time.** The additional layer this project adds is AI-powered synthesis: the ability to query your own notes, get weekly summaries of what you've been thinking about, and surface relevant past work when starting something new.

**The baseline requirement before any of that works is reliable cross-device sync.** Everything else fails if the vault isn't the same on your laptop, phone, and any other device you use.

---

## Solution

Three layers:

### Layer 1 — Vault + Cross-Device Sync (Obsidian + Git)

**Obsidian** is a local-first Markdown note-taking app. Notes are plain `.md` files stored on your device — no proprietary format, no vendor lock-in, works offline.

**Cross-device sync via Git:**
- All vault files live in a **private GitHub repository**
- The **Obsidian Git plugin** (community plugin) auto-commits and pushes on a configurable interval (e.g., every 10 minutes, or on vault close)
- On any new device: clone the private repo, open the folder as an Obsidian vault, install Obsidian Git plugin, done

**Device-specific setup:**

| Device | Method | Notes |
|--------|--------|-------|
| Mac / Windows / Linux | Obsidian Git plugin | Auto-commit + push on schedule |
| iPhone / iPad | [Working Copy](https://workingcopyapp.com/) (Git client) + Obsidian mobile | Pull before opening, push after editing. Working Copy free tier works. |
| Android | Obsidian mobile + [GitJournal](https://gitjournal.io/) or Termux | GitJournal is simpler; Termux gives full Git CLI |

**Why Git over other sync options:**
- **Obsidian Sync** ($10/month): Fine if budget allows, but adds ongoing cost
- **iCloud**: Apple-only; breaks on Android or Windows
- **Google Drive / Dropbox**: Causes file conflicts if vault is open on two devices simultaneously
- **Git**: Free, version-controlled (full history), works across all platforms, conflict-safe if you sync before editing

### Layer 2 — Capture & Automation (n8n)

n8n workflows running on the existing self-hosted VPS handle automated ingestion and processing.

**Workflow 1 — Weekly Digest**
- Trigger: every Sunday at 8am
- Action: scan vault for notes modified in the past 7 days
- Process: send to LLM → generate a 200-word synthesis of themes, open questions, and connections
- Deliver: email or Telegram message

**Workflow 2 — Web Clipper**
- Trigger: POST to n8n webhook from a browser bookmarklet or Raycast extension
- Action: fetch URL → LLM summarizes in 3 bullet points → appends to `Inbox.md` in vault with tags + date
- Result: clean, searchable notes from web content — no raw bookmarks

**Workflow 3 — "Ask My Vault" Query**
- Trigger: POST to n8n webhook with a question
- Action: read recent vault files → chunk content → LLM answers the question using vault context
- Deliver: response back to webhook caller (accessible via a simple web form or Raycast script)

**Workflow 4 — Meeting Note Formatter**
- Trigger: POST raw meeting notes to webhook
- Action: LLM structures them into standard template (attendees, decisions, action items, open questions)
- Deliver: formatted note appended to `Meetings/` folder in vault

### Layer 3 — AI Query Layer

The "Ask My Vault" workflow is the most powerful feature. It enables queries like:
- "What frameworks have I written about for evaluating operations maturity?"
- "Summarize everything I've noted about ZALORA's routing system"
- "What open questions do I have about my career goals?"

**Implementation approach:**
- Vault files are read by n8n (from the local clone on the VPS, or via GitHub API)
- Content is chunked by file (one note = one chunk)
- Question + chunks sent to LLM (Gemini Flash via Google AI Studio free tier — generous free limits)
- LLM returns answer with source note references

**Limitation:** For large vaults (1000+ notes), this approach becomes slow and expensive per query. At that scale, a vector database (e.g., ChromaDB) would be needed. For now, chunking by recent/relevant files is sufficient.

---

## Vault Structure

```
vault/
├── Inbox.md                    ← All new captures land here first
├── Projects/                   ← One folder per active project
│   ├── portfolio-projects/
│   └── zalora-multi-warehouse/
├── Areas/                      ← Ongoing responsibilities
│   ├── career/
│   ├── health/
│   └── finance/
├── Resources/                  ← Reference material, frameworks, research
│   ├── operations-frameworks/
│   └── ai-tools/
├── Archive/                    ← Completed projects, old notes
├── Daily/                      ← Daily notes (YYYY-MM-DD.md)
└── Templates/                  ← Note templates
    ├── meeting-note.md
    ├── project-brief.md
    └── weekly-review.md
```

This follows the **PARA method** (Projects, Areas, Resources, Archive) by Tiago Forte — a well-tested knowledge architecture designed for people who work across multiple projects simultaneously.

---

## Technical Architecture

```
[Obsidian on Mac/Phone]
        ↓ (Obsidian Git plugin / Working Copy)
[Private GitHub Repo]
        ↓ (git pull on VPS — cron or webhook)
[Local vault clone on VPS]
        ↓
[n8n Workflows]
    ├── Weekly Digest → Gemini API → Email
    ├── Web Clipper → Gemini API → GitHub push (new note)
    ├── Ask My Vault → Gemini API → HTTP response
    └── Meeting Formatter → Gemini API → GitHub push (new note)
```

**LLM:** Gemini Flash via Google AI Studio (free tier: 15 RPM, 1M tokens/day — more than sufficient for personal use). OpenRouter as fallback.

**Google Workspace integration (optional):** n8n has native Google Calendar and Gmail nodes. Can add workflows to:
- Pull today's calendar events → prepend to daily note
- Forward starred emails → summarize + add to Inbox.md

---

## Success Metrics

| Metric | Definition |
|--------|------------|
| Cross-device sync reliability | Zero sync conflicts in first 30 days of use |
| Weekly digest quality | Synthesis is accurate to actual notes (manual spot-check) |
| Web clipper speed | Note appears in vault within 30 seconds of bookmarking |
| Ask My Vault accuracy | Correctly answers 4/5 test questions from vault content |
| Daily usage | Notes added on ≥ 5 days/week for first month |

---

## Mirrors Real Work

This is a personal infrastructure project rather than a client-facing tool. It reflects the same systems-design thinking applied to professional projects — defining a clear information architecture (PARA), automating repetitive tasks (capture, formatting), and building a queryable knowledge layer. It also demonstrates practical AI integration without a complex tech stack — the same philosophy as the "Logic Architect" framing: design the system, let AI execute.

---

## Build Notes

**Setup order:**
1. Create private GitHub repo: `jkhan31/second-brain` (private)
2. Install Obsidian → open new vault in a local folder
3. Set up PARA folder structure (see above)
4. Install Obsidian Git plugin → configure auto-commit interval (10 min) + remote = GitHub repo
5. On iPhone: install Working Copy → clone repo → connect to Obsidian mobile vault
6. On VPS: `git clone` the repo to `/home/user/vault` — set up cron to pull every 15 min
7. Build n8n workflows one at a time (Weekly Digest first — simplest, highest value)
8. Connect Gemini API key in n8n credentials

**Claude Code usage:**
- Write the n8n workflow JSON for each automation (importable directly)
- Scaffold the Obsidian templates (meeting note, project brief, weekly review)
- Write the bookmarklet JavaScript for the web clipper trigger
- Generate the Raycast script for "Ask My Vault" queries from the Mac menubar

**Key Obsidian plugins to install:**
- Obsidian Git (sync)
- Dataview (query notes like a database — `LIST FROM #project WHERE status = "active"`)
- Templater (advanced templates with dynamic content)
- Calendar (visual daily note navigation)
- QuickAdd (fast capture to Inbox)
