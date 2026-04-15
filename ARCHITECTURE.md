# Feature Folder Structure Standard

> **One feature. One repo. One structure. No guessing.**
>
> A developer opening this codebase for the first time should know where everything goes
> by reading folder names alone. If you need to read a doc to find a file, the structure failed.

---

## The Tree

```
feature-name/
│
├── .ai/                              ← AI context (agents read this first)
│   ├── llms.txt                      ← project map for AI agents
│   └── CONVENTIONS.md                ← quick-reference rules card
│
├── src/
│   │
│   ├── app/                          ← feature entry point & orchestration
│   │   ├── feature-flow.component.js ← class definition (no side-effects)
│   │   ├── feature-flow.js           ← registration entry point (customElements.define)
│   │   ├── feature-flow.styles.js    ← flow-level layout styles
│   │   ├── feature-flow.test.js      ← integration tests
│   │   ├── flow-config.js            ← router JSON config (screens, conditions, transitions)
│   │   ├── registry.js               ← central component registry + dev-mode validation
│   │   └── types.ts                  ← flow-level type definitions (TS interfaces, consumed via JSDoc)
│   │
│   ├── screens/                      ← one folder per screen/step in the flow
│   │   └── select-reason/
│   │       ├── select-reason.component.js  ← class definition (state & logic only)
│   │       ├── select-reason.template.js   ← lit-html template separate from logic
│   │       ├── select-reason.js            ← registration entry point
│   │       ├── select-reason.styles.js
│   │       ├── select-reason.test.js
│   │       ├── types.ts                    ← screen-specific type definitions
│   │       ├── fixtures/                   ← mock data (shared by tests AND stories)
│   │       │   ├── default.js
│   │       │   ├── error.js
│   │       │   └── empty.js
│   │       └── components/                 ← sub-components PRIVATE to this screen
│   │           └── reason-card/
│   │               ├── reason-card.component.js
│   │               ├── reason-card.template.js
│   │               ├── reason-card.js
│   │               ├── reason-card.styles.js
│   │               ├── reason-card.test.js
│   │               └── fixtures/           ← component-level fixtures (if 2+ states)
│   │                   └── default.js
│   │
│   ├── shared/                       ← components used by 2+ screens (team contract)
│   │   └── result-banner/
│   │       ├── result-banner.component.js
│   │       ├── result-banner.js
│   │       ├── result-banner.styles.js
│   │       ├── result-banner.test.js
│   │       ├── types.ts
│   │       └── fixtures/             ← component-level fixtures
│   │           ├── success.js
│   │           └── warning.js
│   │
│   ├── services/                     ← all API communication lives here
│   │   ├── feature-api.js            ← API client (uses the intercepted ajax layer)
│   │   ├── feature-api.test.js
│   │   └── types.ts                  ← request/response shapes, API contracts
│   │
│   ├── bridge/                       ← native app ↔ webview communication
│   │   ├── native-args.js            ← parse & validate args received from native layer
│   │   ├── native-events.js          ← events sent back to the native app
│   │   ├── native-args.test.js
│   │   └── types.ts                  ← NativeArgs, NativeEvent type definitions
│   │
│   ├── translations/                 ← i18n — all user-facing strings
│   │   ├── en.js                     ← English (default / fallback)
│   │   ├── nl.js                     ← Dutch
│   │   ├── index.js                  ← locale resolver + interpolate utility
│   │   └── translations.test.js      ← locale fallback + interpolation tests
│   │
│   └── tokens/                       ← design tokens (CSS custom properties)
│       ├── colors.styles.js
│       ├── spacing.styles.js
│       ├── typography.styles.js
│       └── index.js                  ← barrel re-export
│
├── stories/                          ← Storybook (separate from src — it's docs, not product code)
│   ├── introduction.mdx              ← feature overview, audience navigation table
│   ├── flows/
│   │   ├── overview.mdx              ← scenario coverage table
│   │   └── flows.stories.js          ← full end-to-end scenario stories
│   └── screens/
│       └── select-reason/
│           └── select-reason.stories.js
│
├── mocks/                            ← MSW mock service worker handlers
│   ├── handlers.js                   ← request handlers for local dev & storybook
│   └── server.js                     ← mock server setup
│
├── package.json
├── README.md                         ← quick start: install, run, test, deploy
├── ARCHITECTURE.md                   ← THIS FILE — you are here
└── CHANGELOG.md                      ← what changed, when, why
```

---

## Why This Shape

### 1. Folder names are the documentation

| Folder | A developer immediately knows... |
|---|---|
| `src/app/` | "This is the entry point. The flow starts here." |
| `src/screens/` | "Each folder = one screen. I'm working on `confirm`? I go to `screens/confirm/`." |
| `src/shared/` | "These components are reused. Changing them affects multiple screens." |
| `src/services/` | "All API calls. If I need to add an endpoint, it goes here." |
| `src/bridge/` | "Native app communication. Args in, events out." |
| `src/translations/` | "All user-facing text. One file per locale." |
| `src/tokens/` | "Design tokens. Colors, spacing, typography." |
| `stories/` | "Storybook. Not product code." |
| `mocks/` | "Mock API handlers. For local dev and storybook." |
| `.ai/` | "Context for AI agents. Humans can ignore this." |

### 2. Co-location over centralization

Everything a file needs is **next to it**, not in a distant folder:

```
screens/select-reason/
├── select-reason.component.js  ← the class (no side-effects)
├── select-reason.js            ← registration (customElements.define)
├── select-reason.styles.js     ← its styles
├── select-reason.test.js       ← its tests
├── types.ts                    ← its types (TS interfaces, consumed via JSDoc)
├── fixtures/                   ← its mock data
└── components/                 ← its private sub-components
```

**Delete the folder → nothing outside it breaks.**

### 3. JS code + TS types (the Lion pattern)

All logic, styles, tests, fixtures, and stories are written in **JavaScript** (`.js`).
Type definitions live in **TypeScript** files (`types.ts`) using proper `interface`/`type` syntax.
JS files consume these types via JSDoc:

```js
// In a .js file:
/** @type {import('./types').SelectReasonData} */
this.data = null;
```

**Why:** No build step required for consuming types. TypeScript gives you IDE autocomplete, hover documentation, and compile-time checks without converting your entire codebase to TS.

### 4. Registration split (Shoelace pattern)

Every component has two files:

| File | Purpose | Side effects? |
|---|---|---|
| `[name].component.js` | Class definition (state, lifecycle, handlers) | ❌ None — safe to import |
| `[name].template.js` | Contains the `lit-html` template function | ❌ None |
| `[name].js` | Calls `customElements.define()` | ✅ Yes — registers the element |

**Why:** Importing the class for testing or type-checking doesn't pollute the global custom element registry. Registration is explicit and guarded against double-registration.

### 5. The registry.js — central validation

`src/app/registry.js` is the single source of truth for which components this feature uses. It provides:

- `registerAll()` — registers every component, guarded against duplicates
- `validateRegistry()` — DEV ONLY — logs errors for any component that failed to register

### 6. The services/ exception

Services are the **one** centralized layer. Why:

- Multiple screens call the same API
- The intercepted ajax wrapper is configured once
- API contracts (request/response types) are a shared concern between FE and BE
- Having `feature-api.js` in one place makes it trivial for backend to review

### 7. The translations/ exception

Also centralized. Why:

- Every screen consumes translations, none produces them
- One file per locale keeps translation diffs clean and reviewable
- Keys are namespaced by screen (`selectReason.title`, `confirm.warning`)
- The `common.*` namespace holds shared strings (buttons, generic errors)
- Locale is resolved once at the flow level (from native args) and passed down

---

## File Naming Rules

| Rule | Example | Why |
|---|---|---|
| **kebab-case everything** | `select-reason.js`, not `SelectReason.js` | Filesystem consistency |
| **Suffix = purpose** | `.styles.js`, `.test.js`, `.stories.js` | Instant visual scanning |
| **Component = folder name** | `select-reason/select-reason.js` | Predictable import paths |
| **Types = `types.ts`** | Always `types.ts`, never `models.ts` | One convention, zero decisions |
| **Fixtures = state name** | `default.js`, `error.js`, `empty.js` | Matches the Storybook state matrix |

### Suffixes

| Suffix | Contains |
|---|---|
| `.component.js` | Class definition logic (no `html\`` blocks, no registration) |
| `.template.js` | The `html\`` template block as an exported function |
| `.js` | Registration entry point OR standalone module |
| `.styles.js` | `export const xxxStyles = [tokens, css\`...\`]` |
| `.test.js` | Unit/integration tests |
| `.stories.js` | Storybook story definitions |
| `.mdx` | Storybook documentation pages |
| `types.ts` | TypeScript interfaces/types (consumed via JSDoc in `.js` files) |

---

## Layer Responsibilities

```
┌─────────────────────────────────────────────────┐
│                  NATIVE APP                      │
│         (sends args, intercepts requests)        │
└──────────────────────┬──────────────────────────┘
                       │ args + session
                       ▼
┌─────────────────────────────────────────────────┐
│              bridge/                             │
│   Parses native args, emits native events        │
└──────────────────────┬──────────────────────────┘
                       │ typed args
                       ▼
┌─────────────────────────────────────────────────┐
│              app/feature-flow                    │
│   Orchestrates screens via router config         │
│   Owns flow state, transition logic              │
│   registry.js registers all components           │
└───────┬─────────────┬───────────────────────────┘
        │             │
        ▼             ▼
┌──────────────┐ ┌──────────────┐ ┌────────────────┐
│  screens/*   │ │  services/   │ │ translations/  │
│  UI + local  │ │  API calls   │ │  i18n strings  │
│  state only  │ │  via ajax    │ │  per locale    │
└──────┬───────┘ └──────────────┘ └────────────────┘
       │
       ▼
┌──────────────┐ ┌──────────────┐
│  shared/*    │ │  tokens/     │
│  reusable    │ │  design      │
│  components  │ │  tokens      │
└──────────────┘ └──────────────┘
```

**Data flows DOWN. Events flow UP.** Screens never import from other screens. Screens never call APIs directly.

---

## Decision Trees

### "Where does this component go?"

```
Is this component used in 2+ screens?
├── YES → src/shared/[component-name]/
│         - Gets its own Storybook entry
│         - Breaking changes need review
│
└── NO  → screens/[screen-name]/components/[component-name]/
           - No Storybook entry needed
           - Can be refactored/deleted freely
```

### "Where does this type go?"

```
Who produces this type?
├── The flow (ErrorContext, FlowState)
│   → src/app/types.ts
│
├── A screen (screen-specific prop shape)
│   → src/screens/[screen]/types.ts
│
├── A shared component
│   → src/shared/[component]/types.ts
│
├── The API (request/response shapes)
│   → src/services/types.ts
│
└── The native bridge (NativeArgs, NativeEvent)
    → src/bridge/types.ts
```

### "Does this component need fixtures?"

```
Does this component have 2+ meaningful data states?
├── YES → Create a fixtures/ folder next to the component
│         - Fixture files match state names
│         - Shared by tests AND Storybook stories
│
└── NO  → No fixtures needed
           - Pass data directly in tests/stories
```

### "Where does this style go?"

```
What scope does this style affect?
├── The whole feature (design tokens)
│   → src/tokens/*.styles.js
│
├── One screen
│   → src/screens/[screen]/[screen].styles.js
│
├── One shared component
│   → src/shared/[component]/[component].styles.js
│
└── A private sub-component
    → src/screens/[screen]/components/[name]/[name].styles.js
```

---

## Component Anatomy

Every component folder follows this structure:

```
[name]/
├── [name].component.js    ← class definition (state & logic only)
├── [name].template.js     ← html template function
├── [name].js              ← registration entry point (customElements.define)
├── [name].styles.js       ← styles
├── [name].test.js         ← tests
├── types.ts               ← TS interfaces (consumed via JSDoc, optional)
├── fixtures/              ← mock data (if 2+ meaningful states)
│   └── *.js
└── components/            ← private sub-components (if needed)
```

> **Template separation:** YES. Since screen templates become massive chunks of `lit-html`, they are separated into a `.template.js` file. The template function receives the component instance (`this`) as its argument.

---

## Fixture Convention

Fixtures are **shared between tests and Storybook**. They live next to the component that consumes them — at any level (screen, shared, or private sub-component).

```js
// src/screens/select-reason/fixtures/default.js

/** @type {import('../types').SelectReasonData} */
export const selectReasonDefault = {
  reasons: [
    { id: 'no-longer-needed', label: 'I no longer need this account' },
    { id: 'switching-bank', label: 'I am switching to another bank' },
  ],
  accountType: 'savings',
};
```

Every fixture file:
1. Uses JSDoc to reference the TS type for autocomplete
2. Comments the endpoint and a one-line description
3. Exports a single named const (not default)
4. Uses realistic data, never `"test123"` or `"Lorem ipsum"`
5. Filename matches the state name: `default.js` → Default story

---

## AI Integration — The `.ai/` Directory

```
.ai/
├── llms.txt            ← project overview for AI agents
└── CONVENTIONS.md      ← condensed rules card
```

AI agents load this before touching any file. It provides:
- **Read-first context** — agents understand the architecture
- **Convention enforcement** — tells the agent "we use `.styles.js` not inline CSS"
- **Pattern matching** — consistent naming means the agent infers patterns from 1-2 examples

---

## Appendix: Mental Model

```
"I need to..."                         → "I go to..."

  add a new screen                     → src/screens/[new-screen]/
  fix a bug on the confirm screen      → src/screens/confirm/
  add a new API call                   → src/services/feature-api.js
  change how we parse native args      → src/bridge/native-args.js
  add a reusable component             → src/shared/[component]/
  write a storybook story              → stories/screens/[screen]/
  update the flow transitions          → src/app/flow-config.js
  add a new design token               → src/tokens/
  add/update a translation             → src/translations/[locale].js
  add a new locale                     → create src/translations/[locale].js + register in index.js
  register a new component             → src/app/registry.js
  add/change a type definition         → [nearest folder]/types.ts
  mock an API for local dev            → mocks/handlers.js
  understand the feature overview      → stories/introduction.mdx
  see what scenarios are covered       → stories/flows/overview.mdx
```
