import { expect } from 'chai';
import { elementaryRectangle as rectangle } from '../src';

describe('elementary rectangle', () => {
  describe('height: 5', () => {
    describe('rule: 110', () => {
      it('should exhibit rule 110 behavior', () => {
        expect(rectangle({
          height: 5,
          rule: 110,
          seed: [1, 1, 0, 1, 0, 0, 1, 0],
        })).to.have.deep.ordered.members([
          [1, 1, 0, 1, 0, 0, 1, 0],
          [1, 1, 1, 1, 0, 1, 1, 0],
          [1, 0, 0, 1, 1, 1, 1, 0],
          [1, 0, 1, 1, 0, 0, 1, 0],
          [1, 1, 1, 1, 0, 1, 1, 0],
        ]);
      });
    });
  });
});
