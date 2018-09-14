import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    popularMovies: [],
    movieDetails: {},
    imageMetaData: {
      baseUrl: '',
      posterSizes: []
    }
  },
  getters: {
    getPopularMovies: state =>
      state.popularMovies.map(movieId => state.movieDetails[movieId]),
    getMovieDetails: state => id => state.movieDetails[id],
    getMovieImageBaseUrl: state => size => {
      const posterSizes = state.imageMetaData.posterSizes;

      if (posterSizes.length === 0) {
        return '/';
      }

      const imageSizeIndex =
        size === 'small'
          ? 0
          : size === 'large'
            ? posterSizes.length - 2
            : Math.ceil(posterSizes.length / 2);

      return `${state.imageMetaData.baseUrl}${
        state.imageMetaData.posterSizes[imageSizeIndex]
      }`;
    }
  },
  mutations: {
    setPopularMovies(state, payload) {
      state.popularMovies = payload.popularMovies.map(movie => movie.id);
      state.movieDetails = payload.popularMovies.reduce(
        (result, movie) => Object.assign({}, result, { [movie.id]: movie }),
        state.movieDetails
      );
    },
    setImageMetaData(state, payload) {
      state.imageMetaData.baseUrl = payload.baseUrl;
      state.imageMetaData.posterSizes = payload.posterSizes;
    }
  }
});
