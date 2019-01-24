import {
  equals,
  length,
  pipe,
  prop,
  until,
} from 'ramda';
import neighborhoodsToRow from './neighborhoodsToRow';
import row from './row';

const setDefaults = ({
  outerState = 0,
  seed = [1],
  ...props
}) => ({
  ...props,
  outerState,
  seed,
});

const initializeGenerated = ({ seed, ...props }) => ({
  ...props,
  generated: [[...seed]],
});

const toNeighborhoodsToRow = ({ rule, ...props }) => ({
  ...props,
  neighborhoodsToRow: neighborhoodsToRow(rule),
});

const generatedLengthEqualsHeight = ({ generated, height }) => equals(
  height,
  length(generated),
);

const appendRow = ({
  generated,
  neighborhoodsToRow,
  outerState,
  ...props
}) => ({
  ...props,
  neighborhoodsToRow,
  outerState,
  generated: [
    ...generated,
    row({
      generated,
      neighborhoodsToRow,
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
  initializeGenerated,
  toNeighborhoodsToRow,
  appendRowsUntilGeneratedLengthEqualsHeight,
  prop('generated'),
);

export default triangle;
