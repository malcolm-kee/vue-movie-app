/* eslint-disable @typescript-eslint/camelcase */
export const getConfig = () =>
  Promise.resolve({
    images: {
      base_url: '',
      secure_base_url: '',
      backdrop_sizes: [],
      logo_sizes: [],
      poster_sizes: [],
      profile_sizes: [],
      still_sizes: [],
    },
  });

const MOVIES = [
  {
    popularity: 448.572,
    vote_count: 3276,
    video: false,
    poster_path: '\\/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    id: 419704,
    adult: false,
    backdrop_path: '\\/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
    original_language: 'en',
    original_title: 'Ad Astra',
    genre_ids: [18, 878],
    title: 'Ad Astra',
    vote_average: 6,
    overview:
      'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
    release_date: '2019-09-17',
  },
  {
    popularity: 279.207,
    vote_count: 1522,
    video: false,
    poster_path: '\\/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg',
    id: 545609,
    adult: false,
    backdrop_path: '\\/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
    original_language: 'en',
    original_title: 'Extraction',
    genre_ids: [28, 18, 53],
    title: 'Extraction',
    vote_average: 7.5,
    overview:
      'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…',
    release_date: '2020-04-24',
  },
  {
    popularity: 172.548,
    vote_count: 2071,
    video: false,
    poster_path: '\\/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    id: 338762,
    adult: false,
    backdrop_path: '\\/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
    original_language: 'en',
    original_title: 'Bloodshot',
    genre_ids: [28, 878],
    title: 'Bloodshot',
    vote_average: 7.1,
    overview:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    release_date: '2020-03-05',
  },
  {
    popularity: 180.871,
    vote_count: 3589,
    video: false,
    poster_path: '\\/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
    id: 454626,
    adult: false,
    backdrop_path: '\\/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
    original_language: 'en',
    original_title: 'Sonic the Hedgehog',
    genre_ids: [28, 35, 878, 10751],
    title: 'Sonic the Hedgehog',
    vote_average: 7.6,
    overview:
      'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
    release_date: '2020-02-12',
  },
];

export const getPopularMovieList = () =>
  Promise.resolve({
    results: MOVIES,
  });

export const getMovieDetails = (movieId: number) => Promise.resolve(MOVIES.find(movie => movie.id === movieId));
