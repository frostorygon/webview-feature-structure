# Conventions — Quick Reference

> Print this. Pin it. Argue about it in PR reviews.

---

## Naming

| What | Convention | Example |
|---|---|---|
| Folders | `kebab-case` | `select-reason/` |
| Component files | `kebab-case.js` | `select-reason.component.js` |
| Component template| `kebab-case.template.js`| `select-reason.template.js` |
| Registration files | `kebab-case.js` | `select-reason.js` |
| Styles | `[name].styles.js` | `select-reason.styles.js` |
| Tests | `[name].test.js` | `select-reason.test.js` |
| Stories | `[name].stories.js` | `select-reason.stories.js` |
| Types | always `types.ts` | `types.ts` (TS interfaces, consumed via JSDoc) |
| Fixtures | state name | `default.js`, `error.js`, `empty.js` |
| Translations | `[locale].js` | `en.js`, `nl.js`, `de.js` |
| Translation keys | `screen.key` | `selectReason.title`, `common.retry` |
| Storybook titles | `{Category} / {Name}` | `Screens / Select Reason` |

---

## Type Strategy: JS Code + TS Types

- All code is **`.js`** (components, styles, tests, fixtures, stories, mocks)
- Type definitions are **`types.ts`** (proper TS interfaces)
- JS files reference types via JSDoc: `@type {import('./types').SomeType}`

---

## Placement

### Components

```
Used by 2+ screens?  →  src/shared/
Used by 1 screen?    →  src/screens/[screen]/components/
```

### Types

```
Flow-level types     →  src/app/types.ts
Screen types         →  src/screens/[screen]/types.ts
Shared comp types    →  src/shared/[comp]/types.ts
API contracts        →  src/services/types.ts
Native bridge types  →  src/bridge/types.ts
```

### Styles

```
Design tokens        →  src/tokens/
Screen styles        →  src/screens/[screen]/[screen].styles.js
Shared comp          →  src/shared/[comp]/[comp].styles.js
```

### Translations

```
All locales          →  src/translations/[locale].js
Shared strings       →  common.* namespace
Screen strings       →  [screenName].* namespace
New locale           →  create file + register in index.js
```

### Fixtures

```
Has 2+ data states?  →  Create fixtures/ next to the component
Only 1 state?        →  Pass data directly in tests/stories
```

---

## Every Component Folder Looks Like This

```
[name]/
├── [name].component.js    ← class (state & logic)
├── [name].template.js     ← exported html template
├── [name].js              ← registration (guarded define)
├── [name].styles.js       ← styles
├── [name].test.js         ← tests
├── types.ts               ← TS interfaces (optional)
├── fixtures/              ← mock data (optional)
└── components/            ← private sub-components (optional)
```

---

## Rules

1. **Co-locate** — tests, styles, types, fixtures live next to the component
2. **No cross-screen imports** — screens never import from other screens
3. **Events up, data down** — screens receive data as properties, emit events back
4. **Guard registration** — always `if (!customElements.get(tag))` before `define()`
5. **Register centrally** — add every component to `src/app/registry.js`
6. **Separate templates** — use `[name].template.js` to keep the component class clean
7. **Realistic fixtures** — never `"test123"` or `"Lorem ipsum"`
