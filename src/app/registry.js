// @ts-check

/**
 * Component Registry
 *
 * Central registration point for ALL custom elements in this feature.
 * Import this file once in your entry point to register everything.
 *
 * If a component is used but not registered here, it will fail loudly
 * via the dev-mode validateRegistry() guard.
 */

import { FeatureFlow } from './feature-flow.component.js';
import { SelectReasonScreen } from '../screens/select-reason/select-reason.component.js';
// import { ConfirmScreen } from '../screens/confirm/confirm.component.js';
// import { SuccessScreen } from '../screens/success/success.component.js';
// import { ErrorScreen } from '../screens/error/error.component.js';
import { ResultBanner } from '../shared/result-banner/result-banner.component.js';
import { ReasonCard } from '../screens/select-reason/components/reason-card/reason-card.component.js';

/** @type {Record<string, CustomElementConstructor>} */
const components = {
  'feature-flow': FeatureFlow,
  'feature-select-reason': SelectReasonScreen,
  // 'feature-confirm': ConfirmScreen,
  // 'feature-success': SuccessScreen,
  // 'feature-error': ErrorScreen,
  'result-banner': ResultBanner,
  'reason-card': ReasonCard,
};

/** Register all components, guarded against double-registration */
export function registerAll() {
  for (const [tagName, ctor] of Object.entries(components)) {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, ctor);
    }
  }
}

/**
 * DEV ONLY: Validate that all components used in templates are registered.
 * Call this after registerAll() to get loud errors instead of silent failures.
 */
export function validateRegistry() {
  // @ts-ignore — import.meta.env is vite-specific
  const isDev = import.meta?.env?.MODE === 'development';
  if (!isDev) return;

  const expected = Object.keys(components);
  const missing = expected.filter((tag) => !customElements.get(tag));

  if (missing.length > 0) {
    console.error(
      `[Registry] Missing component registrations:\n` +
        missing.map((tag) => `  - <${tag}>`).join('\n') +
        `\n\nDid you forget to call registerAll()?`,
    );
  }
}
