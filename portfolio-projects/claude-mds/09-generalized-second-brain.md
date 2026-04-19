# CLAUDE.md — Generalized Second Brain (Public Template)

## What This Is
A forkable GitHub template repo: an Obsidian vault pre-loaded with synthetic ops professional notes, plus Claude Code skill files for common vault queries. Others can fork, replace dummy data with their own notes, and use Claude Code as their AI interaction layer.

## Architecture
```
Obsidian vault (local)
  ↕ git sync (Obsidian Git plugin → GitHub private repo)
Claude Code (run inside vault directory)
  → reads .md files, answers questions, drafts documents
```
No n8n. No external API. No paid services. Claude Pro subscription covers all AI interaction.

## Stack
- **Obsidian** — note-taking, local vault
- **Obsidian Git plugin** — auto-commit + push/pull on schedule
- **GitHub** (private repo) — sync backbone, version history
- **Claude Code** — AI interaction layer (open in vault folder, run queries/skills)
- Cross-device: Mac/Windows via Obsidian Git; iOS via Working Copy + Obsidian mobile

## Vault Structure (PARA method)
```
vault/
├── Projects/          # Active projects with status, owner, next action
├── Areas/             # Ongoing responsibilities (ops, finance, team)
├── Resources/         # Reference material, frameworks, how-tos
├── Archive/           # Completed projects, old meeting notes
├── Inbox/             # Unsorted captures (processed weekly)
└── .claude/
    └── skills/        # Claude Code skill files for vault queries
```

## Included Claude Code Skills
| Skill | What It Does |
|-------|-------------|
| `/week-summary` | Summarise all notes modified this week |
| `/open-actions` | Find all unchecked `- [ ]` items across Projects/ |
| `/project-brief` | Draft a project brief from a folder of rough notes |
| `/meeting-format` | Convert bullet notes into structured meeting summary |

## Dummy Data Generation
A Claude Code script (`scripts/generate-dummy-vault.py`) creates synthetic notes for an ops professional at a fictional 3PL — projects, meeting notes, resource docs, inbox items. Run once to populate the template before publishing.

## Commands
```bash
# Inside vault directory:
claude          # open interactive Claude Code session
claude -p "summarise open action items across all projects"
```

## Constraints
- No API calls — Claude Code environment only
- Skill files are plain markdown (`.md`) in `.claude/skills/`
- Dummy data must be clearly marked synthetic (frontmatter: `synthetic: true`)
- Vault structure follows PARA strictly — no custom top-level folders in template

## Publishing as Template
Set the GitHub repo as a template repo (Settings → check "Template repository"). README explains: fork → replace dummy data → install Obsidian Git → open in Claude Code.
