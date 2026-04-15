import { expect } from '@open-wc/testing';
import { parseNativeArgs } from './native-args.js';

describe('parseNativeArgs', () => {
  it('parses valid args', () => {
    const result = parseNativeArgs({ accountId: 'ACC-123', accountHolder: 'Jan de Vries' });
    expect(result.accountId).to.equal('ACC-123');
    expect(result.locale).to.equal('en');
  });

  it('throws on missing accountId', () => {
    expect(() => parseNativeArgs({ accountHolder: 'Jan' })).to.throw('Missing required native arg: accountId');
  });

  it('uses provided locale', () => {
    const result = parseNativeArgs({ accountId: 'ACC-123', accountHolder: 'Jan', locale: 'nl' });
    expect(result.locale).to.equal('nl');
  });
});
