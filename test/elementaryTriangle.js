import { expect } from 'chai';
import { elementaryTriangle as triangle } from '../src';

describe('elementary triangle', () => {
  describe('rule: 30', () => {
    describe('height: 5', () => {
      it('should exhibit rule 30 behavior', () => {
        expect(triangle({
          height: 5,
          outerState: 0,
          rule: 30,
          seed: [1],
        })).to.have.deep.ordered.members([
          [1],
          [1, 1, 1],
          [1, 1, 0, 0, 1],
          [1, 1, 0, 1, 1, 1, 1],
          [1, 1, 0, 0, 1, 0, 0, 0, 1],
        ]);
      });
    });
  });
});
