import { fireEvent } from '@testing-library/vue';
import App from './App.vue';
import { renderWithStoreAndRouter } from './lib/test-lib';

jest.mock('@/service/movie.service');

describe(`MovieApp`, () => {
  it(`works`, () => {
    const { getByText } = renderWithStoreAndRouter(App);

    expect(getByText('About This Site')).not.toBeNull();
  });

  it(`loads movie details`, async () => {
    const helper = renderWithStoreAndRouter(App);
    fireEvent.click(helper.getByText('Popular'));

    const $movieTitle = await helper.findByText('Bloodshot');

    expect($movieTitle).not.toBeNull();

    fireEvent.click($movieTitle);

    const $movieTitleInDetails = await helper.findByText('Bloodshot');

    expect($movieTitleInDetails).not.toBeNull();
  });
});
