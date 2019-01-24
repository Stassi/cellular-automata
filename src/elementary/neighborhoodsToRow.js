import {
  join,
  map,
  pipe,
} from 'ramda';
import ruleConfiguration from './ruleConfiguration';

const neighborhoodsToRow = pipe(
  ruleConfiguration,
  configuration => map(
    pipe(
      join(''),
      neighborhood => configuration[neighborhood],
    ),
  ),
);

export default neighborhoodsToRow;
