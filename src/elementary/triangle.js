import {
  equals,
  length,
  pipe,
  prop,
  until,
} from 'ramda';
import row from './row';
import elementaryRule from './rule';

const setDefaults = ({
  outerState = 0,
  seed = [1],
  ...props
}) => ({
  ...props,
  outerState,
  seed,
});

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
  setDefaults,
  toElementaryRule,
  initializeGenerated,
  appendRowsUntilGeneratedLengthEqualsHeight,
  prop('generated'),
);

export default triangle;
