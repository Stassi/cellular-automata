import polygon from './polygon';

const rectangle = ({
  seed = [1, 0, 1],
  ...props,
}) => polygon({
  ...props,
  seed,
  vertices: 4,
});

const triangle = ({
  seed = [1],
  ...props,
}) => polygon({
  ...props,
  seed,
  vertices: 3,
});

export { rectangle, triangle };
