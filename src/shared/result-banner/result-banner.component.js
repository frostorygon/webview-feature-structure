// @ts-check
import { LitElement } from 'lit';
import { resultBannerStyles } from './result-banner.styles.js';
import { resultBannerTemplate } from './result-banner.template.js';

/**
 * Result Banner — shared component used by 2+ screens.
 *
 * @element result-banner
 * @property {'success'|'error'|'warning'} variant
 */
export class ResultBanner extends LitElement {
  static get styles() {
    return resultBannerStyles;
  }

  static get properties() {
    return {
      variant: { type: String, reflect: true },
      title: { type: String },
      message: { type: String },
    };
  }

  constructor() {
    super();
    /** @type {import('./types').ResultBannerVariant} */
    this.variant = 'success';
    this.title = '';
    this.message = '';
  }

  render() {
    return resultBannerTemplate(this);
  }
}
