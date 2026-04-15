import { expect, fixture, html } from '@open-wc/testing';
import { selectReasonDefault } from './fixtures/default.js';
import './select-reason.js';

describe('SelectReasonScreen', () => {
  it('renders in default state', async () => {
    const el = await fixture(
      html`<feature-select-reason .data=${selectReasonDefault}></feature-select-reason>`,
    );
    expect(el).to.exist;
    expect(el.shadowRoot.querySelector('.screen')).to.exist;
  });

  it('renders loading state', async () => {
    const el = await fixture(
      html`<feature-select-reason .isLoading=${true}></feature-select-reason>`,
    );
    expect(el.shadowRoot.querySelector('.loading')).to.exist;
  });

  it('renders error state', async () => {
    const el = await fixture(
      html`<feature-select-reason .hasError=${true}></feature-select-reason>`,
    );
    expect(el.shadowRoot.querySelector('.error')).to.exist;
  });
});
