import { expect, fixture, html } from '@open-wc/testing';
import './feature-flow.js';

describe('FeatureFlow', () => {
  it('renders without errors', async () => {
    const el = await fixture(html`<feature-flow></feature-flow>`);
    expect(el).to.exist;
  });

  it('accepts native args', async () => {
    const args = { accountId: 'ACC-123', accountHolder: 'Jan de Vries', locale: 'en' };
    const el = await fixture(html`<feature-flow .nativeArgs=${args}></feature-flow>`);
    expect(el.nativeArgs).to.deep.equal(args);
  });
});
