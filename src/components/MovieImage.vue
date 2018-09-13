<template>
    <img :src="imageUrl" />
</template>

<script>
export default {
  name: 'MovieImage',
  props: ['filename'],
  computed: {
    imageUrl() {
      return this.$store.getters.getMovieImageBaseUrl + this.filename;
    }
  }
};
</script>

<style scoped>
</style>