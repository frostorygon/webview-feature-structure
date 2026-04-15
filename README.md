# Feature Name

> One-line description of what this feature does for the customer.

## Quick Start

```bash
npm install
npm run dev        # local dev server
npm run storybook  # open storybook
npm run test       # run unit tests
npm run lint       # lint check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full folder structure standard, decision trees, and conventions.

## Native Args

This feature receives the following arguments from the native app:

| Arg | Type | Required | Description |
|---|---|---|---|
| `accountId` | `string` | ✅ | The account this feature operates on |
| `accountHolder` | `string` | ✅ | Customer display name |
| `locale` | `string` | ❌ | User locale (default: `en`) |

## Storybook

The Storybook is organized into:

- **Flows/** — end-to-end scenarios (Product Owners start here)
- **Screens/** — individual screens with all states (Frontend/Backend start here)
- **Shared/** — reusable components within this feature

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/v1/accounts/{id}/closure-reasons` | GET | Fetch closure reasons |
| `/api/v1/accounts/close` | POST | Submit closure request |
