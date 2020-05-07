import { getConfig } from '@/service/movie.service';
import type { MetaState, RootState } from '@/type';
import type { Module } from 'vuex';

export const meta: Module<MetaState, RootState> = {
  state: {
    image: {
      baseUrl: '',
      posterSizes: [],
    },
  },
  getters: {
    getMovieImageBaseUrl: state => (size: 'small' | 'large'): string => {
      const posterSizes = state.image.posterSizes;

      if (posterSizes.length === 0) {
        return '/';
      }

      const imageSizeIndex =
        size === 'small' ? 0 : size === 'large' ? posterSizes.length - 2 : Math.ceil(posterSizes.length / 2);

      return `${state.image.baseUrl}${state.image.posterSizes[imageSizeIndex]}`;
    },
  },
  mutations: {
    setImageMetaData(state, payload: { baseUrl: string; posterSizes: string[] }) {
      state.image.baseUrl = payload.baseUrl;
      state.image.posterSizes = payload.posterSizes;
    },
  },
  actions: {
    loadMetaData({ commit }) {
      return getConfig().then(({ images }) => {
        commit('setImageMetaData', {
          baseUrl: images.secure_base_url,
          posterSizes: images.poster_sizes,
        });
      });
    },
  },
  namespaced: true,
};
