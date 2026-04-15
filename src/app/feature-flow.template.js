// @ts-check
import { html } from 'lit';

/**
 * @param {object} props
 * @param {object} props.t - Merged translations (common + flow)
 */
export const featureFlowTemplate = ({ t }) => {
  return html`
    <!-- Your proprietary router component goes here -->
    <!-- <acme-router .config=${...} .args=${...}></acme-router> -->
    <slot></slot>
  `;
};
