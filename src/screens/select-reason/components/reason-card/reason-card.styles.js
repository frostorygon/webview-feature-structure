import { css } from 'lit';
import { colorTokens, spacingTokens } from '../../../../tokens/index.js';

export const reasonCardStyles = [
  colorTokens,
  spacingTokens,
  css`
    .card {
      display: block;
      width: 100%;
      padding: var(--spacing-md);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      background: var(--color-surface);
      cursor: pointer;
      text-align: left;
      font: inherit;
    }
    .card:hover:not(:disabled) {
      background: var(--color-surface-elevated);
    }
    :host([is-selected]) .card {
      border-color: var(--color-primary);
      background: var(--color-surface-elevated);
    }
    :host([is-disabled]) .card {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
];
