<template>
    <div>
        <Navbar />
        <h1>Popular Movies</h1>
        <LoadingIcon v-if="isLoading"></LoadingIcon>
        <div class="movie-list">
          <MovieListItem 
              v-for="movie in movies" 
              :id="movie.id"
              :title="movie.title"
              :releasedOn="movie.release_date"
              :overview="movie.overview"
              :posterPath="movie.poster_path"
              :key="movie.id"
          >
          </MovieListItem>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getPopularMovieList } from '../service/movieService';
import MovieListItem from './MovieListItem';
import Navbar from './Navbar';
import LoadingIcon from './LoadingIcon';

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
    Navbar,
    LoadingIcon
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters('movie', {
      movies: 'getPopularMovies'
    })
  },
  created() {
    if (this.movies.length > 0) {
      this.isLoading = false;
      return;
    }

    this.$store.dispatch('movie/initPopularMoviesList').then(() => (this.isLoading = false));
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 8px;
}
.movie-list {
  padding: 0 8px;
}

@supports (display: grid) {
  .movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}
</style>