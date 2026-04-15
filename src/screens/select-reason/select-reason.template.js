// @ts-check
import { html } from 'lit';

/**
 * Pure template function for the Select Reason screen.
 *
 * Every dependency is in the function signature — no hidden imports,
 * no reaching into `this`. Testable with a plain object.
 *
 * @param {object} props
 * @param {object} props.t - Merged translations (common + selectReason)
 * @param {Array<{id: string, label: string}>} props.reasons
 * @param {boolean} props.isLoading
 * @param {boolean} props.hasError
 * @param {function} props.onReasonSelected
 */
export const selectReasonTemplate = ({ t, reasons, isLoading, hasError, onReasonSelected }) => {
  if (isLoading) {
    return html`<div class="loading">${t.common.loading}</div>`;
  }

  if (hasError) {
    return html`
      <div class="error">
        <h2>${t.common.errorGenericTitle}</h2>
        <p>${t.common.errorGenericMessage}</p>
      </div>
    `;
  }

  if (reasons.length === 0) {
    return html`<div class="empty">${t.selectReason.emptyState}</div>`;
  }

  return html`
    <div class="screen">
      <h1>${t.selectReason.title}</h1>
      <p>${t.selectReason.subtitle}</p>
      <div class="reasons-list">
        ${reasons.map(
          (reason) => html`
            <reason-card
              .reasonId=${reason.id}
              .label=${reason.label}
              @reason-clicked=${onReasonSelected}
            ></reason-card>
          `,
        )}
      </div>
    </div>
  `;
};
