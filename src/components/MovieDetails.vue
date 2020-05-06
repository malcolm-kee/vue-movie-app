<template>
  <div>
    <Navbar showBack="true" />
    <main>
      <Container>
        <LoadingIcon v-if="isLoading"></LoadingIcon>
        <div v-if="details !== undefined">
          <h1>{{ details.title }}</h1>
          <div class="image-container">
            <MovieImage :filename="details.poster_path" />
          </div>
          <div class="content">
            <dl>
              <dt v-if="hasGenre">Genres</dt>
              <dd v-if="hasGenre">{{ genres }}</dd>
              <dt>Published Date</dt>
              <dd>{{ details.release_date }}</dd>
            </dl>
            <h2>Overview</h2>
            <p class="overview">{{ details.overview }}</p>
          </div>
        </div>
      </Container>
    </main>
  </div>
</template>

<script>
import LoadingIcon from './LoadingIcon';
import Navbar from './Navbar';
import MovieImage from './MovieImage';
import Container from './Container';

export default {
  name: 'MovieDetails',
  components: {
    Container,
    LoadingIcon,
    Navbar,
    MovieImage,
  },
  computed: {
    details() {
      return this.$store.getters['movie/getMovieDetails'](this.$route.params.id);
    },
    hasGenre() {
      return this.details && this.details.genres && this.details.genres.length > 0;
    },
    genres() {
      return this.hasGenre ? this.details.genres.map(genre => genre.name).join(', ') : '';
    },
    isLoading() {
      return !this.details;
    },
  },
  created() {
    this.$store.dispatch('movie/initMovieDetails', { movieId: this.$route.params.id });
  },
};
</script>

<style scoped>
.image-container {
  max-width: 100%;
}

@media screen and (min-width: 500px) {
  .image-container {
    max-width: 300px;
    float: left;
    padding-right: 8px;
  }
}

.image-container > img {
  width: 100%;
}

main {
  padding: 8px;
}

h1 {
  margin: 0;
  margin-bottom: 8px;
}

h2 {
  margin: 0;
  padding: 8px 0;
}

.content {
  line-height: 1.5;
}

.overview {
  text-align: justify;
  margin: 0;
}

dt {
  margin-top: 8px;
  font-weight: bold;
}

dt:first-child {
  margin-top: 0;
}

dd {
  margin-bottom: 8px;
}
</style>
