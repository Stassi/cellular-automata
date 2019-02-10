import polygon from './polygon';

const rectangle = ({ ...props }) => polygon({
  ...props,
  vertices: 4,
});

const triangle = ({ startRow = [1], ...props }) => polygon({
  ...props,
  startRow,
  vertices: 3,
});

export { rectangle, triangle };
