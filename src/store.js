import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    imageMetaData: {
      baseUrl: '',
      posterSizes: []
    }
  },
  getters: {
    getMovieImageBaseUrl: state => {
      if (state.imageMetaData.posterSizes.length === 0) {
        return '/';
      }

      const mediumSizeIndex = Math.ceil(
        state.imageMetaData.posterSizes.length / 2
      );

      return `${state.imageMetaData.baseUrl}${
        state.imageMetaData.posterSizes[mediumSizeIndex]
      }`;
    }
  },
  mutations: {
    setImageMetaData(state, payload) {
      state.imageMetaData.baseUrl = payload.baseUrl;
      state.imageMetaData.posterSizes = payload.posterSizes;
    }
  }
});
