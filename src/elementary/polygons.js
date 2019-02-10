import polygon from './polygon';

const rectangle = ({ ...props }) => polygon({
  ...props,
  vertices: 4,
});

const triangle = ({ ...props }) => polygon({
  ...props,
  vertices: 3,
});

export { rectangle, triangle };
