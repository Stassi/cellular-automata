import {
  gt,
  join,
  last,
  length,
  map,
  pipe,
  prop,
  slice,
  tail,
  until,
} from 'ramda';

const toPreviousRow = ({ generated, ...props }) => ({
  ...props,
  previousRow: last(generated),
});

const toPreviousRowWithOuterStates = ({
  outerState,
  previousRow,
  ...props
}) => ({
  ...props,
  previousRowWithOuterStates: [
    outerState,
    outerState,
    ...previousRow,
    outerState,
    outerState,
  ],
});

const appendNeighborhood = ({
  previousRowWithOuterStates,
  neighborhoods = [],
  ...props
}) => ({
  ...props,
  previousRowWithOuterStates,
  neighborhoods: [
    ...neighborhoods,
    slice(
      0,
      3,
      previousRowWithOuterStates,
    ),
  ],
});

const removePreviousRowHead = ({ previousRowWithOuterStates, ...props }) => ({
  ...props,
  previousRowWithOuterStates: tail(previousRowWithOuterStates),
});

const toNeighborhoods = until(
  ({ previousRowWithOuterStates }) => gt(
    3,
    length(previousRowWithOuterStates),
  ),
  pipe(
    appendNeighborhood,
    removePreviousRowHead,
  ),
);

const toRow = ({
  neighborhoods,
  elementaryRule: rule,
  ...props
}) => ({
  ...props,
  row: map(
    pipe(
      join(''),
      x => rule[x],
    ),
    neighborhoods,
  ),
});

const row = pipe(
  toPreviousRow,
  toPreviousRowWithOuterStates,
  toNeighborhoods,
  toRow,
  prop('row'),
);

export default row;
