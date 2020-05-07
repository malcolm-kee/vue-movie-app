import { render } from '@testing-library/vue';
import { meta } from '@/store/modules/meta';
import { movie } from '@/store/modules/movie';
import router from '@/router';

export const renderWithStoreAndRouter: typeof render = (component, options, configure) =>
  render(
    component,
    {
      store: {
        strict: true,
        modules: {
          meta,
          movie,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      },
      router,
      ...options,
    },
    configure
  );
