<template>
  <router-link :to="detailsUrl">
      <article class="movie-list-item">
          <div class="movie-details">
              <h1 class="title">{{title}}</h1>
              <h2 class="movie-release-date">released: {{releasedOn}}</h2>
              <div class="movie-description">
                  {{overview}}
              </div>
          </div>
          <div class="movie-image-container">
              <MovieImage :filename="posterPath" imageSize="small" ></MovieImage>
          </div>
      </article>
  </router-link>
</template>

<script>
import MovieImage from './MovieImage';

export default {
  name: 'MovieListItem',
  components: {
    MovieImage
  },
  props: ['id', 'title', 'releasedOn', 'overview', 'posterPath'],
  computed: {
    detailsUrl() {
      return `/movie/${this.id}`;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:focus {
  outline-color: #6d1b7b;
}

.movie-list-item {
  display: flex;
  text-align: left;
  margin: 8px 0;
  border-bottom: 1px solid #bdbdbd;
}

.title {
  margin: 0;
}

.movie-details {
  flex: 1;
}

.movie-release-date {
  font-size: 0.9rem;
  font-style: italic;
  padding-bottom: 8px;
  margin: 0;
}

.movie-description {
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: justify;
  padding-bottom: 8px;
}

.movie-image-container {
  padding: 0 8px;
}
</style>