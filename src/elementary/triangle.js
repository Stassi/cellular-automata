import { pipe } from 'ramda';
import elementaryRule from './rule';

const toElementaryRule = ({ rule, ...props }) => ({
  ...props,
  elementaryRule: elementaryRule(rule),
});

const triangle = pipe(
  toElementaryRule,
  () => ([
    [0],
    [1, 1, 1],
    [1, 1, 0, 0, 1],
  ]),
);

export default triangle;
