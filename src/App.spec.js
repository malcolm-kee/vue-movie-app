import App from './App.vue';
import { renderWithStoreAndRouter } from './lib/test-lib';

it(`works`, () => {
  const { getByText } = renderWithStoreAndRouter(App);

  expect(getByText('About This Site')).not.toBeNull();
});
