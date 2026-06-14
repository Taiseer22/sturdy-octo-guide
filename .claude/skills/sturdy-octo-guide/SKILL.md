```markdown
# sturdy-octo-guide Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on contributing to the `sturdy-octo-guide` JavaScript repository. It covers established coding conventions, file organization, and key workflows—especially synchronizing with upstream changes. The repository uses plain JavaScript (no framework detected) and a mixture of modern import/export styles. Testing conventions and automation workflows are also documented.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `myComponent.js`, `dataProcessor.test.js`

### Import Style
- Both ES6 and CommonJS import styles are present.
  - ES6 Example:
    ```js
    import { fetchData } from './apiUtils';
    ```
  - CommonJS Example:
    ```js
    const utils = require('./utils');
    ```

### Export Style
- Prefer **named exports**.
  - Example:
    ```js
    // In mathUtils.js
    export function add(a, b) { return a + b; }
    export function subtract(a, b) { return a - b; }
    ```

### Commit Messages
- Freeform, no strict prefix, average length ~53 characters.
  - Example: `Fix bug in data processing for edge cases`

## Workflows

### Apply Upstream PR Changes
**Trigger:** When you need to synchronize the repository with selected changes from upstream pull requests (PRs), such as bug fixes or new features.
**Command:** `/apply-upstream-pr`

1. Identify relevant upstream pull requests containing desired updates or fixes.
2. Select the full patch files associated with these PRs.
3. Apply the patches to the repository, updating affected files. This may include:
    - Workflow files (e.g., `.github/workflows/build-and-test.yml`)
    - Documentation (e.g., `README.md`)
    - Source code and test files (e.g., `index.js`, `*.test.js`)
4. Commit the changes using a standard commit message.

**Files commonly involved:**
- `.github/workflows/build-and-test.yml`
- `.github/workflows/e2e-base.yml`
- `.github/workflows/lint.yml`
- `README.md`
- `docusaurus/website/src/pages/index.js`
- `packages/react-scripts/fixtures/kitchensink/template/src/features/webpack/CssInclusion.test.js`
- `packages/react-scripts/fixtures/kitchensink/template/src/features/webpack/SvgComponent.test.js`
- `packages/react-scripts/fixtures/kitchensink/template/src/index.js`

**Example:**
```sh
/apply-upstream-pr
```

## Testing Patterns

- Test files follow the pattern: `*.test.*`
  - Example: `dataProcessor.test.js`
- Testing framework is **unknown**; check existing test files for conventions.
- Tests are colocated with source files or in dedicated test directories.

**Example test file:**
```js
// mathUtils.test.js
import { add } from './mathUtils';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
```

## Commands

| Command            | Purpose                                                      |
|--------------------|--------------------------------------------------------------|
| /apply-upstream-pr | Synchronize with selected changes from upstream pull requests |
```
