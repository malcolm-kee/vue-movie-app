export type ImageConfiguration = {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
};

export type Configuration = {
  images: ImageConfiguration;
  change_keys: string[];
};

export type MovieGenre = {
  id: number;
  name: string;
};

export type MovieProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type MovieProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type MovieSpokenLanguage = {
  iso_639_1: string;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieProductionCompany[];
  production_countries: MovieProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieState = {
  popularMovieIds: number[];
  movieDetails: Record<number, Movie>;
};

export type MetaState = {
  image: {
    baseUrl: string;
    posterSizes: string[];
  };
};

export type RootState = {
  movie: MovieState;
  meta: MetaState;
};
