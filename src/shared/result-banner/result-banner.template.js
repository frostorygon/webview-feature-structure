// @ts-check
import { html } from 'lit';

/**
 * @param {import('./result-banner.component.js').ResultBanner} context
 */
export function resultBannerTemplate(context) {
  return html`
    <div class="banner ${context.variant}">
      <h2>${context.title}</h2>
      <p>${context.message}</p>
    </div>
  `;
}
