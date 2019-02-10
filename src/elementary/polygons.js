import polygon from './polygon';

const rectangle = ({
  height,
  width,
  ...props
}) => polygon({
  ...props,
  vertices: 4,
  width: width || height,
});

const triangle = ({ startRow = [1], ...props }) => polygon({
  ...props,
  startRow,
  vertices: 3,
});

export { rectangle, triangle };
