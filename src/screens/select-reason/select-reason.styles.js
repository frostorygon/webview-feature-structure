import { css } from 'lit';
import { colorTokens, spacingTokens } from '../../tokens/index.js';

export const selectReasonStyles = [
  colorTokens,
  spacingTokens,
  css`
    :host {
      display: block;
      padding: var(--spacing-lg);
    }
    .screen {
      max-width: 480px;
      margin: 0 auto;
    }
    .loading,
    .error {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }
  `,
];
