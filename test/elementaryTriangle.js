import { expect } from 'chai';
import { elementaryTriangle as triangle } from '../src';

describe('elementary triangle', () => {
  describe('rule: 30', () => {
    describe('height: 3', () => {
      // TODO: Rename
      it('should return 3 rows', () => {
        expect(triangle({
          height: 3,
          outerState: 0,
          rule: 30,
          seed: [1],
        })).to.have.deep.ordered.members([
          [1],
          [1, 1, 1],
          [1, 1, 0, 0, 1],
        ]);
      });
    });
  });
});
