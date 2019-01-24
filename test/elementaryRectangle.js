import { expect } from 'chai';
import { elementaryRectangle as rectangle } from '../src';

describe('elementary rectangle', () => {
  describe('deterministic', () => {
    const seed = [1, 0, 0, 1, 0, 0, 1, 0];

    describe('height: 5', () => {
      const height = 5;

      describe('rule: 30', () => {
        it('should exhibit rule 30 behavior', () => {
          expect(rectangle({
            height,
            seed,
            rule: 30,
          })).to.have.deep.ordered.members([
            [1, 0, 0, 1, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0, 0],
          ]);
        });
      });

      describe('rule: 90', () => {
        it('should exhibit rule 90 behavior', () => {
          expect(rectangle({
            height,
            seed,
            rule: 90,
          })).to.have.deep.ordered.members([
            [1, 0, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 1, 1],
          ]);
        });
      });

      describe('rule: 110', () => {
        it('should exhibit rule 110 behavior', () => {
          expect(rectangle({
            height,
            seed,
            rule: 110,
          })).to.have.deep.ordered.members([
            [1, 0, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 1, 1, 0],
          ]);
        });
      });
    });
  });
});
