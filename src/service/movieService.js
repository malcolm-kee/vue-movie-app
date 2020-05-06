import { createRequest } from 'xhfetch';

const apiKey = 'a460784a8c5d04c46594768a48309ba0';

const baseUrl = 'https://api.themoviedb.org/3';

export const getConfig = () =>
  createRequest(`${baseUrl}/configuration?api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });

export const getPopularMovieList = () =>
  createRequest(`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });

export const getMovieDetails = movieId =>
  createRequest(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });
