// @ts-check
import { html } from 'lit';

/**
 * @param {object} props
 * @param {string} props.label
 * @param {boolean} props.isSelected
 * @param {boolean} props.isDisabled
 * @param {function} props.onClickHandler
 */
export const reasonCardTemplate = ({ label, isSelected, isDisabled, onClickHandler }) => {
  return html`
    <button
      class="card"
      ?disabled=${isDisabled}
      aria-pressed=${isSelected}
      @click=${onClickHandler}
    >
      ${label}
    </button>
  `;
};
