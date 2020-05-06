import { getPopularMovieList, getMovieDetails } from '../../service/movieService';

export const movie = {
  namespaced: true,
  state: {
    popularMovieIds: [],
    movieDetails: {}
  },
  getters: {
    getPopularMovies: state => state.popularMovieIds.map(movieId => state.movieDetails[movieId]),
    getMovieDetails: state => movieId => state.movieDetails[movieId]
  },
  mutations: {
    setPopularMovies(state, payload) {
      state.popularMovieIds = payload.popularMovies.map(movie => movie.id);
      state.movieDetails = payload.popularMovies.reduce(
        (result, movie) => Object.assign({}, result, { [movie.id]: movie }),
        state.movieDetails
      );
    },
    setMovieDetails(state, payload) {
      state.movieDetails = {
        ...state.movieDetails,
        [payload.movie.id]: payload.movie
      };
    }
  },
  actions: {
    initPopularMoviesList({ commit }) {
      return getPopularMovieList().then(({ results }) => commit('setPopularMovies', { popularMovies: results }));
    },
    initMovieDetails({ commit }, { movieId }) {
      return getMovieDetails(movieId).then(movie => {
        commit('setMovieDetails', { movie });
      });
    }
  }
};
