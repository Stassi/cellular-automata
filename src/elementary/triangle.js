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

const toLastRow = ({ generated, ...props }) => ({
  ...props,
  lastRow: last(generated),
});

const row = pipe(
  toLastRow,
  ({ lastRow, ...props }) => {
    // TODO: Implement
    const res = ['debug'];
    return res;
  },
);

const appendRow = ({
  elementaryRule,
  generated,
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
