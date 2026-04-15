import { expect, fixture, html } from '@open-wc/testing';
import { bannerSuccess, bannerError } from './fixtures/success.js';
import './result-banner.js';

describe('ResultBanner', () => {
  it('renders success variant', async () => {
    const el = await fixture(
      html`<result-banner variant="success" title=${bannerSuccess.title} message=${bannerSuccess.message}></result-banner>`,
    );
    expect(el.shadowRoot.querySelector('.success')).to.exist;
  });

  it('renders error variant', async () => {
    const el = await fixture(
      html`<result-banner variant="error" title=${bannerError.title} message=${bannerError.message}></result-banner>`,
    );
    expect(el.shadowRoot.querySelector('.error')).to.exist;
  });
});
