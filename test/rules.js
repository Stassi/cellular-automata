import { expect } from 'chai';
import rule from '../src';

describe('rule', () => {
  describe('30', () => {
    it('should include the rules', () => {
      expect(rule(30)).to.include({
        '000': 0,
        '001': 1,
        '010': 1,
        '011': 1,
        '100': 1,
        '101': 0,
        '110': 0,
        '111': 0,
      });
    });
  });

  describe('110', () => {
    it('should include the rules', () => {
      expect(rule(110)).to.include({
        '000': 0,
        '001': 1,
        '010': 1,
        '011': 1,
        '100': 0,
        '101': 1,
        '110': 1,
        '111': 0,
      });
    });
  });
});
