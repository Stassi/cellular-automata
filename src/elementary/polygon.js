import {
  equals,
  length,
  pipe,
  prop,
  until,
} from 'ramda';
import neighborhoodsToRow from './neighborhoodsToRow';
import row from './row';

const setDefaultOuterState = ({ outerState = 0, ...props }) => ({
  ...props,
  outerState,
});

const setDefaultHeightFromStartRowLength = ({
  height,
  startRow,
  ...props
}) => ({
  ...props,
  startRow,
  height: height || length(startRow),
});

const setDefaultWidthFromHeight = ({
  height,
  width,
  ...props
}) => ({
  ...props,
  height,
  width: width || height,
});

// TODO: Implement
const debugTwo = ({
  seed,
  width,
}) => {
  const res = {
    seed,
    width,
  };
  // TODO: Sample { seed, collection: [0, 1], count: width }
  return res;
};

// TODO: Implement
const debug = ({
  seed,
  startRow,
  width,
  ...props
}) => {
  const res = {
    ...props,
    startRow: startRow || debugTwo({
      seed,
      width,
    }),
  };
  return res;
};

const initializeGeneratedFromStartRow = ({ startRow, ...props }) => ({
  ...props,
  generated: [[...startRow]],
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
  vertices,
  ...props
}) => ({
  ...props,
  neighborhoodsToRow,
  outerState,
  vertices,
  generated: [
    ...generated,
    row({
      generated,
      neighborhoodsToRow,
      outerState,
      vertices,
    }),
  ],
});

const appendRowsUntilGeneratedLengthEqualsHeight = until(
  generatedLengthEqualsHeight,
  appendRow,
);

// TODO: Implement base-10 formatting
// TODO: Implement horizontal and vertical mirroring
const polygon = pipe(
  setDefaultOuterState,
  setDefaultHeightFromStartRowLength,
  setDefaultWidthFromHeight,
  debug,
  initializeGeneratedFromStartRow,
  toNeighborhoodsToRow,
  appendRowsUntilGeneratedLengthEqualsHeight,
  prop('generated'),
);

export default polygon;
