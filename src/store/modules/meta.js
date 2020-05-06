import { getConfig } from '../../service/movieService';

/*
    shape: {
        image: {
            baseUrl: string,
            posterSizes: string[]
        }
    }
*/
const state = {
  image: {
    baseUrl: '',
    posterSizes: [],
  },
};

const getters = {
  getMovieImageBaseUrl: state => size => {
    const posterSizes = state.image.posterSizes;

    if (posterSizes.length === 0) {
      return '/';
    }

    const imageSizeIndex =
      size === 'small' ? 0 : size === 'large' ? posterSizes.length - 2 : Math.ceil(posterSizes.length / 2);

    return `${state.image.baseUrl}${state.image.posterSizes[imageSizeIndex]}`;
  },
};

const mutations = {
  setImageMetaData(state, payload) {
    state.image.baseUrl = payload.baseUrl;
    state.image.posterSizes = payload.posterSizes;
  },
};

const actions = {
  loadMetaData({ commit }) {
    return getConfig().then(({ images }) => {
      commit('setImageMetaData', {
        baseUrl: images.secure_base_url,
        posterSizes: images.poster_sizes,
      });
    });
  },
};

export const meta = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
