---
name: apply-upstream-pr-changes
description: Workflow command scaffold for apply-upstream-pr-changes in sturdy-octo-guide.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /apply-upstream-pr-changes

Use this workflow when working on **apply-upstream-pr-changes** in `sturdy-octo-guide`.

## Goal

Synchronize the repository with selected changes from upstream pull requests by applying full patch files.

## Common Files

- `.github/workflows/build-and-test.yml`
- `.github/workflows/e2e-base.yml`
- `.github/workflows/lint.yml`
- `README.md`
- `docusaurus/website/src/pages/index.js`
- `packages/react-scripts/fixtures/kitchensink/template/src/features/webpack/CssInclusion.test.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify relevant upstream pull requests.
- Select full patch files to apply.
- Apply patches to the repository, updating affected files (e.g., workflows, documentation, test files, source code).
- Commit the changes with a standard message.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.