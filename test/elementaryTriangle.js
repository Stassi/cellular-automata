import { expect } from 'chai';
import { elementaryTriangle as triangle } from '../src';

describe('elementary triangle', () => {
  describe('height: 5', () => {
    const height = 5;

    describe('rule: 30', () => {
      it('should exhibit rule 30 behavior', () => {
        expect(triangle({
          height,
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

    describe('rule: 90', () => {
      it('should exhibit rule 90 behavior', () => {
        expect(triangle({
          height,
          outerState: 0,
          rule: 90,
          seed: [1],
        })).to.have.deep.ordered.members([
          [1],
          [1, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 1, 0, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 1],
        ]);
      });
    });

    describe('rule: 110', () => {
      it('should exhibit rule 110 behavior', () => {
        expect(triangle({
          height,
          outerState: 0,
          rule: 110,
          seed: [1],
        })).to.have.deep.ordered.members([
          [1],
          [1, 1, 0],
          [1, 1, 1, 0, 0],
          [1, 1, 0, 1, 0, 0, 0],
          [1, 1, 1, 1, 1, 0, 0, 0, 0],
        ]);
      });
    });
  });
});
