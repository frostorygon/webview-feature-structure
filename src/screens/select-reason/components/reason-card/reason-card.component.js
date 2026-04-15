// @ts-check
import { LitElement } from 'lit';
import { reasonCardStyles } from './reason-card.styles.js';
import { reasonCardTemplate } from './reason-card.template.js';

/**
 * Reason Card — private sub-component of Select Reason screen.
 *
 * @element reason-card
 * @fires reason-clicked - When user clicks the card
 */
export class ReasonCard extends LitElement {
  static get styles() {
    return reasonCardStyles;
  }

  static get properties() {
    return {
      reasonId: { type: String },
      label: { type: String },
      isSelected: { type: Boolean, reflect: true },
      isDisabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.reasonId = '';
    this.label = '';
    this.isSelected = false;
    this.isDisabled = false;
  }

  _onClick() {
    if (this.isDisabled) return;
    this.dispatchEvent(
      new CustomEvent('reason-clicked', {
        detail: { reasonId: this.reasonId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return reasonCardTemplate(this);
  }
}
