import axios from 'axios';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDYwNzg0YThjNWQwNGM0NjU5NDc2OGE0ODMwOWJhMCIsInN1YiI6IjVhNTg3Njg3OTI1MTQxMDIxODAwNWY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7gTiTNKYPP5BzW4wV0V1jdLj69UPEXhjkPIY6LGueYQ';
const apiKey = 'a460784a8c5d04c46594768a48309ba0';

const baseUrl = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export const getPopularMovieList = () =>
  axios('/discover/movie', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    params: { sort_by: 'popularity.desc', api_key: apiKey }
  }).then(result => result.data);
