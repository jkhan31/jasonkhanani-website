---
name: skill-builder
description: Use when creating new skills, optimizing existing skills, or auditing skill quality. Guides skill development following Claude Code official best practices.
---

## What This Skill Does

Guides the creation and optimization of Claude Code skills using official best practices. Use this whenever:

- Building a new skill from scratch
- Optimizing or auditing an existing skill
- Deciding on advanced features (subagent execution, hooks, dynamic context, etc.)
- Troubleshooting a skill that isn't working correctly

For the complete technical reference on all frontmatter fields, advanced patterns, and troubleshooting, see [reference.md](reference.md).

## The Anatomy of a Skill

A skill consists of a "brain" (this markdown file) and its supporting context. For maximum effectiveness, follow this structure:

1. **The Frontmatter**: Defined in the YAML block at the top. It specifies the `name` (slash-command) and `description`. 
   > [!TIP]
   > Always write descriptions as: "Use when someone asks to [action]..." to ensure Claude identifies the trigger correctly.
2. **The Workflow**: A dedicated "Step-by-step workflow" with numbered steps telling Claude exactly what to do.
3. **Supporting Files**: Keep `SKILL.md` under 500 lines. Move detailed reference material, examples, or scripts to the same directory.

### Progressive Context Loading

Claude Code uses a 3-level system to manage context efficiently:

- **Level 1 (Descriptions)**: Skill descriptions are always loaded so Claude knows what's available.
- **Level 2 (The Brain)**: The full `SKILL.md` content loads only when the skill is actually invoked.
- **Level 3 (Supporting Files)**: Detailed reference files and scripts are NOT loaded automatically; they load only when Claude explicitly needs them during execution.

---

## Mode 1: The 6-Step Build Framework

When building a new skill, follow this 6-step framework. Start with a **Discovery Interview** to gather all necessary context before writing any files.

### Discovery Interview
Ask questions using `AskUserQuestion`, one round at a time. Each round corresponds to a step in the framework. Move to the next round only after the user answers.

**Step 1 & 2: Goal, Name & Trigger**
*Why this matters: A clear goal prevents scope creep. The name becomes the `/slash-command`, so it needs to be memorable and specific.*

- What does this skill do? What problem does it solve or what workflow does it automate?
- What should we call it? (Suggest a name based on their answer -- lowercase, hyphens, max 64 chars)

**Step 2: Trigger (continued)**
*Why this matters: The `description` field is how Claude decides whether to load your skill. Bad trigger words mean Claude never uses it. Too broad means Claude fires it when you don't want it.*

- What would someone say to trigger this? (Get 2-3 natural language phrases)
- Should it be user-only (`/slash-command`), Claude-auto-invocable, or both?
- Does it accept arguments? If so, what? (e.g., a topic, a URL, a file path)

**Step 3: Process**
*Why this matters: Claude follows instructions literally. Vague steps produce vague results. Specific steps produce consistent output every time.*

- Walk me through exactly what should happen from trigger to output. What's step 1? Step 2? Keep going.
- For each step: Does Claude do it directly, or delegate to a subagent/script?
- Does this need to be conversational (back-and-forth with the user) or is it a fire-and-forget task?

**Step 4: References & Context**
*Why this matters: Skills that don't specify where to find inputs or where to put outputs produce inconsistent results. Nailing this down makes the skill reliable.*

- What inputs does the skill need? (Files, API responses, user arguments, live data)
- What does it produce? (Files, text output, structured data) Where do outputs go?
- Does it need external APIs, scripts, or tools? Which ones?
- Does it need reference files, style guides, templates, or examples?

**Step 5: Rules & Guardrails**
*Why this matters: Skills without guardrails can produce unexpected behavior -- wrong outputs, unnecessary API costs, or actions you didn't intend.*

- What could go wrong? What are the common failure modes?
- What should this skill NOT do? Any hard boundaries?
- Are there cost concerns? (API calls, AI image generation, etc.)
- Any ordering or dependency constraints? (e.g., "must check X before doing Y")

**Step 6: Confirmation & Iteration**
*Why this matters: Misunderstandings caught here save you from rebuilding the skill later.*

After all rounds, summarize your understanding back to the user in this format:

```
## Skill Summary: [name]

**Goal:** [one sentence]
**Trigger:** `/name` + [natural language phrases]
**Arguments:** [what it accepts, or "none"]

**Process:**
1. [step]
2. [step]
...

**Inputs:** [what it reads/needs]
**Outputs:** [what it produces + where]
**Dependencies:** [APIs, scripts, agents, reference files]
**Guardrails:** [what can go wrong, what to avoid]
```

Ask: "Does this capture it? Anything to add or change?" Only proceed to building once the user confirms.

**Skipping rounds:** If the user provides enough context upfront (e.g., they describe the full workflow in their first message), skip rounds that are already answered. Don't re-ask what you already know.

### Build Phase

Once discovery is complete, build the skill following these steps:

**Step 1: Choose the skill type**

- **Task skills** (most common) give step-by-step instructions for a specific action. Invoked with `/name` or natural language. Examples: generate a report, summarize a PR, deploy code.
- **Reference skills** add knowledge Claude applies to current work without performing an action. Examples: coding conventions, API patterns, style guides.

**Step 2: Configure frontmatter**

Set these fields based on what you learned in discovery:

- `name` -- Matches the directory name. Lowercase, hyphens, max 64 chars.
- `description` -- Written as: "Use when someone asks to [action], [action], or [action]." Include natural keywords from the trigger phrases.
- `disable-model-invocation: true` -- Set if the skill has side effects (file generation, API calls, costs money). Prevents Claude from auto-invoking.
- `argument-hint` -- Set if the skill accepts arguments. Shows in the `/` menu autocomplete.
- `context: fork` + `agent` -- Set if the skill is self-contained and doesn't need conversation history.
- `model` -- Set if a specific model capability is needed.
- `allowed-tools` -- Set if the skill should have restricted tool access.

Only set fields you actually need. Don't add frontmatter just because you can.

For the full field reference and invocation control matrix, see [reference.md](reference.md).

**Step 3: Write the skill content**

Structure task skills as:
1. **Context** -- Files to read, APIs to call, reference material to load.
2. **Step-by-step workflow** -- Numbered steps. Each step tells Claude exactly what to do.
3. **Output format** -- What the result looks like. Include templates or examples.
4. **Guardrails/Notes** -- Constraints, failure modes, and what NOT to do.

Content rules:
- Keep SKILL.md under 500 lines. Move detailed reference material to supporting files.
- Use `$ARGUMENTS` / `$N` for dynamic input from arguments.
- Use `!`command`` for dynamic context injection (preprocessing).
- Be specific about agent delegation -- include exact prompt text.
- Specify all file paths (inputs, outputs, scripts, references).

**Step 4: Add supporting files (if needed)**

If your skill needs detailed reference docs, examples, or scripts, add them alongside SKILL.md in the same directory. Reference them from SKILL.md so Claude knows they exist. Supporting files are NOT loaded automatically -- they load only when Claude needs them. See [reference.md](reference.md) for the full pattern.

**Step 5: Document in CLAUDE.md**

Your project's `CLAUDE.md` file is where Claude loads project-wide instructions every conversation. After creating a skill, add a brief entry so you (and your team) know what's available:

- Skill name and `/slash-command`
- Trigger phrases
- Brief description of what it does
- Output location (if it produces files)

This isn't required for the skill to work, but it keeps your project organized and helps Claude understand how skills fit into your broader workflow.

**Step 6: Test**

Test both invocation methods:

1. **Natural language** -- Say something matching the description. Does Claude load the skill?
   - If not, revise the `description` field to include the keywords you used
   - Try 2-3 different phrasings to verify it triggers reliably
2. **Direct invocation** -- Run `/skill-name` with test arguments
   - Verify `$ARGUMENTS` / `$N` are substituting correctly
   - Check that outputs go where expected
3. **Edge cases** -- Try invoking with missing arguments, unusual input, or empty input
4. **Character budget** -- If you have many skills, run `/context` to confirm your skill's description is being loaded. If it's not, your total descriptions may exceed the budget (see [reference.md](reference.md) for details).

If issues arise, see Troubleshooting in [reference.md](reference.md).

### Complete Example

Here's a minimal but complete skill you can use as a starting template:

**File:** `.claude/skills/meeting-notes/SKILL.md`

```yaml
---
name: meeting-notes
description: Use when someone asks to summarize meeting notes, recap a meeting, or format meeting minutes.
argument-hint: [topic or date]
---

## What This Skill Does

Takes raw meeting notes and produces a structured summary with action items.

## Steps

1. Ask the user to paste their raw meeting notes (or provide a file path).
2. Extract the following from the notes:
   - **Attendees** -- Who was in the meeting
   - **Key decisions** -- What was decided
   - **Action items** -- Who owes what, with deadlines if mentioned
   - **Open questions** -- Anything unresolved
3. Format the output using the template below.
4. If $ARGUMENTS is provided, use it as the meeting title. Otherwise, infer a title from the content.

## Output Template

# Meeting: [title]
**Date:** [date if mentioned, otherwise "Not specified"]
**Attendees:** [comma-separated list]

## Key Decisions
- [decision]

## Action Items
- [ ] [person]: [task] (due: [date or "TBD"])

## Open Questions
- [question]

## Notes

- Keep summaries concise. Don't add commentary or embellish.
- If notes are too vague to extract action items, flag that to the user instead of making them up.
```

---

## Mode 2: Audit an Existing Skill

Use this checklist to audit any existing skill. Read the skill file first before running through the checklist. Fix issues before marking the audit complete.

### Frontmatter Audit

- [ ] `name` matches the directory name
- [ ] `description` uses natural keywords someone would actually say when they need this skill
- [ ] `description` is specific enough to avoid false triggers but broad enough to catch real requests
- [ ] `disable-model-invocation: true` is set if the skill has side effects (generates files, calls APIs, sends messages, costs money)
- [ ] `argument-hint` is set if the skill accepts arguments via `/name`
- [ ] `allowed-tools` is set if the skill should NOT have access to all tools
- [ ] `context: fork` is used if the skill is self-contained and produces verbose output
- [ ] `model` is set only if a specific model capability is needed
- [ ] No unnecessary fields are set (don't add frontmatter just because you can)

### Content Audit

- [ ] Total SKILL.md is under 500 lines (detailed reference moved to supporting files)
- [ ] Clear step-by-step workflow with numbered steps (for task skills)
- [ ] Output format is specified with templates or examples
- [ ] All file paths and locations are documented
- [ ] Agent delegation instructions include the actual prompt text to send
- [ ] Notes section covers edge cases, constraints, and what NOT to do
- [ ] No vague instructions -- every step tells Claude exactly what to do
- [ ] String substitutions (`$ARGUMENTS`, `$N`) are used where the skill takes input

### Integration Audit

- [ ] Skill is documented in CLAUDE.md (recommended, not required)
- [ ] Supporting files (if any) are referenced from SKILL.md, not orphaned
- [ ] Scripts (if any) have correct file paths and are executable
- [ ] API keys (if any) are stored in environment variables, never hardcoded

### Quality Audit

- [ ] A beginner could follow the instructions without prior context
- [ ] Instructions are actionable, not abstract
- [ ] Delegates to subagents when appropriate to keep main context clean
- [ ] Doesn't duplicate information that lives elsewhere (CLAUDE.md, other skills)
- [ ] Output paths follow a predictable convention

## Advanced "Pro" Features

Go beyond basic automation by leveraging these advanced patterns:

- **Dynamic Context Injection**: Use `!`command`` syntax (e.g., !`git diff`) to run shell commands before the skill content is sent to Claude.
- **Subagent Delegation (`context: fork`)**: Run tasks in isolated subagent contexts to keep the main conversation clean and manage complex workflows.
- **Allowed Tools**: Restrict tool access (using `allowed-tools` in frontmatter) to prevent Claude from performing unauthorized actions.
- **Extended Thinking (`ultrathink`)**: Activate Claude’s deeper reasoning mode for complex analysis by including the word `ultrathink` in your skill content.

---

### Optimization Opportunities
After running the audit, check [reference.md](reference.md) for detailed implementation of these pro features.

---

## Recommended Conventions

Adapt these to fit your project:

- Skills live in `.claude/skills/[skill-name]/SKILL.md`
- Output files go in a predictable location (e.g., `output/[skill-name]/`)
- API keys go in environment variables, never hardcoded in skill files
- Document all active skills in your project's CLAUDE.md
- Frontmatter `description` is written as: "Use when someone asks to [action], [action], or [action]."

## Important Notes

- Always read an existing skill before optimizing it. Never propose changes to a skill you haven't read.
- When building a new skill, check if a similar skill already exists that could be extended instead.
- For advanced patterns (subagent execution, hooks, permissions), see [reference.md](reference.md).
