import { getMovieDetails, getPopularMovieList } from '@/service/movie.service';
import type { Movie, MovieState, RootState } from '@/type';
import type { Module } from "vuex";

export const movie: Module<MovieState, RootState> = {
  namespaced: true,
  state: {
    popularMovieIds: [],
    movieDetails: {},
  },
  getters: {
    getPopularMovies: state => state.popularMovieIds.map(movieId => state.movieDetails[movieId]),
    getMovieDetails: state => (movieId: number) => state.movieDetails[movieId],
  },
  mutations: {
    setPopularMovies(state, payload: {popularMovies: Movie[]}) {
      state.popularMovieIds = payload.popularMovies.map(movie => movie.id);
      state.movieDetails = payload.popularMovies.reduce(
        (result, movie) => Object.assign({}, result, { [movie.id]: movie }),
        state.movieDetails
      );
    },
    setMovieDetails(state, payload) {
      state.movieDetails = {
        ...state.movieDetails,
        [payload.movie.id]: payload.movie,
      };
    },
  },
  actions: {
    initPopularMoviesList({ commit }) {
      return getPopularMovieList().then(({ results }) => commit('setPopularMovies', { popularMovies: results }));
    },
    initMovieDetails({ commit }, { movieId }) {
      return getMovieDetails(movieId).then(movie => {
        commit('setMovieDetails', { movie });
      });
    },
  },
};
