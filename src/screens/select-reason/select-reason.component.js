// @ts-check
import { LitElement } from 'lit';
import { selectReasonStyles } from './select-reason.styles.js';
import { selectReasonTemplate } from './select-reason.template.js';

/**
 * Select Reason Screen
 *
 * @element feature-select-reason
 * @fires reason-selected - When user picks a reason
 * @fires screen-error - When something goes wrong
 */
export class SelectReasonScreen extends LitElement {
  static get styles() {
    return selectReasonStyles;
  }

  static get properties() {
    return {
      data: { type: Object },
      isLoading: { type: Boolean, reflect: true },
      hasError: { type: Boolean },
    };
  }

  constructor() {
    super();
    /** @type {import('./types').SelectReasonData | null} */
    this.data = null;
    this.isLoading = false;
    this.hasError = false;
  }

  /** @param {string} reasonId */
  _onReasonSelected(reasonId) {
    this.dispatchEvent(
      new CustomEvent('reason-selected', {
        detail: { reasonId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return selectReasonTemplate(this);
  }
}
