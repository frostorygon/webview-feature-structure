// @ts-check
import { html } from 'lit';

/**
 * @param {import('./feature-flow.component.js').FeatureFlow} context
 */
export function featureFlowTemplate(context) {
  return html`
    <!-- Your proprietary router component goes here -->
    <!-- <acme-router .config=${context.flowConfig} .args=${context.nativeArgs}></acme-router> -->
    <slot></slot>
  `;
}
