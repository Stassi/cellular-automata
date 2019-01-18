import {
  equals,
  join,
  length,
  map,
  pipe,
  prepend,
  range,
  reverse,
  split,
  until,
  zipObj,
} from 'ramda';

const toBinary = x => Number(x).toString(2);

const nBitBinary = x => pipe(
  toBinary,
  split(''),
  map(Number),
  until(
    pipe(
      length,
      equals(x),
    ),
    prepend(0),
  ),
);

const threeBitBinary = nBitBinary(3);
const eightBitBinary = nBitBinary(8);

const mapZipDescendingThreeBitBinary = pipe(
  map(
    pipe(
      threeBitBinary,
      join(''),
    ),
  ),
  reverse,
  zipObj,
);
const zeroThroughSeven = range(0, 8);
const mapElementaryConfigurations = mapZipDescendingThreeBitBinary(zeroThroughSeven);

const elementaryRule = pipe(
  eightBitBinary,
  mapElementaryConfigurations,
);

export default elementaryRule;
