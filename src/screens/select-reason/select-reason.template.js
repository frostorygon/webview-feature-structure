// @ts-check
import { html } from 'lit';

/**
 * @param {import('./select-reason.component.js').SelectReasonScreen} context
 */
export function selectReasonTemplate(context) {
  if (context.isLoading) return html`<div class="loading">Loading...</div>`;
  if (context.hasError) return html`<div class="error">Something went wrong</div>`;
  
  return html`
    <div class="screen">
      <h1>Select a reason</h1>
      <!-- Render reasons from context.data -->
    </div>
  `;
}
