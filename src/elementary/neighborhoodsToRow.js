import {
  join,
  map,
  pipe,
} from 'ramda';
import elementaryRule from './rule';

const neighborhoodsToRow = pipe(
  elementaryRule,
  ruleConfiguration => map(
    pipe(
      join(''),
      neighborhood => ruleConfiguration[neighborhood],
    ),
  ),
);

export default neighborhoodsToRow;
