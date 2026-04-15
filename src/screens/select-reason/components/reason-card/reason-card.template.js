// @ts-check
import { html } from 'lit';

/**
 * @param {import('./reason-card.component.js').ReasonCard} context
 */
export function reasonCardTemplate(context) {
  return html`
    <button
      class="card"
      ?disabled=${context.isDisabled}
      aria-pressed=${context.isSelected}
      @click=${context._onClick}
    >
      ${context.label}
    </button>
  `;
}
