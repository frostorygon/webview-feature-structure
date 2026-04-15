import { ResultBanner } from './result-banner.component.js';

if (!customElements.get('result-banner')) {
  customElements.define('result-banner', ResultBanner);
}

export { ResultBanner };
