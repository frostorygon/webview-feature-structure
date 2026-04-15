// @ts-check
import { LitElement } from 'lit';
import { selectReasonStyles } from './select-reason.styles.js';
import { selectReasonTemplate } from './select-reason.template.js';
import { getCommonTranslations } from '../../translations/index.js';
import { selectReason as selectReasonEn } from './translations/en.js';
import { selectReason as selectReasonNl } from './translations/nl.js';

/** @type {Record<string, typeof selectReasonEn>} */
const screenLocales = { en: selectReasonEn, nl: selectReasonNl };

/**
 * Select Reason Screen
 *
 * @element feature-select-reason
 * @fires reason-selected - When user picks a reason
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
      locale: { type: String },
    };
  }

  constructor() {
    super();
    /** @type {import('./types').SelectReasonData | null} */
    this.data = null;
    this.isLoading = false;
    this.hasError = false;
    this.locale = 'en';
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
    // Merge common + screen-specific translations
    const common = getCommonTranslations(this.locale);
    const screen = screenLocales[this.locale] || screenLocales.en;
    const t = { ...common, selectReason: screen };

    return selectReasonTemplate({
      t,
      reasons: this.data?.reasons ?? [],
      isLoading: this.isLoading,
      hasError: this.hasError,
      onReasonSelected: (e) => this._onReasonSelected(e.detail.reasonId),
    });
  }
}
