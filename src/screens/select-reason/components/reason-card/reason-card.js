import { ReasonCard } from './reason-card.component.js';

if (!customElements.get('reason-card')) {
  customElements.define('reason-card', ReasonCard);
}

export { ReasonCard };
