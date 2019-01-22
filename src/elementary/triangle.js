import {
  equals,
  last,
  length,
  pipe,
  prop,
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

// TODO: Implement
const debug = ({ ...props }) => {
  const res = { ...props };
  return res;
};

const row = pipe(
  toPreviousRow,
  toPreviousRowWithOuterStates,
  debug,
);

const appendRow = ({
  elementaryRule,
  generated,
  outerState,
  ...props
}) => ({
  ...props,
  elementaryRule,
  generated: [
    ...generated,
    // TODO: R.pick
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
