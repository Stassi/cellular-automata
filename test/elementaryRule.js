import { expect } from 'chai';
import { elementaryRule as rule } from '../src';

describe('elementary rule', () => {
  describe('-10', () => {
    it('should include the valid, next-highest rule (0)', () => {
      expect(rule(-10)).to.include({
        '000': 0,
        '001': 0,
        '010': 0,
        '011': 0,
        '100': 0,
        '101': 0,
        '110': 0,
        '111': 0,
      });
    });
  });

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

  describe('300', () => {
    it('should include the valid, next-lowest rule (255)', () => {
      expect(rule(300)).to.include({
        '000': 1,
        '001': 1,
        '010': 1,
        '011': 1,
        '100': 1,
        '101': 1,
        '110': 1,
        '111': 1,
      });
    });
  });
});
