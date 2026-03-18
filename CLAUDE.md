# agentwebprotocol.org

The official standards website for Agent Web Protocol. Next.js 16 + Tailwind CSS 4.

## Ecosystem

| Repo | Role |
|------|------|
| spec | Source of truth — the specification |
| **agentwebprotocol.org** (this repo) | Standards website |
| agent-json.org | Schema reference and validator site |
| agent.json | npm CLI (`npx agent-json init`) |
| mcp-server | MCP server for Claude Code |

GitHub org: github.com/agentwebprotocol

## Pages

- `/` — Home page (hero, pattern timeline, features, CTAs)
- `/quickstart` — Interactive agent.json generator (client-side only)
- `/spec` — Renders SPEC.md live from GitHub (revalidates hourly)
- `/about` — Origin story, design principles, ecosystem links

## API Routes

- `/api/spec` — Returns SPEC.md as text/markdown
- `/api/examples` — Returns example agent.json configs as JSON

## Public Files

- `/.well-known/agent.json` — This site's own agent.json (spec-compliant)
- `/llms.txt` — Concise LLM briefing (~68 lines)
- `/llms-full.txt` — Complete spec + examples for LLM consumption
- `/robots.txt` — Allows all crawlers, points to agent.json and llms.txt

## Build & Deploy

```bash
npm run dev    # local dev
npm run build  # production build
```

Deploy target: Vercel (not yet connected — needs `vercel login` from a machine with a browser).

## Design System

- Dark bg (#0a0a0b), blue accent (#3b82f6), green status (#22c55e)
- Fonts: Inter (body), JetBrains Mono (code)
- CSS theme vars defined in `src/app/globals.css`
- Glow effects: `.glow-line`, `.glow-dot`

## Key Dependencies

- react-markdown + remark-gfm for spec rendering
- No other notable dependencies

## When Spec Changes

The `/spec` page auto-fetches from GitHub. But `/llms-full.txt` has an embedded copy that must be manually updated to match.
