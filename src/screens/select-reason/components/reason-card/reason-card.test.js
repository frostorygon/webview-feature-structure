import { expect, fixture, html } from '@open-wc/testing';
import { reasonCardDefault } from './fixtures/default.js';
import './reason-card.js';

describe('ReasonCard', () => {
  it('renders default state', async () => {
    const el = await fixture(
      html`<reason-card .reasonId=${reasonCardDefault.reasonId} .label=${reasonCardDefault.label}></reason-card>`,
    );
    expect(el.shadowRoot.querySelector('.card')).to.exist;
  });

  it('emits reason-clicked on click', async () => {
    const el = await fixture(
      html`<reason-card .reasonId=${'fees'} .label=${'Too expensive'}></reason-card>`,
    );
    let detail = null;
    el.addEventListener('reason-clicked', (e) => { detail = e.detail; });
    el.shadowRoot.querySelector('button').click();
    expect(detail).to.deep.equal({ reasonId: 'fees' });
  });

  it('does not emit when disabled', async () => {
    const el = await fixture(
      html`<reason-card .reasonId=${'fees'} .label=${'Too expensive'} .isDisabled=${true}></reason-card>`,
    );
    let clicked = false;
    el.addEventListener('reason-clicked', () => { clicked = true; });
    el.shadowRoot.querySelector('button').click();
    expect(clicked).to.be.false;
  });
});
