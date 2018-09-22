import { getPopularMovieList, getMovieDetails } from '../../service/movieService';

/* shape: {
    popularMovieIds: number[],
    movieDetails: {}
}*/
const state = {
  popularMovieIds: [],
  movieDetails: {}
};

const getters = {
  getPopularMovies: state => state.popularMovieIds.map(movieId => state.movieDetails[movieId]),
  getMovieDetails: state => movieId => state.movieDetails[movieId]
};

const mutations = {
  setPopularMovies(state, payload) {
    state.popularMovieIds = payload.popularMovies.map(movie => movie.id);
    state.movieDetails = payload.popularMovies.reduce(
      (result, movie) => Object.assign({}, result, { [movie.id]: movie }),
      state.movieDetails
    );
  },
  setMovieDetails(state, payload) {
    state.movieDetails[payload.movie.id] = Object.assign({}, state.movieDetails[payload.movie.id], payload.movie);
  }
};

const actions = {
  initPopularMoviesList({ commit }) {
    return getPopularMovieList().then(({ results }) => commit('setPopularMovies', { popularMovies: results }));
  },
  initMovieDetails({ commit }, { movieId }) {
    console.log('initMovieDetails', { movieId });
    return getMovieDetails(movieId).then(movie => {
      console.log('getMovieDetails', { movie });
      commit('setMovieDetails', { movie });
    });
  }
};

export const movie = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
