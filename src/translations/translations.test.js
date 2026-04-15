import { expect } from '@open-wc/testing';
import { getCommonTranslations, interpolate } from './index.js';

describe('Translations', () => {
  it('returns English common translations by default', () => {
    const t = getCommonTranslations();
    expect(t.common.loading).to.equal('Loading...');
  });

  it('returns Dutch common when requested', () => {
    const t = getCommonTranslations('nl');
    expect(t.common.loading).to.equal('Laden...');
  });

  it('falls back to English for unknown locale', () => {
    const t = getCommonTranslations('xx');
    expect(t.common.loading).to.equal('Loading...');
  });

  it('interpolates variables', () => {
    expect(interpolate('Hello {name}', { name: 'Jan' })).to.equal('Hello Jan');
  });

  it('preserves placeholders for missing data', () => {
    expect(interpolate('Hello {name}', {})).to.equal('Hello {name}');
  });
});
