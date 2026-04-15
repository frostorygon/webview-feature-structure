import { expect } from '@open-wc/testing';
import { getTranslations, interpolate } from './index.js';

describe('Translations', () => {
  it('returns English by default', () => {
    expect(getTranslations().selectReason.title).to.equal('Select a reason');
  });

  it('returns Dutch when requested', () => {
    expect(getTranslations('nl').selectReason.title).to.equal('Selecteer een reden');
  });

  it('falls back to English for unknown locale', () => {
    expect(getTranslations('xx').common.loading).to.equal('Loading...');
  });

  it('interpolates variables', () => {
    expect(interpolate('Hello {name}', { name: 'Jan' })).to.equal('Hello Jan');
  });

  it('preserves placeholders for missing data', () => {
    expect(interpolate('Hello {name}', {})).to.equal('Hello {name}');
  });
});
