import { expect } from 'chai';
import rules from '../src';

describe('rules', () => {
  it('should return the debug object', () => {
    expect(rules()).to.include({ rules: true });
  });
});
