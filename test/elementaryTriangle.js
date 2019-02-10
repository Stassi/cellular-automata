import { expect } from 'chai';
import { elementaryTriangle as triangle } from '../src';

describe('elementary triangle', () => {
  describe('height: 4', () => {
    const height = 4;

    describe('startCell: 0', () => {
      const startCell = 0;

      describe('rule: 195', () => {
        it('should exhibit rule 195 behavior', () => {
          expect(triangle({
            height,
            startCell,
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

    describe('startCell: 1', () => {
      describe('default parameter', () => {
        describe('rule: 30', () => {
          it('should exhibit rule 30 behavior', () => {
            expect(triangle({
              height,
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

      describe('explicit parameter', () => {
        const startCell = 1;

        describe('rule: 90', () => {
          it('should exhibit rule 90 behavior', () => {
            expect(triangle({
              height,
              startCell,
              rule: 90,
            })).to.have.deep.ordered.members([
              [1],
              [1, 0, 1],
              [1, 0, 0, 0, 1],
              [1, 0, 1, 0, 1, 0, 1],
            ]);
          });
        });
      });
    });
  });
});
