<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getConfig } from './service/movieService';

export default {
  name: 'App',
  created() {
    getConfig().then(result => {
      this.$store.commit('setImageMetaData', {
        baseUrl: result.images.secure_base_url,
        posterSizes: result.images.poster_sizes
      });
    });
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
