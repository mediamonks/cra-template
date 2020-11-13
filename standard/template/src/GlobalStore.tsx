import createStoreContext from './utils/createStoreContext';

export const [GlobalStoreProvider, useGlobalStore] = createStoreContext('GlobalStore', () => ({
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
}));
