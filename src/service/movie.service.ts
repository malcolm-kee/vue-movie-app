import type { Configuration, Movie } from "@/type";
import { createRequest } from 'xhfetch';

const apiKey = 'a460784a8c5d04c46594768a48309ba0';

const baseUrl = 'https://api.themoviedb.org/3';

export const getConfig = (): Promise<Configuration> =>
  createRequest(`${baseUrl}/configuration?api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });

export const getPopularMovieList = (): Promise<{
  page: number;
  total_results: number;
  total_pages: 500;
  results: Movie[];
}> =>
  createRequest(`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });

export const getMovieDetails = (movieId: number): Promise<Movie> =>
  createRequest(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    });
