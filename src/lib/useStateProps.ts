export type UseStatePropType<T> = {
  state: T;
  setState: (arg: T) => void;
};
