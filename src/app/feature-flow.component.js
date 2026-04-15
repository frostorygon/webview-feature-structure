// @ts-check
import { LitElement } from 'lit';
import { featureFlowStyles } from './feature-flow.styles.js';
import { featureFlowTemplate } from './feature-flow.template.js';
import { flowConfig } from './flow-config.js';

/**
 * Feature Flow — orchestrates the screen transitions for this feature.
 *
 * This is the entry point. The native app loads this component inside the webview.
 * It receives native args, initializes the router, and manages flow-level state.
 *
 * @element feature-flow
 */
export class FeatureFlow extends LitElement {
  static get styles() {
    return featureFlowStyles;
  }

  static get properties() {
    return {
      /** @type {import('../bridge/types.js').NativeArgs} */
      nativeArgs: { type: Object },
    };
  }

  constructor() {
    super();
    /** @type {import('../bridge/types.js').NativeArgs} */
    this.nativeArgs = /** @type {*} */ ({});
  }

  render() {
    return featureFlowTemplate(this);
  }
}

