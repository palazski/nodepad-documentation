> Project guidance should stay current as NodePad evolves. Update this file when product terminology, feature scope, or documentation boundaries change.

# NodePad documentation project instructions

## About this project

- This repo is the Mintlify documentation site for NodePad
- NodePad is a canvas-based AI workspace built around workspaces, branches, references, merge flows, attachments, and text notes
- Pages are MDX files with YAML frontmatter
- Global site configuration lives in `docs.json`
- Custom visual polish lives in `custom.css`
- Run `mint dev` to preview locally
- Run `mint broken-links` and `mint validate` before opening a PR

## Product terminology

- Use `workspace`, not `project`, for a saved NodePad canvas
- Use `branch` for a conversation path created from a specific message
- Use `node` for an individual message or reply in a branch
- Use `text note` for human-facing canvas annotations
- Use `reference` for `@`-based cross-branch context
- Use `merge` or `merge sources` for multi-branch synthesis context
- Use `workspace instructions` for workspace-level prompting or guidance
- Use `model` for the selected AI model; use `default model` for the workspace-level default

## Style preferences

- Use active voice and second person
- Keep sentences concise and concrete
- Use sentence case for headings
- Bold UI labels: **Branch from here**, **Merge into new message**
- Use code formatting for file names, commands, paths, node IDs, and inline tokens such as `@B1-2`
- Prefer direct product language over marketing language
- Explain what the product does today; avoid roadmap language unless a page is explicitly about future plans

## Content boundaries

- Document the product behavior that exists in the current NodePad app and deployment repos
- Prefer product truth from `nodepad/`, `nodepad-api/`, and `nodepad-landing/` over stale docs copy
- Do not describe text notes as persistent AI prompt constraints unless the product changes to support that
- Do not promise enterprise features unless they are clearly shipped and documented in the codebase or release materials
- Keep hosted beta guidance separate from self-hosted enterprise guidance

## Documentation workflow

- When rewriting product docs, verify behavior against the sibling repos:
  - `../nodepad` for frontend UX and terminology
  - `../nodepad-api` for backend capabilities and deployment details
  - `../nodepad-landing` for public product positioning
- When changing information architecture, keep `docs.json` and page cross-links aligned
- When changing branding or header behavior, prefer `docs.json` settings first and use `custom.css` only for the gaps Mintlify does not cover
