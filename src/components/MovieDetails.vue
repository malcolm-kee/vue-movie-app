<template>
    <div>
        <Navbar showBack="true" />
        <main>
          <LoadingIcon v-if="isLoading"></LoadingIcon>
          <div v-if="details !== undefined">
            <h1>{{details.title}}</h1>
            <div class="image-container">
              <MovieImage :filename="details.poster_path" />
            </div>
            <div class="content">
              <dl>
                <dt>Published Date</dt>
                <dd>{{details.release_date}}</dd>
              </dl>
              <h2>Overview</h2>
              <p class="overview">{{details.overview}}</p>
            </div>
          </div>
        </main>
    </div>
</template>

<script>
import LoadingIcon from './LoadingIcon';
import Navbar from './Navbar';
import MovieImage from './MovieImage';

export default {
  name: 'MovieDetails',
  components: {
    LoadingIcon,
    Navbar,
    MovieImage
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    details() {
      return this.$store.getters.getMovieDetails(this.$route.params.id);
    }
  },
  created() {
    if (this.details !== undefined) {
      this.isLoading = false;
    }
  }
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

h2 {
  margin: 0;
  padding: 8px 0;
}

.overview {
  text-align: justify;
  margin: 0;
}
</style>