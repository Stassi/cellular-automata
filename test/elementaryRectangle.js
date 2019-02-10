import { expect } from 'chai';
import { elementaryRectangle as rectangle } from '../src';

describe('elementary rectangle', () => {
  const startRow = [1, 0, 0, 1, 0, 0, 1, 0];

  describe('rule: 30', () => {
    const rule = 30;

    describe('square', () => {
      it('should exhibit rule 30 behavior', () => {
        expect(rectangle({ rule, startRow })).to.have.deep.ordered.members([
          [1, 0, 0, 1, 0, 0, 1, 0],
          [1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0, 0],
          [1, 0, 1, 0, 0, 0, 0, 0],
          [1, 0, 1, 1, 0, 0, 0, 0],
          [1, 0, 1, 0, 1, 0, 0, 0],
          [1, 0, 1, 0, 1, 1, 0, 0],
        ]);
      });
    });

    describe('height: 4', () => {
      const height = 4;

      describe('start row provided', () => {
        it('should exhibit rule 30 behavior', () => {
          expect(rectangle({
            height,
            rule,
            startRow,
          })).to.have.deep.ordered.members([
            [1, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
          ]);
        });
      });

      describe('seeded', () => {
        it('should exhibit deterministic rule 30 behavior', () => {
          expect(rectangle({
            height,
            rule,
            seed: 'hello.',
          })).to.have.deep.ordered.members([
            [null, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
          ]);
        });
      });

      describe('unseeded', () => {
        it('should exhibit stochastic rule 30 behavior', () => {
          expect(rectangle({ height, rule })).to.have.deep.ordered.members([
            [null, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
          ]);
        });
      });
    });
  });
});
