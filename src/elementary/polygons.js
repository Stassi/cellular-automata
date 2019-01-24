import polygon from './polygon';

const rectangle = ({
  // TODO: Implement default stochastic seed
  seed = [1, 0, 1],
  ...props,
}) => polygon({
  ...props,
  seed,
  vertices: 4,
});

const triangle = ({
  // TODO: Implement width parameter
  seed = [1],
  ...props,
}) => polygon({
  ...props,
  seed,
  vertices: 3,
});

export { rectangle, triangle };
