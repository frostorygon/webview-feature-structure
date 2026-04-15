/**
 * Registration entry point for <feature-flow>.
 *
 * Import this file when you need the component available in the DOM.
 * Import feature-flow.component.js directly when you only need the class (tests, type-checking).
 */
import { FeatureFlow } from './feature-flow.component.js';

if (!customElements.get('feature-flow')) {
  customElements.define('feature-flow', FeatureFlow);
}

export { FeatureFlow };
