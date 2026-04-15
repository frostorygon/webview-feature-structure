import { css } from 'lit';
import { colorTokens, spacingTokens } from '../../tokens/index.js';

export const resultBannerStyles = [
  colorTokens,
  spacingTokens,
  css`
    .banner { padding: var(--spacing-lg); border-radius: 8px; text-align: center; }
    .banner.success { background: var(--color-success); color: white; }
    .banner.error   { background: var(--color-error);   color: white; }
    .banner.warning { background: var(--color-warning); color: var(--color-text-primary); }
    h2 { margin: 0 0 var(--spacing-sm); }
    p  { margin: 0; }
  `,
];
