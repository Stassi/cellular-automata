import {
  equals,
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
import elementaryRule from './rule';

const toElementaryRule = ({ rule, ...props }) => ({
  ...props,
  elementaryRule: elementaryRule(rule),
});

const initializeGenerated = ({ seed, ...props }) => ({
  ...props,
  generated: [[...seed]],
});

const generatedLengthEqualsHeight = ({ generated, height }) => equals(
  height,
  length(generated),
);

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

const appendRow = ({
  elementaryRule,
  generated,
  outerState,
  ...props
}) => ({
  ...props,
  elementaryRule,
  outerState,
  generated: [
    ...generated,
    row({
      elementaryRule,
      generated,
      outerState,
    }),
  ],
});

const appendRowsUntilGeneratedLengthEqualsHeight = until(
  generatedLengthEqualsHeight,
  appendRow,
);

const triangle = pipe(
  toElementaryRule,
  initializeGenerated,
  appendRowsUntilGeneratedLengthEqualsHeight,
  prop('generated'),
);

export default triangle;
