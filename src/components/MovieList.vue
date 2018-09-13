<template>
    <div>
        <MovieListItem 
            v-for="movie in movies" 
            :id="movie.id"
            :title="movie.title"
            :releasedOn="movie.release_date"
            :overview="movie.overview"
            :key="movie.id"
        >
        </MovieListItem>
    </div>
</template>

<script>
import { getPopularMovieList } from '../service/movieService';
import MovieListItem from './MovieListItem';

export default {
  name: 'MovieList',
  components: {
    MovieListItem
  },
  data() {
    return {
      isLoading: true,
      movies: []
    };
  },
  created() {
    getPopularMovieList().then(({ results }) => {
      this.movies = results;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
</style>