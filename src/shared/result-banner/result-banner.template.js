// @ts-check
import { html } from 'lit';

/**
 * @param {object} props
 * @param {'success'|'error'|'warning'} props.variant
 * @param {string} props.title
 * @param {string} props.message
 */
export const resultBannerTemplate = ({ variant, title, message }) => {
  return html`
    <div class="banner ${variant}">
      <h2>${title}</h2>
      <p>${message}</p>
    </div>
  `;
};
