import { expect } from 'chai';
import { elementaryTriangle as triangle } from '../src';

describe('elementary triangle', () => {
  describe('height: 4', () => {
    const height = 4;

    describe('deterministic', () => {
      describe('seed: 0', () => {
        const seed = [0];

        describe('rule: 195', () => {
          it('should exhibit rule 195 behavior', () => {
            expect(triangle({
              height,
              seed,
              rule: 195,
            })).to.have.deep.ordered.members([
              [0],
              [1, 1, 1],
              [1, 0, 1, 1, 0],
              [1, 0, 0, 0, 1, 0, 1],
            ]);
          });
        });
      });

      describe('seed: 1', () => {
        const seed = [1];

        describe('rule: 30', () => {
          it('should exhibit rule 30 behavior', () => {
            expect(triangle({
              height,
              seed,
              rule: 30,
            })).to.have.deep.ordered.members([
              [1],
              [1, 1, 1],
              [1, 1, 0, 0, 1],
              [1, 1, 0, 1, 1, 1, 1],
            ]);
          });
        });

        describe('rule: 90', () => {
          it('should exhibit rule 90 behavior', () => {
            expect(triangle({
              height,
              seed,
              rule: 90,
            })).to.have.deep.ordered.members([
              [1],
              [1, 0, 1],
              [1, 0, 0, 0, 1],
              [1, 0, 1, 0, 1, 0, 1],
            ]);
          });
        });

        describe('rule: 110', () => {
          it('should exhibit rule 110 behavior', () => {
            expect(triangle({
              height,
              seed,
              rule: 110,
            })).to.have.deep.ordered.members([
              [1],
              [1, 1, 0],
              [1, 1, 1, 0, 0],
              [1, 1, 0, 1, 0, 0, 0],
            ]);
          });
        });
      });
    });

    describe('stochastic', () => {
      const seed = undefined;
      it('should have tests');
    });
  });
});
