import { SelectReasonScreen } from './select-reason.component.js';

if (!customElements.get('feature-select-reason')) {
  customElements.define('feature-select-reason', SelectReasonScreen);
}

export { SelectReasonScreen };
