<template>
    <article class="movie-list-item">
        <h1>{{title}}</h1>
        <h2>released on {{releasedOn}}</h2>
        <div class="description">
            {{overview}}
        </div>
        <MovieImage :filename="posterPath" ></MovieImage>
    </article>
</template>

<script>
import MovieImage from './MovieImage';

export default {
  name: 'MovieListItem',
  components: {
    MovieImage
  },
  props: ['id', 'title', 'releasedOn', 'overview', 'posterPath']
};
</script>

<style scoped>
</style>