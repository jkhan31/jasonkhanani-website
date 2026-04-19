# CLAUDE.md — Mental Check-in Workflow

## What This Is
Daily/weekly reflection workflow triggered by a Telegram message. n8n receives the message, SSHs to VPS, Claude Code processes the check-in (mood, themes, action items), and the output is committed as a structured note to the Obsidian vault on VPS.

## Stack
- **Interface:** Telegram bot (user sends free-text message or voice note transcript)
- **Logic:** n8n workflow (Telegram trigger → SSH Execute → response back to Telegram)
- **AI:** Claude Code on VPS via SSH (`claude -p "..."`) — no API cost
- **Output:** Markdown note written to Second Brain vault, git-committed on VPS

## Flow
```
User → Telegram message
  → Telegram Bot API triggers n8n webhook
  → n8n SSH Execute node:
      echo "{message}" | claude -p "Process this check-in. Extract: mood (1–5), themes (3 max), open questions, action items. Output structured markdown."
  → stdout → n8n writes .md file to vault path on VPS
  → n8n runs: git add + git commit in vault dir
  → n8n Telegram node replies to user with extracted summary
```

## Output Note Format
```markdown
---
date: 2026-04-19
type: check-in
mood: 4
---

## Themes
- Theme 1
- Theme 2

## Open Questions
- Question

## Action Items
- [ ] Action
```

## n8n Workflow Nodes
| Node | Type | Config |
|------|------|--------|
| Telegram Trigger | Webhook | listens for /checkin command or direct message |
| SSH Execute | SSH | host: VPS IP, runs claude -p command |
| Write File | SSH / File | writes output .md to vault/Inbox/{date}-checkin.md |
| Git Commit | SSH Execute | `git -C /vault add . && git commit -m "check-in {date}"` |
| Telegram Reply | Telegram node | sends extracted summary back to user |

## Vault Path
`vault/Inbox/{YYYY-MM-DD}-checkin.md` → moved to `Areas/Wellbeing/` during weekly review

## Constraints
- Claude Code called non-interactively: `echo "{input}" | claude -p "{prompt}"`
- Output must be valid markdown (Claude instructed to return only the note, no preamble)
- Telegram bot restricted to single user chat ID (no public access)
- Git commit happens on VPS; syncs to GitHub automatically via Obsidian Git schedule on desktop

## Setup Steps
1. Create Telegram bot via BotFather → get token
2. Add Telegram credentials to n8n
3. Create n8n workflow with nodes above
4. Confirm SSH Execute has vault path + git configured on VPS
5. Test: send /checkin with a short reflection → verify note appears in vault/Inbox/
