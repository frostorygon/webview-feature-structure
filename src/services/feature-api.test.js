import { expect } from '@open-wc/testing';
import { getClosureReasons, submitClosure } from './feature-api.js';

describe('Feature API', () => {
  it('getClosureReasons is a function', () => {
    expect(getClosureReasons).to.be.a('function');
  });
  it('submitClosure is a function', () => {
    expect(submitClosure).to.be.a('function');
  });
});
